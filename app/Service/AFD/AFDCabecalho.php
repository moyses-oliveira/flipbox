<?php
/**
 * Created by PhpStorm.
 * User: moyses-oliveira
 * Date: 16/04/19
 * Time: 13:34
 */

namespace App\Service\AFD;


class AFDCabecalho extends AFDModel
{
    public function __construct()
    {
        parent::__construct();
        $this->newInput('id', 1,9);
        $this->newInput('tipo', 10,10);
        $this->newInput('doc', 11,11);
        $this->newInput('cpf', 12,25);
        $this->newInput('cei', 26,37)->isText();
        $this->newInput('empregador', 38,187)->isText();
        $this->newInput('rep', 188,204);
        $this->newInput('registro_inicio', 205,212);
        $this->newInput('registro_fim', 213,220);
        $this->newInput('geracao_data', 221,228);
        $this->newInput('geracao_hora', 229,232);

        $this->set('tipo', '1');
    }

}