export interface IForecast {
  current: {
    condition: {
      icon: string,
      text:string
    }
    feelslike_c: number,
    temp_c: number
  },
  location: {
    name: string,
    localtime: string
  }
}
