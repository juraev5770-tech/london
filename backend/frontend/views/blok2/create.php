<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Blok2 $model */

$this->title = 'Create Blok2';
$this->params['breadcrumbs'][] = ['label' => 'Blok2s', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="blok2-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
