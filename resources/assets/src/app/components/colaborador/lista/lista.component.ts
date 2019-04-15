import { Component, OnInit } from '@angular/core';
import {ColaboradorService} from "../../../services/colaborador.service";
import {Colaborador} from "../../../models/colaborador";

@Component({
  selector: 'app-colaborador-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {

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
