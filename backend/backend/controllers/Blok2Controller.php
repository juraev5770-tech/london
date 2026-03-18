<?php
namespace backend\controllers;

use yii\rest\ActiveController;

class Blok2Controller extends ActiveController
{
    public $modelClass = 'common\models\Blok2';

    public function behaviors()
{
    $behaviors = parent::behaviors();

   
    
    // add CORS filter
    $behaviors['corsFilter'] = [
        'class' => \yii\filters\Cors::class,
    ];
    
   

    return $behaviors;
}
}