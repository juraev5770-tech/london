<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Tugmalar $model */

$this->title = 'Create Tugmalar';
$this->params['breadcrumbs'][] = ['label' => 'Tugmalars', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="tugmalar-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
