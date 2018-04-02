var GoodList = [
  {
    name: 'Book1',
    author: 'Author2',
    abstract: 'abstract',
    price: 300,
    id: 0,
    stock: 20,
    year: 1943
  },
  {
    name: 'Book2',
    author: 'Author3',
    abstract: 'abstract',
    price: 400,
    id: 1,
    stock: 25,
    year: 1942
  },
  {
    name: 'Book3',
    author: 'Author0',
    abstract: 'abstract',
    price: 200,
    id: 2,
    stock: 30,
    year: 1944
  },
  {
    name: 'Book0',
    author: 'Author2',
    abstract: 'abstract',
    price: 50,
    id: 3,
    stock: 1000,
    year: 7102
  }
]
var UserList = [
  {
    id: 0,
    name: 'testUser',
    phone: '00000000',
    pwd: 'pwd',
    buy: [{ id: 0, amount: 1 }],
    email: 'test@dev.io',
    icon: ''
  }
]
var LoginId = ''
var OrderList = [
  {
    id: 0,
    userid: 0,
    buy: [{ id: 0, amount: 1 }],
    time: new Date(),
    date: ''
  }
]
export default {
  GoodList, UserList, LoginId, OrderList
}
