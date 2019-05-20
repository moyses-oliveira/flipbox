<?php
/**
 * Created by PhpStorm.
 * User: moyses-oliveira
 * Date: 11/04/19
 * Time: 11:43
 */

namespace App\Http\Controllers;

use App\Models\ColaboradorPonto as Model;
use App\Recorder\ColaboradorPonto as Recorder;
use App\Service\AFD\AFDCabecalho;
use Illuminate\Http\Request;

class ColaboradorPonto
{


    public function lancamentos(int $colaborador) {
        return Model::where('fkColaborador','=', $colaborador)->whereNull('deleted')->get()->toArray();
    }

    public function save(Request $request, int $colaborador, $id = null) {
        try {
            $model = Model::findOrNew($id);
            $recorder = new Recorder($colaborador);
            $response = $recorder->save($model, $request->post());
            return response()->json($response);
        } catch (\Exception $e) {
            return response()->json($e);
        }
    }

    public function rm(int $id) {
        $model = Model::findOrNew($id);
        $model->setAttribute('deleted', new \DateTime());
        $model->save();
        return $this->lancamentos($model->getAttribute('fkColaborador'));
    }

    public function afd() {
        $header = new AFDCabecalho();
        $header->fill([
            'id'=>'',
            'tipo'=>'1',
            'doc'=>'2',
            'cpf'=>'335.585.148-58',
            'cei'=>'',
            'empregador'=>'Moysés Filipe Lopes Peixoto de Oliveira',
            'rep'=>'',
            'registro_inicio'=>date('dmY'),
            'registro_fim'=>date('dmY'),
            'geracao_data'=>date('dmY'),
            'geracao_hora'=>date('H:i')
        ]);

        echo '<pre style="font-size: 9px;">';
        echo $header->render();
        echo '</pre>';
        die;
    }
}