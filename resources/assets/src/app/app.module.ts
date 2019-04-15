import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { EntradaComponent } from './components/colaborador/entrada/entrada.component';

const routes: Routes = [
    { path: '', component: ColaboradorLista, pathMatch: 'full' },
    { path: 'novo', component: ColaboradorForm},
    { path: 'editar/:id', component: ColaboradorForm},
    { path: 'lancamentos/:colaborador', component: ColaboradorLancamentos},
    { path: 'lancamentos/novo/:colaborador', component: ColaboradorEntrada},
    { path: 'lancamentos/editar/:colaborador/:id', component: ColaboradorEntrada},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    ColaboradorLista,
    ColaboradorForm,
      ColaboradorEntrada,
    ColaboradorLancamentos,
    EntradaComponent
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
