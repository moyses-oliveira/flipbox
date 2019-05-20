import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxMaskModule } from 'ngx-mask';
import {
    ListaComponent as ColaboradorLista,
    FormComponent as ColaboradorForm,
    EntradaComponent as ColaboradorEntrada,
    LancamentosComponent as ColaboradorLancamentos
} from "./components/colaborador/components";
import { AlertDeleteComponent } from "./components/alert-delete/alert-delete.component";
import { MomentModule } from 'angular2-moment';

const routes: Routes = [
    { path: '', component: ColaboradorLista, pathMatch: 'full' },
    { path: 'novo', component: ColaboradorForm},
    { path: 'editar/:id', component: ColaboradorForm},
    { path: 'lancamentos/:colaborador', component: ColaboradorLancamentos},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    ColaboradorLista,
    ColaboradorForm,
    ColaboradorLancamentos,ColaboradorEntrada, AlertDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MomentModule,
    NgxMaskModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    NgbModule,
    NgbDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ColaboradorEntrada, AlertDeleteComponent]
})
export class AppModule {

}
