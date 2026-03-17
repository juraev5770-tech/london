<?php

namespace common\models;

/**
 * This is the ActiveQuery class for [[Header]].
 *
 * @see Header
 */
class HeaderQuery extends \yii\db\ActiveQuery
{
    /*public function active()
    {
        return $this->andWhere('[[status]]=1');
    }*/

    /**
     * {@inheritdoc}
     * @return Header[]|array
     */
    public function all($db = null)
    {
        return parent::all($db);
    }

    /**
     * {@inheritdoc}
     * @return Header|array|null
     */
    public function one($db = null)
    {
        return parent::one($db);
    }
}
