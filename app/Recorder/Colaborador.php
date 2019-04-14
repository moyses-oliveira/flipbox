<?php
/**
 * Created by PhpStorm.
 * User: moyses-oliveira
 * Date: 13/04/19
 * Time: 23:59
 */

namespace App\Recorder;

use App\Lib\Validation\Rules\Repeated;
use App\Models\Colaborador as Model;
use Illuminate\Support\Facades\Validator;

class Colaborador
{

    public function save(Model $model, array $input)
    {
        $validator = $this->validate($model, $input);
        $success = $validator->passes();
        $errors = $validator->errors()->getMessages();

        if ($success)
            $model->fill($input)->save();

        $data = $model->toArray();
        return compact('success', 'errors', 'data');
    }

    protected function validate(Model $model, array $input)
    {
        $labels = ['nome' => 'Alias'];

        return Validator::make($input, [
            'nome' => ['required', 'string', 'max:255'],
            'PIS' => ['required', 'string', 'max:16', new Repeated($model)],
            'CPF' => ['nullable', 'string', 'max:16', new Repeated($model)],
            'cargo' => ['nullable', 'string', 'max:255'],
            'equipe' => ['nullable', 'string', 'max:255']
        ])->setAttributeNames($labels);
    }
}