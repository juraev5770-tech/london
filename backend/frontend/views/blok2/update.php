<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Blok2 $model */

$this->title = 'Update Blok2: ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Blok2s', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="blok2-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
