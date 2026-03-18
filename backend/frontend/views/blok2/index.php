<?php

use common\models\Blok2;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;
use yii\widgets\Pjax;
/** @var yii\web\View $this */
/** @var common\models\Blok2Search $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Blok2s';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="blok2-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Create Blok2', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php Pjax::begin(); ?>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'image_url:url',
            'description:ntext',
            'price',
            'rating',
            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, Blok2 $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                 }
            ],
        ],
    ]); ?>

    <?php Pjax::end(); ?>

</div>
