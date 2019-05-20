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

Route::get('colaborador/listing', ['uses' => 'Colaborador@listing', 'as' => 'colaborador.listing']);
Route::get('colaborador/load/{id}', ['uses' => 'Colaborador@load', 'as' => 'colaborador.load']);
Route::delete('colaborador/rm/{id}', ['uses' => 'Colaborador@rm', 'as' => 'colaborador.rm']);
Route::post('colaborador/save/{id?}', ['uses' => 'Colaborador@save', 'as' => 'colaborador.save']);
Route::get('colaborador-ponto/afd', ['uses' => 'ColaboradorPonto@afd', 'as' => 'colaborador.afd']);
Route::get('colaborador-ponto/lancamentos/{colaborador}', ['uses' => 'ColaboradorPonto@lancamentos', 'as' => 'colaborador-ponto.lancamentos']);
Route::post('colaborador-ponto/save/{colaborador}/{id?}', ['uses' => 'ColaboradorPonto@Save', 'as' => 'colaborador-ponto.save']);
Route::delete('colaborador-ponto/rm/{id}', ['uses' => 'ColaboradorPonto@rm', 'as' => 'colaborador-ponto.rm']);
