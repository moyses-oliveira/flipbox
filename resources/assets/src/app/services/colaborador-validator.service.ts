import { Injectable } from '@angular/core';
import {FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

export class ColaboradorValidatorService {

  constructor() { }


    validateCPF(control: FormControl) {
        if(!control.value)
            return null;

        let vDigit = function(cpf, digit) {
            let add = 0;
            let init = digit - 9;
            for (let i = 0; i < 9; i ++) {
                add += parseInt(cpf.charAt(i + init)) * (i+1);
            }
            return (add%11)%10 === parseInt(cpf.charAt(digit));
        };

        let checkCPF = function(v:string):boolean {
            let cpf = v.replace(/[^\d]+/g,'');
            let r = /^(0{11}|1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11})$/;
            if (!cpf || cpf.length !== 11 || r.test(cpf)) {
                return false;
            }
            return vDigit(cpf, 9) && vDigit(cpf, 10);
        };

        return checkCPF(control.value) ? null : { 'validateCPF': false };
    }

    validatePIS(control: FormControl) {
        if(!control.value)
            return null;

        let cDigit = function(pis){
            let p = [3,2,9,8,7,6,5,4,3,2];
            let s = 0;
            for(let i = 0; i <= 9; i++){
                s += parseInt(pis.charAt(i)) * p[i];
            }
            let r = 11 - (s%11);
            return (r === 10 || r === 11) ? 0 : r;
        };

        let checkPIS = function(v:string):boolean {
            let pis = v.replace(/[^\d]+/g,'');
            let r = /^(0{11}|1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11})$/;

            if (!pis || pis.length !== 11 || r.test(pis)) {
                return false;
            }

            let pisi = pis.substring(0,10);
            let pisd = pis.substring(10);


            return Number(pisd) === cDigit(pisi);
        };
        return checkPIS(control.value) ? null : { 'validatePIS': false };
    }
}
