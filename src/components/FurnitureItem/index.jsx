import React from 'react';
import * as styled from "./style";
import { furnitureNameByType } from '../../constants/furnitureType';
import { furnitureCategoryImageByType } from '../../constants/furnitureCategoryType';

function FurnitureItem({
  furniture,
  selected,
  onClick,
}) {
  return (
    <styled.FurnitureWrapper
      onClick={onClick}
    >
      <styled.Img src={furnitureCategoryImageByType[furniture.type]} />
      <styled.Title isActive={selected}>
        {furnitureNameByType[furniture.type]}
      </styled.Title>
    </styled.FurnitureWrapper>
  )
}

export default FurnitureItem;
