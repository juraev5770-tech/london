<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "blok2".
 *
 * @property int $id
 * @property string $image_url
 * @property string $description
 * @property float $price
 * @property int $rating
 */
class Blok2 extends \yii\db\ActiveRecord
{


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'blok2';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [[ 'image_url', 'description', 'price', 'rating'], 'required'],
            [['description'], 'string'],
            [['price'], 'number'],
            [['rating'], 'integer'],
            [['image_url'], 'string', 'max' => 500],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'image_url' => 'Image Url',
            'description' => 'Description',
            'price' => 'Price',
            'rating' => 'Rating',
        ];
    }

    /**
     * {@inheritdoc}
     * @return Blok2Query the active query used by this AR class.
     */
    public static function find()
    {
        return new Blok2Query(get_called_class());
    }

}
