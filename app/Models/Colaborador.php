<?php

/**
 * Created by Reliese Model.
 * Date: Thu, 11 Apr 2019 16:52:48 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class Colaborador
 *
 * @property int $id
 * @property string $nome
 * @property string $CPF
 * @property string $PIS
 * @property string $cargo
 * @property string $equipe
 * @package App\Models
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Colaborador newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Colaborador newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Colaborador query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Colaborador whereCPF($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Colaborador whereCargo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Colaborador whereEquipe($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Colaborador whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Colaborador whereNome($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Colaborador wherePIS($value)
 * @mixin \Eloquent
 */
class Colaborador extends Eloquent
{
	protected $table = 'colaborador';
	public $timestamps = false;

	protected $fillable = [
		'nome',
		'CPF',
		'PIS',
		'cargo',
		'equipe'
	];
}
