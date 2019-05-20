import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-alert-delete',
    templateUrl: './alert-delete.component.html',
    styleUrls: ['./alert-delete.component.scss']
})
export class AlertDeleteComponent implements OnInit {

    message:string;

    data: object;

    title:string;

    constructor(private activeModal: NgbActiveModal) {
        this.title = 'Atenção!';
    }

    ngOnInit() {

    }

    closeModal(res) {
        this.activeModal.close(res);
    }
}
