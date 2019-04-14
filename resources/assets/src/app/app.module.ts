import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {ListaColaboradorComponent} from "./components/lista-colaborador/lista-colaborador.component";
import {FormColaboradorComponent} from "./components/form-colaborador/form-colaborador.component";
import {NgxMaskModule} from 'ngx-mask';

const routes: Routes = [
    { path: '', component: ListaColaboradorComponent, pathMatch: 'full' },
    { path: 'novo', component: FormColaboradorComponent},
    { path: 'editar/:id', component: FormColaboradorComponent},
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
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgxMaskModule.forRoot(),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
