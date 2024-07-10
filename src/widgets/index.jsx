import BestSeller from './bestSeller';
import Introduction from './introduction';
import NewArrival from './newArrival';

const widgets = [
  {
    id: 1,
    name: 'introduction',
    component: <Introduction />,
    isShown: true,
    title: null,
  },
  {
    id: 2,
    name: 'newarrival',
    component: <NewArrival />,
    isShown: true,
    title: 'New Arrival',
  },
  {
    id: 3,
    name: 'bestseller',
    component: <BestSeller />,
    isShown: true,
    title: 'Best Seller',
  },
];

export default widgets;
