import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Colaborador} from "../models/colaborador";


const API_URL: string = '/api';

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

    rm(data:Colaborador): Observable<Colaborador[]> {
        return this.http.delete<Colaborador[]>(API_URL + '/colaborador/rm/' + data.id, {
            headers: {'Accept': 'application/json'}
        });
    }

}
