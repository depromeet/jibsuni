import icoAllOff from '../images/ico-all-off.svg';
import icoLivingroomOff from '../images/ico-livingroom-off.svg';
import icoBedroomOff from '../images/ico-bedroom-off.svg';
import icoKitchenOff from '../images/ico-kitchen-off.svg';
import icoBathroomOff from '../images/ico-bathroom-off.svg';
import icoAllOn from '../images/ico-all-on.svg';
import icoLivingroomOn from '../images/ico-livingroom-on.svg';
import icoBedroomOn from '../images/ico-bedroom-on.svg';
import icoKitchenOn from '../images/ico-kitchen-on.svg';
import icoBathroomOn from '../images/ico-bathroom-on.svg';

export const RoomType = {
  주방: 'kitchen',
  침실: 'bedroom',
  거실: 'living-room',
  화장실: 'bathroom',
};
  
export const roomNameByType = {
  all: '전체',
  kitchen: '주방',
  bedroom: '침실',
  'living-room': '거실',
  bathroom: '화장실',
};

export const roomIconByType = {
  all: {
    off: icoAllOff,
    on: icoAllOn,
  },
  kitchen: {
    off: icoKitchenOff,
    on: icoKitchenOn,
  },
  bedroom: {
    off: icoBedroomOff,
    on: icoBedroomOn,
  },
  'living-room': {
    off: icoLivingroomOff,
    on: icoLivingroomOn,
  },
  bathroom: {
    off: icoBathroomOff,
    on: icoBathroomOn,
  },
};
