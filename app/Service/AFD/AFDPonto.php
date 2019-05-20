<?php
/**
 * Created by PhpStorm.
 * User: moyses-oliveira
 * Date: 16/04/19
 * Time: 14:37
 */

namespace App\Service\AFD;


class AFDPonto extends AFDModel
{
    public function __construct()
    {
        parent::__construct();
        $this->newInput('nsr', 1,9);
        $this->newInput('tipo', 10,10);
        $this->newInput('data', 11,18);
        $this->newInput('hora', 19,22);
        $this->newInput('pis', 23, 34)->isText();


        $this->set('tipo', '3');

    }

}