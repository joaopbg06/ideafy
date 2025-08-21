<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\UserModel;

class PostModel extends Model
{
    protected $table = 'post';
    protected $fillable = ['title','description','media_path','media_type','status'];

    public function user()
    {
        return $this->belongsTo(UserModel::class);
    }
}
