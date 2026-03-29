<?php
namespace backend\controllers;

use yii\rest\ActiveController;

class MenyularController extends ActiveController
{
    public $modelClass = 'common\models\Menyular';

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