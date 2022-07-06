import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, catchError, EMPTY, map, Observable, of, Subject, switchAll, switchMap, tap } from "rxjs";
import { IForecast } from "../../interfaces/IForecast";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  public apiKey = '001c9823ff424e12bd674838220607'
  public urlApi!: string;
  public forecast$ = new BehaviorSubject<IForecast | null>(null);
  public currentWeather!: IForecast;
  public input!: string

  constructor(
    private http: HttpClient
  ) {
    this.urlApi = `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=London`
  }

  forecastDto(res: IForecast): Observable<IForecast> {
    return of({
      current: {
        condition: res.current.condition,
        feelslike_c: res.current.feelslike_c,
        temp_c: res.current.temp_c
      },
      location: {
        name: res.location.name,
        localtime: res.location.localtime
      }
    })
  }

  get() {
    this.urlApi = `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.input}`
    this.getForecast(this.http.get<IForecast>(this.urlApi))
      .subscribe( res => {
          this.forecast$.next(res);
          this.currentWeather = this.forecast$.value as IForecast
        this.input = ''
        }
      )
  }

  getForecast(get$: Observable<IForecast>): Observable<IForecast> {
    return get$.pipe(
      switchMap(res => this.forecastDto(res)),
      catchError(({error}) => {
        alert(error.error.message);
        this.input = ''
        return EMPTY
      })
    )
  }



  ngOnInit() {
   this.getForecast(this.http.get<IForecast>(this.urlApi))
      .subscribe(res => {
        this.forecast$.next(res);
        this.currentWeather = this.forecast$.value as IForecast
        this.input = ''
      })
  }
}
