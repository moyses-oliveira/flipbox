import {Time} from "@angular/common";

export interface Ponto {
    id: Number,
    fkColaborador: Number,
    dia: Date,
    inicio: Time,
    termino: Time,
    deleted: Date
}
