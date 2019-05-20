<?php
/**
 * Created by PhpStorm.
 * User: moyses-oliveira
 * Date: 11/04/19
 * Time: 11:43
 */

namespace App\Http\Controllers;

use \App\Models\Colaborador as Model;
use App\Models\ColaboradorPonto;
use Illuminate\Http\Request;

class Colaborador
{

    public function listing()
    {
        return Model::get()->toArray();
    }

    public function load(int $id)
    {
        $model = Model::findOrNew($id);
        return $model->toArray();
    }

    public function save(Request $request, ?int $id = null)
    {
        try {
            $model = Model::findOrNew($id);
            $recorder = new \App\Recorder\Colaborador();
            $response = $recorder->save($model, $request->post());
            return response()->json($response);
        } catch (\Exception $e) {
            echo $e->getMessage();
            return response()->json($e);
        }
    }

    public function rm($id)
    {
        try {
            ColaboradorPonto::where(['fkColaborador' => $id])->delete();
            Model::find($id)->delete();
            return $this->listing();
        } catch (\Exception $e) {
            return response()->json($e);
        }
    }

}