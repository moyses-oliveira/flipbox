<?php
/**
 * Created by PhpStorm.
 * User: moyses-oliveira
 * Date: 22/02/19
 * Time: 08:36
 */

namespace App\Lib\Validation\Rules;

use Illuminate\Contracts\Validation\Rule;
use Reliese\Database\Eloquent\Model;

class Repeated implements Rule
{
    /**
     * @var Model
     */
    private $model;

    /**
     * @var null|string
     */
    private $column;

    /**
     * RepeatedValidationRule constructor.
     * @param Model $model
     * @param null|string $column
     */
    public function __construct(Model $model, ?string $column = null)
    {
        $this->model = $model;
        $this->column = $column;
    }

    public function passes($attribute, $value)
    {
        $model = $this->getModel();
        $qb = $model->newModelQuery();
        $qb->where($this->getColumn($attribute), 'LIKE', $value);

        if($model->getKey())
            $qb->where($model->getKeyName() , '<>', $model->getKey());

        if($model->isFillable('dttDeleted'))
            $qb->whereNull('dttDeleted');

        return $qb->count() < 1;
    }

    public function message()
    {
        return 'REPEATED';
    }

    /**
     * @return Model
     */
    public function getModel(): Model
    {
        return $this->model;
    }

    /**
     * @return null|string
     */
    public function getColumn(string $attribute): string
    {
        return $this->column ?? $attribute;
    }


}