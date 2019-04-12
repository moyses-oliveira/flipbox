import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';;
import { Observable } from 'rxjs';

export interface Colaborador {
    id: Number,
    nome: String,
    CPF: String,
    PIS: String,
    equipe: String,
    cargo: String
}

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
}
