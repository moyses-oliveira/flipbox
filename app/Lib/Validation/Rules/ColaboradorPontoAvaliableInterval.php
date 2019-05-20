<?php
/**
 * Created by PhpStorm.
 * User: moyses-oliveira
 * Date: 22/02/19
 * Time: 08:36
 */

namespace App\Lib\Validation\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Models\ColaboradorPonto as Model;

class ColaboradorPontoAvaliableInterval implements Rule
{

    /**
     * @var array
     */
    private $data;


    /**
     * ColaboradorPontoAvaliableInterval constructor.
     * @param array $data
     * @param null|string $column
     * @throws \Exception
     */
    public function __construct(array $data, ?string $column = null)
    {
        foreach(['id', 'fkColaborador', 'dia', 'inicio', 'termino'] as $key)
            if(!array_key_exists( $key, $data))
                throw new \Exception("forgotten data[$key] is required.");

        $this->data = $data;
    }

    public function passes($attribute, $value)
    {
        return $this->avaliableInterval($value) && $this->avaliableIntervals();
    }

    public function message()
    {
        return __('validation.rules.ColaboradorPontoAvaliableInterval');
    }

    private function avaliableInterval($value) {
        $data = $this->getData();
        $qb = Model::where('fkColaborador', $data['fkColaborador'])
            ->whereNull('deleted')
            ->where('dia', '=', $data['dia'])
            ->whereRaw(' CAST(? AS time) BETWEEN inicio AND termino', [$value]);

        if($data['id'])
            $qb->where('id', '<>', $data['id']);

        return $qb->count() < 1;
    }

    private function avaliableIntervals() {
        $data = $this->getData();
        $qb = Model::where('fkColaborador', $data['fkColaborador'])
            ->whereNull('deleted')
            ->where('dia', '=', $data['dia'])
            ->whereRaw(' inicio BETWEEN CAST(? AS time) AND CAST(? AS time)', [$data['inicio'], $data['termino']]);

        if($data['id'])
            $qb->where('id', '<>', $data['id']);

        return $qb->count() < 1;
    }

    /**
     * @return array
     */
    public function getData(): array
    {
        return $this->data;
    }

}