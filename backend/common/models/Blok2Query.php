<?php

namespace common\models;

/**
 * This is the ActiveQuery class for [[Blok2]].
 *
 * @see Blok2
 */
class Blok2Query extends \yii\db\ActiveQuery
{
    /*public function active()
    {
        return $this->andWhere('[[status]]=1');
    }*/

    /**
     * {@inheritdoc}
     * @return Blok2[]|array
     */
    public function all($db = null)
    {
        return parent::all($db);
    }

    /**
     * {@inheritdoc}
     * @return Blok2|array|null
     */
    public function one($db = null)
    {
        return parent::one($db);
    }
}
