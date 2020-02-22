import bedImage from '../images/bedroom-bed-on.svg';
import closetImage from '../images/bedroom-clothes-on.svg';
import deskImage from '../images/bedroom-desk-on.svg';
import wasteBinImage from '../images/bedroom-trashcan-on.svg';
import dressingTableImage from '../images/bedroom-dressingtable-on.svg';
import refrigeratorImage from '../images/kitchen-refrigerator-on.svg';
import sinkImage from '../images/kitchen-sink-on.svg';
import ovenImage from '../images/kitchen-oven-on.svg';
import kitchenTrashcanImage from '../images/kitchen-trashcan-on.svg';
import tableImage from '../images/kitchen-table-on.svg';
import toiletImage from '../images/bathroom-toilet-on.svg';
import showerImage from '../images/bathroom-shower-on.svg';
import washingmachineImage from '../images/bathroom-washingmachine-on.svg';
import bathTrashcanImage from '../images/bathroom-trashcan-on.svg';
import basinImage from '../images/bathroom-basin-on.svg';

export const FurnitureType = {
  침대: 'bed',
  옷장: 'closet',
  책상: 'desk',
  휴지통: 'waste-bin',
  화장대: 'dressing-table',
  냉장고: 'refrigerator',
  싱크대: 'kitchen-sink',
  가스레인지: 'gas-stove',
  휴지통:'kitchen-waste-bin',
  식탁: 'table',
  변기: 'toilet',
  샤워부스: 'shower-booth',
  세탁기: 'washing-machine',
  휴지통: 'bathroom-waste-bin',
  세면대: 'bathroom-sink'
};

export const furnitureNameByType = {
  bed: '침대',
  closet: '옷장',
  desk: '책상',
  'waste-bin': '휴지통',
  'dressing-table': '화장대',
  refrigerator: '냉장고',
  'kitchen-sink': '싱크대',
  'gas-stove': '가스레인지',
  'kitchen-waste-bin': '휴지통',
  table: '식탁',
  toilet: '변기',
  'shower-booth': '샤워부스',
  'washing-machine': '세탁기',
  'bathroom-waste-bin': '휴지통',
  'bathroom-sink': '세면대'
};

export const furnitureImageByType = {
  bed: bedImage,
  closet: closetImage,
  desk: deskImage,
  'waste-bin': wasteBinImage,
  'dressing-table': dressingTableImage,
  refrigerator: refrigeratorImage,
  'kitchen-sink': sinkImage,
  'gas-stove': ovenImage,
  'kitchen-waste-bin': kitchenTrashcanImage,
  table: tableImage,
  toilet: toiletImage,
  'shower-booth': showerImage,
  'washing-machine': washingmachineImage,
  'bathroom-waste-bin': bathTrashcanImage,
  'bathroom-sink': basinImage
};
