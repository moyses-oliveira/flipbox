import { Component, OnInit } from '@angular/core';
import {ColaboradorPontoService} from "../../../services/colaborador-ponto.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Ponto} from "../../../models/ponto";
import {NgbModal, NgbModalOptions} from "@ng-bootstrap/ng-bootstrap";
import {EntradaComponent} from "../entrada/entrada.component";
import {AlertDeleteComponent} from "../../alert-delete/alert-delete.component";

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.scss']
})
export class LancamentosComponent implements OnInit {

    colaborador: number;
    collection: Ponto[];
    errorMessage: string;

    constructor(
        private service:ColaboradorPontoService,
        private route: ActivatedRoute,
        private router: Router,
        private modalService: NgbModal
    ) {
        this.route.params.subscribe(params => {
          this.colaborador = +params['colaborador'];
        });
    }

    ngOnInit() {
        this.getCollection();
    }

    openForm(row:object) {
        const modal = this.modalService.open(EntradaComponent);
        modal.componentInstance.data = row;
        modal.componentInstance.colaborador = this.colaborador;
        modal.result.then((result) => {
            this.getCollection();
        }).catch((error) => {
            console.log(error);
        });
    }

    deleteQuestion(row:object) {
        const modal = this.modalService.open(AlertDeleteComponent);
        modal.componentInstance.data = row;
        modal.componentInstance.message = 'Deseja excluir este registro?';
        modal.result.then((result) => {

            if(!result)
                this.getCollection();
            else
                this.rm(result as Ponto);

        }).catch((error) => {
            console.log(error);
        });

    }

    getCollection() {
        this.service
            .getCollection(this.colaborador)
            .subscribe(
                collection => { this.collection = collection; },
                error => this.errorMessage = <any>error
            );
    }

    rm(data:Ponto) {
        this.service.rm(data).subscribe(
            collection => { this.collection = collection; },
            error => this.errorMessage = <any>error
        );
    }
}
