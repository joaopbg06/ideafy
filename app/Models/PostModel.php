<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\UserModel;
use App\Models\CommentModel;

class PostModel extends Model
{
    protected $table = 'post';
    protected $fillable = ['title','description','media_path','media_type','status','id_user'];

    public function user()
    {
        return $this->belongsTo(UserModel::class,'id_user');
    }

    public function comments()
    {
        return $this->hasMany(CommentModel::class);
    }
}
