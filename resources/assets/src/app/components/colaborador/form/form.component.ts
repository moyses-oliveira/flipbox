import {FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {ColaboradorService} from "../../../services/colaborador.service";
import {Colaborador} from "../../../models/colaborador";
import {ColaboradorValidatorService} from "../../../services/colaborador-validator.service";

@Component({
    selector: 'app-colaborador-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

    id: number;

    form: FormGroup;

    title: string;

    masks: {};

    constructor(
        private service: ColaboradorService,
        private validatorService: ColaboradorValidatorService,
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.title = 'Novo Colaborador';
        this.masks = {
            cpf: [ /\d/ , /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/ , /\d/, /\d/, '-', /\d/, /\d/],
            pis: [ /\d/ , /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, /\d/, '.' , /\d/, /\d/, '-', /\d/]
        };
        this.form = new FormGroup({
            id: new FormControl(null, [Validators.nullValidator]),
            nome: new FormControl(null, [Validators.required]),
            PIS: new FormControl(null, [
                Validators.required,
                Validators.pattern(/^\d{3}\.\d{5}\.\d{2}-\d{1}$/),
                Validators.minLength(14),
                Validators.maxLength(14),
                this.validatorService.validatePIS
            ]),
            CPF: new FormControl(null, [
                Validators.nullValidator,
                Validators.pattern(/^(\d{3}\.){2}\d{3}\-\d{2}$/),
                Validators.minLength(14),
                Validators.maxLength(14),
                this.validatorService.validateCPF
            ]),
            equipe: new FormControl(null, [Validators.nullValidator]),
            cargo: new FormControl(null, [Validators.nullValidator])
        }, {updateOn: 'submit'});
        this.route.params.subscribe(params => {
            if(!params.id)
                return;

            this.title = 'Editar Colaborador';

            this.id = +params['id'];
            let obs:Observable<Colaborador> = this.service.load(this.id);

            obs.subscribe((res)=>{ this.form.patchValue(res)});
        });
    }

    get nome() {
        return this.form.get('nome');
    }

    get PIS() {
        return this.form.get('PIS');
    }

    get CPF() {
        return this.form.get('CPF');
    }

    get equipe() {
        return this.form.get('equipe');
    }

    get cargo() {
        return this.form.get('cargo');
    }


    onSubmit() {
        if(this.form.invalid) {
            (<any>Object).values(this.form.controls).forEach(control => {
                control.markAsTouched();
            });
            return;
        }

        let obs:Observable<object> = this.service.save(this.form.value as Colaborador, this.id);
        obs.subscribe((value) => {
            if(!value['success']) {
                if(value['errors']['PIS'])
                    this.form.get('PIS').setErrors({"server": value['errors']['PIS'][0]});

                if(value['errors']['CPF'])
                    this.form.get('CPF').setErrors({"server": value['errors']['CPF'][0]});

                console.log(this.form.errors);
                return;

            }
            this.router.navigate(['/'])
        })
    }
}
