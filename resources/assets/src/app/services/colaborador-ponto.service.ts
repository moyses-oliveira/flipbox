import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {Ponto} from "../models/ponto";

const API_URL: string = 'http://127.0.0.1:8000/api';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorPontoService {

    constructor(private http: HttpClient) {
    }

    getCollection(colaborador:number): Observable<Ponto[]> {
        return this.http.get<Ponto[]>(API_URL + '/colaborador/lancamentos/' + colaborador, {
            headers: {'Accept': 'application/json'}
        });
    }

    load(id:number): Observable<Ponto> {
        return this.http.get<Ponto>(API_URL + '/colaborador/load/' + id, {
            headers: {'Accept': 'application/json'}
        });
    }

    save(data:Ponto, id:number): Observable<object> {
        return this.http.post<object>(API_URL + '/colaborador/save' + (id ? '/' + id : ''), data, {
            headers: {'Accept': 'application/json'}
        });
    }
}
