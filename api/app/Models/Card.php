<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    use HasFactory;
    protected $table="cards";
    protected $fillable = [
        'user_id','title','mounth','year','card_number','cvc'
    ];

   

    public function getUser(){
        return $this->belongsTo(User::class,"user_id");
    }
}
