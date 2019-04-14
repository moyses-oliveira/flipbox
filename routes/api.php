<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('colaborador/listing', ['uses' => 'Colaborador@listing', 'as' => 'colaborador']);
Route::get('colaborador/load/{id}', ['uses' => 'Colaborador@load', 'as' => 'colaborador']);
Route::delete('colaborador/delete/{id}', ['uses' => 'Colaborador@index', 'as' => 'colaborador']);
Route::post('colaborador/save/{id?}', ['uses' => 'Colaborador@save', 'as' => 'colaborador']);
