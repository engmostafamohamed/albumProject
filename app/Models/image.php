<?php

namespace App\Models;

use App\Models\album;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class image extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'path',
        'album_id',
    ];
    public function album(){
        return $this->belongsTo(album::class);
    }
}
