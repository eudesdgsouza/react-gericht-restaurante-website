import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: 'R$ 56,00',
    tags: 'AU | Garrafa',
  },
  {
    title: 'Catena Malbee',
    price: 'R$ 56,00',
    tags: 'AU | Garrafa',
  },
  {
    title: 'La Vieillw Rose',
    price: 'R$ 56,00',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: 'R$ 56,00',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: 'R$ 56,00',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: 'R$ 20,00',
    tags: 'Refrigerante | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: 'R$ 16,00',
    tags: 'Refrigerante | 30 ml',
  },
  {
    title: 'Daiquiri',
    price: 'R$ 10,00',
    tags: 'Refrigerante | 30 ml',
  },
  {
    title: 'Old Fashioned',
    price: 'R$ 31,00',
    tags: 'Refrigerante | 30 ml',
  },
  {
    title: 'Negroni',
    price: 'R$ 26,00',
    tags: 'Refrigerante | 30 ml',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
