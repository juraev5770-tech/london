<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "navbar".
 *
 * @property int $id
 * @property string $title
 * @property string $url
 */
class Navbar extends \yii\db\ActiveRecord
{


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'navbar';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['title', 'url'], 'required'],
            [['url'], 'string'],
            [['title'], 'string', 'max' => 200],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title' => 'Title',
            'url' => 'Url',
        ];
    }

    /**
     * {@inheritdoc}
     * @return NavbarQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new NavbarQuery(get_called_class());
    }

}
