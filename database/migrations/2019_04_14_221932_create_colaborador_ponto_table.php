<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateColaboradorPontoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('colaborador_ponto', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('fkColaborador');
            $table->foreign('fkColaborador')->references('id')->on('colaborador');
            $table->date('dia');
            $table->time('inicio');
            $table->time('termino');
            $table->dateTime('deleted')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('colaborador_ponto');
    }
}
