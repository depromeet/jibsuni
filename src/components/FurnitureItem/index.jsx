import React from 'react';
import * as styled from "./style";
import { furnitureImageByType, furnitureNameByType } from '../../constants/furnitureType';

function FurnitureItem({
  furniture,
  selected,
  onClick,
}) {
  return (
    <styled.FurnitureWrapper
      onClick={onClick}
    >
      <styled.Img src={furnitureImageByType[furniture.type]} />
      <styled.Title isActive={selected}>
        {furnitureNameByType[furniture.type]}
      </styled.Title>
    </styled.FurnitureWrapper>
  )
}

export default FurnitureItem;
