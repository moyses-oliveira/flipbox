<?php
/**
 * Created by PhpStorm.
 * User: moyses-oliveira
 * Date: 15/04/19
 * Time: 15:33
 */

namespace App\Recorder;

use App\Lib\Validation\Rules\ColaboradorPontoAvaliableInterval;
use App\Models\ColaboradorPonto as Model;
use Illuminate\Support\Facades\Validator;
use IntlDateFormatter;

class ColaboradorPonto
{
    /**
     * @var int
     */
    private $fkColaborador;

    /**
     * @param int $fkColaborador
     */
    public function __construct(int $fkColaborador)
    {
        $this->fkColaborador = $fkColaborador;
    }

    /**
     * @return int
     */
    public function getFkColaborador(): int
    {
        return $this->fkColaborador;
    }

    public function save(Model $model, array $input):array
    {
        $validator = $this->validate($model, $input);
        $success = $validator->passes();
        $errors = $validator->errors()->getMessages();

        if ($success)
            $model->fill($this->normalize($input))->save();

        $data = $model->toArray();
        return compact('success', 'errors', 'data');
    }

    protected function validate(Model $model, array $input)
    {
        $data = $this->normalize($input);
        $labels = [
            'fkColaborador' => 'Colaborador',
            'dia' => 'Dia',
            'inicio' => 'Início',
            'termino' => 'Término'
        ];

        return Validator::make($data, [
            'fkColaborador' => ['required', 'integer'],
            'dia' => ['required', 'string', 'max:10'],
            'inicio' => ['nullable', 'string', 'min:5', 'max:7', new ColaboradorPontoAvaliableInterval($data)],
            'termino' => ['nullable', 'string', 'min:5', 'max:7', new ColaboradorPontoAvaliableInterval($data)]
        ])->setAttributeNames($labels);
    }

    protected function normalize(array $input):array {
        $output =  $input;
        $output['fkColaborador'] = $this->getFkColaborador();
        return $output;
    }

}