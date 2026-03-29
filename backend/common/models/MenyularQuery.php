<?php

namespace common\models;

/**
 * This is the ActiveQuery class for [[Menyular]].
 *
 * @see Menyular
 */
class MenyularQuery extends \yii\db\ActiveQuery
{
    /*public function active()
    {
        return $this->andWhere('[[status]]=1');
    }*/

    /**
     * {@inheritdoc}
     * @return Menyular[]|array
     */
    public function all($db = null)
    {
        return parent::all($db);
    }

    /**
     * {@inheritdoc}
     * @return Menyular|array|null
     */
    public function one($db = null)
    {
        return parent::one($db);
    }
}
