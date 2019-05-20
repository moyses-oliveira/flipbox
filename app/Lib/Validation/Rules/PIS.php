<?php
/**
 * Created by PhpStorm.
 * User: moyses-oliveira
 * Date: 16/04/19
 * Time: 10:47
 */

namespace App\Lib\Validation\Rules;

use Illuminate\Contracts\Validation\Rule;

class PIS implements Rule
{

    public function passes($attribute, $value)
    {
        if(empty($value))
            return true;

        // Canonicalize input
        $nis = sprintf('%011s', preg_replace('{\D}', '', $value));

        // Validate length and invalid numbers
        if ((strlen($nis) != 11)
            || (intval($nis) == 0)) {
            return false;
        }

        // Validate check digit using a modulus 11 algorithm
        for ($d = 0, $p = 2, $c = 9; $c >= 0; $c--, ($p < 9) ? $p++ : $p = 2) {
            $d += $nis[$c] * $p;
        }

        return ($nis[10] == (((10 * $d) % 11) % 10));
    }

    public function message()
    {
        return __('validation.rules.doc');
    }
}