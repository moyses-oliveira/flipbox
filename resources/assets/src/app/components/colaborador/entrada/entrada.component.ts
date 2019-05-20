import {Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {ColaboradorPontoService} from "../../../services/colaborador-ponto.service";
import {Ponto} from "../../../models/ponto";

@Component({
    selector: 'app-entrada',
    templateUrl: './entrada.component.html',
    styleUrls: ['./entrada.component.scss']
})
export class EntradaComponent implements OnInit {

    colaborador: number;

    form: FormGroup;

    title: string;

    errorMessage: string;

    data:object;

    constructor(
        public activeModal: NgbActiveModal,
        private service:ColaboradorPontoService,
        private router:Router
        ) {
    }

    ngOnInit() {
        this.title = 'Novo Colaborador';
        this.form = new FormGroup({
            id: new FormControl(null, [Validators.nullValidator]),
            dia: new FormControl(null, [Validators.required]),
            inicio: new FormControl(null, [Validators.required, Validators.pattern(this.pattern24h)]),
            termino: new FormControl(null, [Validators.required, Validators.pattern(this.pattern24h)])
        });
    }

    ngAfterViewInit() {

        setTimeout(() => {
            let data = this.data;

            if(!!data['id'])
                this.title = "Editar Registro";

            if (data['dia'])
                data['dia'] = this.data['dia'].substring(0, 10);
            else
                data['dia'] = this.cdate();

            this.form.patchValue(data);
        });
    }

    get fieldDia() {
        return this.form.get('dia');
    }

    get fieldInicio() {
        return this.form.get('inicio');
    }

    get fieldTermino() {
        return this.form.get('termino');
    }

    get pattern24h() {
        return /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    }

    cdate() {
        const currentDate = new Date();
        return currentDate.toISOString().substring(0,10);
    }

    closeModal() {
        this.activeModal.close('Modal Closed');
    }

    onSubmit() {
        this.errorMessage = null;
        if(this.form.invalid) {
            (<any>Object).values(this.form.controls).forEach(control => {
                control.markAsTouched();
            });
            return;
        }
        let tInicio = this.fieldInicio.value;
        let tTermino = this.fieldTermino.value;
        let inicio = new Date('1/1/1999 ' + tInicio + ':00');
        let termino = new Date('1/1/1999 ' + tTermino + ':00');
        if(termino <= inicio) {
            this.errorMessage = 'Data de Início, não pode ser maior que a data de Término.';
            return;
        }

        let obs:Observable<object> = this.service.save(this.form.value as Ponto, this.colaborador, this.data['id']);
        obs.subscribe((value) => {
            if(!value['success']) {
                if(value['errors']['inicio'])
                    this.form.get('inicio').setErrors({"server": value['errors']['inicio'][0]});

                if(value['errors']['termino'])
                    this.form.get('termino').setErrors({"server": value['errors']['termino'][0]});

                console.log(this.form.errors);
                return;

            }
            this.closeModal();
        });
    }
}
