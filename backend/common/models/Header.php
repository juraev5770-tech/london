<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "header".
 *
 * @property int $id
 * @property string $little_title
 * @property string $title
 * @property string $info
 * @property string $button_text
 * @property string $button_link
 * @property string $img
 */
class Header extends \yii\db\ActiveRecord
{


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'header';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['little_title', 'title', 'info', 'button_text', 'button_link', 'img'], 'required'],
            [['info', 'button_text', 'button_link', 'img'], 'string'],
            [['little_title'], 'string', 'max' => 100],
            [['title'], 'string', 'max' => 150],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'little_title' => 'Little Title',
            'title' => 'Title',
            'info' => 'Info',
            'button_text' => 'Button Text',
            'button_link' => 'Button Link',
            'img' => 'Img',
        ];
    }

    /**
     * {@inheritdoc}
     * @return HeaderQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new HeaderQuery(get_called_class());
    }

}
