import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaColaboradorComponent } from './lista-colaborador/lista-colaborador.component';
import { FormColaboradorComponent } from './form-colaborador/form-colaborador.component';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { MDBBootstrapModule } from 'angular-bootstrap-md';

const routes: Routes = [
    { path: '', component: ListaColaboradorComponent, pathMatch: 'full' },
    { path: 'form', component: FormColaboradorComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    ListaColaboradorComponent,
    FormColaboradorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
