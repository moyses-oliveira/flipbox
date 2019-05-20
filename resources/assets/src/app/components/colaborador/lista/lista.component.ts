import { Component, OnInit } from '@angular/core';
import {ColaboradorService} from "../../../services/colaborador.service";
import {Colaborador} from "../../../models/colaborador";
import {AlertDeleteComponent} from "../../alert-delete/alert-delete.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-colaborador-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {

    collection: Colaborador[];
    errorMessage: string;

    constructor(private service: ColaboradorService, private modalService: NgbModal) { }

    ngOnInit() {
        this.getCollection();
    }

    getCollection() {
        this.service
            .getCollection()
            .subscribe(
                collection => this.collection= collection,
                error => this.errorMessage = <any>error
            );
    }

    deleteQuestion(row:object) {
        const modal = this.modalService.open(AlertDeleteComponent);
        modal.componentInstance.data = row;
        modal.componentInstance.message = 'Deseja excluir este colaborador?';
        modal.result.then((result) => {

            if(!result)
                this.getCollection();
            else
                this.rm(result as Colaborador);

        }).catch((error) => {
            console.log(error);
        });

    }

    rm(data:Colaborador) {
        this.service.rm(data).subscribe(
            collection => { this.collection = collection; },
            error => this.errorMessage = <any>error
        );
    }
}
