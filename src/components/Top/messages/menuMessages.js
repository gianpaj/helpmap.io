import React from 'react';

import Animal from '../../../assets/animal';
import Books from '../../../assets/books';
import Clothes from '../../../assets/clothes';
import Electronic from '../../../assets/electronic';
import Food from '../../../assets/food';
import Kids from '../../../assets/kids';
import Other from '../../../assets/other';
import Volunteer from '../../../assets/volunteer';

const width = 30;

const menuMessages = {
  volunteer: {
    id: 'Menu.Volunteer',
    defaultMessage: 'Volunteer',
    icon: <Volunteer width={width} />,
    color: '#c41c1c',
  },
  kids: {
    id: 'Menu.Kids',
    defaultMessage: 'Kids',
    icon: <Kids width={width} />,
    color: '#a20cd4',
  },
  food: {
    id: 'Menu.Food',
    defaultMessage: 'Food',
    icon: <Food width={width} />,
    color: '#0fb706',
  },
  textils: {
    id: 'Menu.Textiles',
    defaultMessage: 'Textiles',
    icon: <Clothes width={width} />,
    color: '#353db1',
  },
  animal: {
    id: 'Menu.Animal',
    defaultMessage: 'Animal',
    icon: <Animal width={width} />,
    color: '#7b5c23',
  },
  electronic: {
    id: 'Menu.Electronic',
    defaultMessage: 'Electronics',
    icon: <Electronic width={width} />,
    color: '#115b0f',
  },
  books: {
    id: 'Menu.Books',
    defaultMessage: 'Books',
    icon: <Books width={width} />,
    color: '#e0ac00',
  },
  other: {
    id: 'Menu.Other',
    defaultMessage: 'Other',
    icon: <Other width={width} />,
    color: '#41b4e1',
  },
};

export default menuMessages;
