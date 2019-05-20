<?php
/**
 * Created by PhpStorm.
 * User: moyses-oliveira
 * Date: 22/02/19
 * Time: 08:36
 */

namespace App\Lib\Validation\Rules;

use Illuminate\Contracts\Validation\Rule;

class CPF implements Rule
{

    public function passes($attribute, $value)
    {
        if(empty($value))
            return true;

        $cpf = sprintf('%011s', preg_replace('{\D}', '', $value));

        if ((strlen($cpf) != 11)
            || ($cpf == '00000000000')
            || ($cpf == '99999999999')) {
            return false;
        }

        for ($t = 8; $t < 10;) {
            for ($d = 0, $p = 2, $c = $t; $c >= 0; $c--, $p++) {
                $d += $cpf[$c] * $p;
            }

            if ($cpf[++$t] != ($d = ((10 * $d) % 11) % 10)) {
                return false;
            }
        }

        return true;
    }

    public function message()
    {
        return __('validation.rules.doc');
    }
}
