<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('Nombre');
            $table->string('description')->comment('Descripción');
            $table->double('price',10,2)->comment('Precio');
            $table->integer('stock')->comment('Cantidad');
            $table->timestamps();
            $table->softDeletes();
        });

        DB::statement("ALTER TABLE products comment 'Productos'");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
