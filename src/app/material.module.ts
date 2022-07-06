import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";



@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatTabsModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatTabsModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
