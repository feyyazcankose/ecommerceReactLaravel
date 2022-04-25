<?php

use App\Enums\RoleEnum;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Hash;
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
        Schema::create('personal_access_tokens', function (Blueprint $table) {
            $table->id();
            $table->morphs('tokenable');
            $table->string('name');
            $table->string('token', 64)->unique();
            $table->text('abilities')->nullable();
            $table->timestamp('last_used_at')->nullable();
            $table->timestamps();
        });

        $user=User::create([
            'role_id'=>RoleEnum::ADMIN,
            'name'=>'Feyyaz',
            'surname'=>'Köse',
            'email'=>env('DEFAULT_EMAIL'),
            'password'=>Hash::make(env('DEFAULT_PASS')),
        ]);

        $user->createToken($user->email.'_token', ['server:admin'])->plainTextToken;
    }

    /**
     * Reverse the migrations.
     *
     * @return voids
     */
    public function down()
    {
        Schema::dropIfExists('personal_access_tokens');
    }
};
