import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {Ponto} from "../models/ponto";

const API_URL: string = '/api';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorPontoService {

    constructor(private http: HttpClient) {
    }

    getCollection(colaborador:number): Observable<Ponto[]> {
        return this.http.get<Ponto[]>(API_URL + '/colaborador-ponto/lancamentos/' + colaborador, {
            headers: {'Accept': 'application/json'}
        });
    }

    save(data:Ponto, colaborador:number, id:number): Observable<object> {
        data.fkColaborador = colaborador;
        return this.http.post<object>(API_URL + '/colaborador-ponto/save/' + colaborador + (id ? '/' + id : ''), data, {
            headers: {'Accept': 'application/json'}
        });
    }

    rm(data:Ponto): Observable<Ponto[]> {
        return this.http.delete<Ponto[]>(API_URL + '/colaborador-ponto/rm/' + data.id, {
            headers: {'Accept': 'application/json'}
        });
    }
}
