import {FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {Colaborador} from "../../models/colaborador";
import {ColaboradorService} from "../../services/colaborador.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-form-colaborador',
    templateUrl: './form-colaborador.component.html',
    styleUrls: ['./form-colaborador.component.css']
})

export class FormColaboradorComponent implements OnInit {

    id: number;

    form: FormGroup;

    title: string;

    masks: {};

    constructor(private colaboradorService: ColaboradorService, private route: ActivatedRoute, private router: Router) {
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
                Validators.maxLength(14)
            ]),
            CPF: new FormControl(null, [
                Validators.nullValidator,
                Validators.pattern(/^(\d{3}\.){2}\d{3}\-\d{2}$/),
                Validators.minLength(14),
                Validators.maxLength(14)
            ]),
            equipe: new FormControl(null, [Validators.nullValidator]),
            cargo: new FormControl(null, [Validators.nullValidator])
        }, {updateOn: 'submit'});
        this.route.params.subscribe(params => {
            if(!params.id)
                return;

            this.title = 'Editar Colaborador';

            this.id = +params['id'];
            let obs:Observable<Colaborador> = this.colaboradorService.load(this.id);

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

        let obs:Observable<Colaborador> = this.colaboradorService.save(this.form.value as Colaborador, this.id);
        obs.subscribe((value) => (
            this.router.navigate(['/'])
        ))
    }

    /*

    onSubmit() {
        let data = {
            id: 0,
            nome: '',
            CPF: '',
            PIS: '',
            equipe: '',
            cargo: ''
        } as Colaborador;

        this.colaboradorService.save(data);
    }
    */

}
