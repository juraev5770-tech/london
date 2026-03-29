<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "menyular".
 *
 * @property int $id
 * @property string $image
 * @property string $description
 * @property int $price
 */
class Menyular extends \yii\db\ActiveRecord
{


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'menyular';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['image', 'description', 'price'], 'required'],
            [['image', 'description'], 'string'],
            [['price'], 'integer'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'image' => 'Image',
            'description' => 'Description',
            'price' => 'Price',
        ];
    }

    /**
     * {@inheritdoc}
     * @return MenyularQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new MenyularQuery(get_called_class());
    }

}
