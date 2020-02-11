import React, {useState} from 'react';
import {Category, CategoryList} from '../../constants/Category'
import close from '../../images/close-btn.svg'
import bedroomBedOn from "../../images/bedroom-bed-on.svg";
import bedroomClothesOn from "../../images/bedroom-clothes-on.svg";
import bedroomDeskOn from "../../images/bedroom-desk-on.svg";
import bedroomTrashcanOn from "../../images/bedroom-trashcan-on.svg";
import bedroomDressingtableOn from "../../images/bedroom-dressingtable-on.svg";
import * as styled from "./style";

function getCategoryImg(category) {
  switch (category) {
    case Category.Bed:
      return bedroomBedOn;
    case Category.Clothes:
      return bedroomClothesOn;
    case Category.Desk:
      return bedroomDeskOn;
    case Category.Trashcan:
      return bedroomTrashcanOn;
    case Category.Dressingtable:
      return bedroomDressingtableOn;
  }
}

function AddModal({ setShowAddModal }) {
  const [category, setCategory] = useState('침실');

  return (
    <>
      <styled.Dim/>
      <styled.Wrapper>
        <styled.CloseBtn
          src={close}
          onClick={() => setShowAddModal(false)}
        />
        <styled.Title>
          {`${category}에서 무엇을 하실 건가요?`}
        </styled.Title>
        <styled.CategoryWapper>
          {
            CategoryList.map(name => (
              <styled.Category onClick={() => setCategory(name)}>
                <styled.CategoryImg src={getCategoryImg(name)}/>
                {
                  category === name
                  ? <styled.SelectedName>{name}</styled.SelectedName>
                  : <styled.Name>{name}</styled.Name>
                }
              </styled.Category>
            ))
          }
        </styled.CategoryWapper>
      </styled.Wrapper>
    </>
  )
}

export default AddModal
