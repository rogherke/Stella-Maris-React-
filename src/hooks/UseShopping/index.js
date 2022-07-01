import React, { useEffect, useState } from 'react';

const useShopping = () => {
  const localItem = JSON.parse(localStorage.getItem('shoppingGoods')) || [];
  const [isNeedUpload, setIsNeedUpload] = useState(true);
  const [shoppingCartItem, setshoppingCartItem] = useState(localItem);

  const addShoppingItemInLoal = (item) => {
    const _idx = shoppingCartItem.findIndex((el) => el.id === item.id);

    let _shoppingItems = shoppingCartItem;

    if (shoppingCartItem.length > 0) {
      if(_idx >= 0) {
        const _item = {
          ..._shoppingItems[_idx],
          amount: Number(_shoppingItems[_idx].amount) + 1,
        };

        _shoppingItems[_idx] = _item;

        setshoppingCartItem(_shoppingItems);
      } else {
        _shoppingItems = [
          ...shoppingCartItem,
          item,
        ]
      }

      localStorage.setItem('shoppingGoods', JSON.stringify(_shoppingItems))
      setshoppingCartItem(_shoppingItems);
    } else {
      localStorage.setItem('shoppingGoods', JSON.stringify([item]));
      setshoppingCartItem([item]);
    }
  }

  const updatedData = () => {
    const _localItem = JSON.parse(localStorage.getItem('shoppingGoods')) || [];
  
    setshoppingCartItem(_localItem);
    setIsNeedUpload(false);
  };

  useEffect(() => {
    if (isNeedUpload) {
      updatedData();
    }
  }, [isNeedUpload])
  
  return {  
    addShoppingItemInLoal,
    setshoppingCartItem,
    shoppingCartItem,
    setIsNeedUpload,
  }
}

export default useShopping;