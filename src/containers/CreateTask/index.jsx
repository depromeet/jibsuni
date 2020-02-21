import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as styled from './style';

function CreateTask() {
  return (
    <styled.Wrapper>
      <styled.Title>
        침실에서 무엇을 하실건가요?
      </styled.Title>
      <styled.FurnitureList>
        {/* {furnitures.map(furniture => (
          <FurnitureItem
            key={furniture.id}
            title={furnitureNameByType[furniture.type]}
            isActive={furniture.id === selectedFurnitureId}
            onClick={() => handleNavClick(furniture)}
          />
        ))} */}
      </styled.FurnitureList>
      <styled.SelectTask>
        진행하실 내용을 입력해주세요 :)
      </styled.SelectTask>
      <styled.CompleteButton>
        등록하기
      </styled.CompleteButton>
    </styled.Wrapper>
  );
}

export default CreateTask;
