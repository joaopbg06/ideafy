<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\PostModel;

class CommentModel extends Model
{
    protected $table = 'comments';
    protected $fillable = ['content','id_user','id_post'];

    public function posts()
    {
         return $this->belongsTo(PostModel::class,'id_post');
    }

}
