import { Component, OnInit } from '@angular/core';
import {ColaboradorPontoService} from "../../../services/colaborador-ponto.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Ponto} from "../../../models/ponto";

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.scss']
})
export class LancamentosComponent implements OnInit {

    colaborador: number;
    collection: Ponto[];
    errorMessage: string;

    constructor(private service:ColaboradorPontoService, private route: ActivatedRoute, private router: Router) {
        this.route.params.subscribe(params => {
          this.colaborador = +params['colaborador'];
        });
    }

    ngOnInit() {
        this.getCollection();
    }

    getCollection() {
        this.service
            .getCollection(this.colaborador)
            .subscribe(
                collection => this.collection= collection,
                error => this.errorMessage = <any>error
            );
    }
}
