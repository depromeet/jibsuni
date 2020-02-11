import React, {useState} from 'react';
import AddModal from "../../components/AddModal";
import plus from '../../images/plus.svg'
import * as styled from './style'

function Sidebar() {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <>
      <styled.Wrapper>
        <styled.ButtonWrapper>
          <div>전체</div>
          <div>거실</div>
          <div>침실</div>
          <div>주방</div>
          <div>화장실</div>
          <styled.Img
            src={plus}
            onClick={() => setShowAddModal(true)}
          />
        </styled.ButtonWrapper>
      </styled.Wrapper>
      { showAddModal && <AddModal setShowAddModal={setShowAddModal}/> }
    </>
  )
}

export default Sidebar;
