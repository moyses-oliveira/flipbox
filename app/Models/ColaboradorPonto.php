<?php

/**
 * Created by Reliese Model.
 * Date: Mon, 15 Apr 2019 01:17:28 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class ColaboradorPonto
 *
 * @property int $id
 * @property int $fkColaborador
 * @property \Carbon\Carbon $dia
 * @property \Carbon\Carbon $inicio
 * @property \Carbon\Carbon $termino
 * @property \Carbon\Carbon $deleted
 * @property \App\Models\Colaborador $colaborador
 * @package App\Models
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\ColaboradorPonto newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\ColaboradorPonto newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\ColaboradorPonto query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\ColaboradorPonto whereDeleted($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\ColaboradorPonto whereDia($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\ColaboradorPonto whereFkColaborador($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\ColaboradorPonto whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\ColaboradorPonto whereInicio($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\ColaboradorPonto whereTermino($value)
 * @mixin \Eloquent
 */
class ColaboradorPonto extends Eloquent
{
	protected $table = 'colaborador_ponto';
	public $timestamps = false;

	protected $casts = [
		'fkColaborador' => 'int'
	];

	protected $dates = [
		'dia',
		'deleted'
	];

	protected $fillable = [
		'fkColaborador',
		'dia',
		'inicio',
		'termino',
		'deleted'
	];

	public function colaborador()
	{
		return $this->belongsTo(\App\Models\Colaborador::class, 'fkColaborador');
	}
}
