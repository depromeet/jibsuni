import React, { useMemo } from 'react';
import { Spring } from 'react-spring/renderprops.cjs';

import * as styled from './style';
import closeIcon from '../../images/ico-popup-x.svg';

/** 사용법:
 *  (1) 코드 추가
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }

 *  (2) 버튼과 다이어로그(모달) 컴포넌트 추가
    <button onClick={handleClick}>모달 여는 버튼</button>
    <Dialog show={show} handleClose={handleClick}>
      ...
    </Dialog>
*/

export default function Dialog({ show, handleClose, children }) {
  const animation = useMemo(() => {
    const hiddenState = { opacity: 0, scale: 0.9 };
    const showState = { opacity: 1, scale: 1 };

    return show ? { from: hiddenState, to: showState } : { from: showState, to: hiddenState };
  }, [show]);

  return (
    <Spring {...animation} config={{ tension: 480, friction: 40, precision: 0.01 }} delay={0.1}>
      {styles => (
        <styled.Wrapper show={show}>
          <styled.Dimmer style={{ opacity: styles.opacity }} />
          <styled.Content style={{ transform: `scale(${styles.scale})` }}>
            <styled.CloseButton aria-label="창 닫기" onClick={handleClose}>
              <img src={closeIcon} alt="" aria-hidden={true} />
            </styled.CloseButton>
            {children}
          </styled.Content>
        </styled.Wrapper>
      )}
    </Spring>
  );
}
