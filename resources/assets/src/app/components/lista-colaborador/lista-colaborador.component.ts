import { Component, OnInit } from '@angular/core';
import {Colaborador} from "../../models/colaborador";
import {ColaboradorService} from "../../services/colaborador.service";

@Component({
  selector: 'app-lista-colaborador',
  templateUrl: './lista-colaborador.component.html',
  styleUrls: ['./lista-colaborador.component.css']
})

export class ListaColaboradorComponent implements OnInit {

    collection: Colaborador[];
    errorMessage: string;

    constructor(private colaboradorService: ColaboradorService) { }

    ngOnInit() {
        this.getCollection();
    }

    getCollection() {
        this.colaboradorService
            .getCollection()
            .subscribe(
                collection => this.collection= collection,
                error => this.errorMessage = <any>error
            );
    }

}
