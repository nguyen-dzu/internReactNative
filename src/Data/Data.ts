import { ICategories, IDepartment } from './DataInterface';

export const ListDepartment = [
  {
    id: '1',
    name: 'data 1',
    desc: 'mô tả data 1 ',
    img: require('../assets/Img/banner1.jpg'),
  },
  {
    id: '2',
    name: 'data 2',
    desc: 'mô tả data 2 ',
    img: require('../assets/Img/banner1.jpg'),
  },
  {
    id: '3',
    name: 'data 3',
    desc: 'mô tả data 3 ',
    img: require('../assets/Img/banner1.jpg'),
  },
  {
    id: '4',
    name: 'data 4',
    desc: 'mô tả data 4 ',
    img: require('../assets/Img/banner1.jpg'),
  },
];

export const ListCategories = [
  {
    id: '1',
    title: 'Category 1',
    data: ListDepartment,
    child: [
      {
        id: '1',
        title: 'Category 1.1',
        data: ListDepartment,
        child: [
          {
            id: '1',
            title: 'Category 1.1.1',
            data: ListDepartment,
          },
          {
            id: '2',
            title: 'Category 1.1.2',
            data: ListDepartment,
          },
        ],
      },
      {
        id: '2',
        title: 'Category 1.2',
        data: ListDepartment,
        child: [
          {
            id: '1',
            title: 'Category 2.1',
            data: ListDepartment,
          },
          {
            id: '2',
            title: 'Category 2.2',
            data: ListDepartment,
          },
        ],
      },
      {
        id: '3',
        title: 'Category 1.3',
        data: ListDepartment,
        child: [
          {
            id: '1',
            title: 'Category 3.1',
            data: ListDepartment,
          },
          {
            id: '2',
            title: 'Category 3.2',
            data: ListDepartment,
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Category 2',
    data: ListDepartment,
    child: [
      {
        id: '1',
        title: 'Category 2.1',
        data: ListDepartment,
        child: [
          {
            id: '1',
            title: 'Category 2.1.1',
            data: ListDepartment,
          },
          {
            id: '2',
            title: 'Category 2.1.2',
            data: ListDepartment,
          },
        ],
      },
      {
        id: '2',
        title: 'Category 2.2',
        data: ListDepartment,
        child: [
          {
            id: '1',
            title: 'Category 1.2.1',
            data: ListDepartment,
          },
          {
            id: '2',
            title: 'Category 1.2.2',
            data: ListDepartment,
          },
        ],
      },
    ],
  },

  {
    id: '3',
    title: 'Category 3',
    data: ListDepartment,
    child: [
      {
        id: '1',
        title: 'Category 3.1',
        data: ListDepartment,
        child: [
          {
            id: '1',
            title: 'Category 1',
            data: ListDepartment,
          },
          {
            id: '2',
            title: 'Category 2',
            data: ListDepartment,
          },
        ],
      },
    ],
  },
];
