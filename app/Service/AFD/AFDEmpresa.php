<?php
/**
 * Created by PhpStorm.
 * User: moyses-oliveira
 * Date: 16/04/19
 * Time: 14:32
 */

namespace App\Service\AFD;


class AFDEmpresa extends AFDModel
{
    public function __construct()
    {
        parent::__construct();
        $this->newInput('nsr', 1,9);
        $this->newInput('tipo', 10,10);
        $this->newInput('gravacao_data', 11,18);
        $this->newInput('gravacao_hora', 19,22);
        $this->newInput('doc', 23,23);
        $this->newInput('cpf', 24,37);
        $this->newInput('cei', 38,49)->isText();
        $this->newInput('empregador', 50,199)->isText();
        $this->newInput('local', 200,299);

        $this->set('tipo', '2');
    }


}