import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';;
import { Observable } from 'rxjs';
import {Colaborador} from "../models/colaborador";

const API_URL: string = 'http://127.0.0.1:8000/api';

@Injectable({
    providedIn: 'root'
})

export class ColaboradorService {

    constructor(private http: HttpClient) {
    }

    getCollection(): Observable<Colaborador[]> {
        return this.http.get<Colaborador[]>(API_URL + '/colaborador/listing', {
            headers: {'Accept': 'application/json'}
        });
    }

    load(id:number): Observable<Colaborador> {
        return this.http.get<Colaborador>(API_URL + '/colaborador/load/' + id, {
            headers: {'Accept': 'application/json'}
        });
    }

    save(data:Colaborador, id:number): Observable<object> {
        return this.http.post<object>(API_URL + '/colaborador/save' + (id ? '/' + id : ''), data, {
            headers: {'Accept': 'application/json'}
        });
    }
}
