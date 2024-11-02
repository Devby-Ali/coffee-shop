let xAxisData = [
  {
    name: "Jan",
    Sale: 112_000,
  },
  {
    name: "Feb",
    Sale: 99_000,
  },
  {
    name: "Mar",
    Sale: 12_090,
  },
  {
    name: "Apr",
    Sale: 99_000,
  },
  {
    name: "May",
    Sale: 54_000,
  },
  {
    name: "Jun",
    Sale: 85_000,
  },
  {
    name: "Jul",
    Sale: 38_000,
  },
  {
    name: "Agu",
    Sale: 18_580,
  },
  {
    name: "Sep",
    Sale: 0,
  },
  {
    name: "Oct",
    Sale: 73_078,
  },
  {
    name: "Nov",
    Sale: 12_900,
  },
  {
    name: "Des",
    Sale: 97_000,
  },
];

const newMembers = [
  {
    id: 1,
    username: "Ali Bakhshi",
    title: "Web Developer",
    img: "images/PicsArt.jpg",
  },
  {
    id: 2,
    username: "Amir Bakhshi",
    title: "Bro",
    img: "images/PicsArt.jpg",
  },
  {
    id: 3,
    username: "Moslem Torkaman",
    title: "Teacher",
    img: "images/PicsArt.jpg",
  },
  {
    id: 4,
    username: "Marcella",
    title: "shishil",
    img: "images/PicsArt.jpg",
  },
];

const transActions = [
  {
    id: 1,
    customer: "Ali Bakhshi",
    date: "12 Jul 2023",
    amount: 125,
    status: "Approved",
    img: "images/PicsArt.jpg",
  },
  {
    id: 2,
    customer: "Marcella",
    date: "2 May 2023",
    amount: 189,
    status: "Declined",
    img: "images/PicsArt.jpg",
  },
  {
    id: 3,
    customer: "Moslem Torkaman",
    date: "18 Jun 2023",
    amount: 324,
    status: "Pending",
    img: "images/PicsArt.jpg",
  },
  {
    id: 4,
    customer: "Amir Bakhshi",
    date: "15 Dec 2023",
    amount: 632,
    status: "Approved",
    img: "images/PicsArt.jpg",
  },
];

let userRows = [
  {
    id: 1,
    username: "Ali Bakhshi",
    avatar: "images/PicsArt.jpg",
    status: "active",
    transAction: "$355.53",
    email: 'Ali@gmail.com'
  },
  {
    id: 2,
    username: "Maecella",
    avatar: "images/PicsArt.jpg",
    status: "non-active",
    transAction: "$2.1",
    email: 'Ali@gmail.com'
  },
  {
    id: 3,
    username: "Amir Bakhshi",
    avatar: "images/PicsArt.jpg",
    status: "active",
    transAction: "$370.23",
    email: 'Ali@gmail.com'
  },
  {
    id: 4,
    username: "Moslem Torkaman",
    avatar: "images/PicsArt.jpg",
    status: "active",
    transAction: "$74.59",
    email: 'Ali@gmail.com'
  },
  {
    id: 5,
    username: "Dompa",
    avatar: "images/PicsArt.jpg",
    status: "non-active",
    transAction: "$3.2",
    email: 'Ali@gmail.com'
  },
];

let products = [
  {
    id: 1,
    title: "Asus",
    avatar: 'images/PicsArt.jpg',
    price: 84_300_000,
  },
  {
    id: 2,
    title: "Acer",
    avatar: 'images/PicsArt.jpg',
    price: 72_100_000,
  },
  {
    id: 3,
    title: "Dell",
    avatar: 'images/PicsArt.jpg',
    price: 42_000_000,
  },
  {
    id: 4,
    title: "hp",
    avatar: 'images/PicsArt.jpg',
    price: 38_200_000,
  },
];

const productsData = [
  {
    name: 'Jan',
    sales: 4000
  },
  {
    name: 'Feb',
    sales: 3000
  },
  {
    name: 'Mar',
    sales: 5000
  },
]

export { xAxisData, newMembers, transActions, userRows, products, productsData };
