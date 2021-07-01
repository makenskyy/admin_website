export const productRows = [
  { id: 1, productName: "Iphone 12", status: "active", quantity: 14, price: "$400" },
  { id: 2, productName: "Macbook", status: "not-active", quantity: 14, price: "$800" },
  { id: 3, productName: "Samsung", status: "not-active", quantity: 10, price: "$400" },
  { id: 4, productName: "Xiaomi", status: "active", quantity: 14, price: "$400" },
  { id: 5, productName: "Huawei", status: "active", quantity: 17, price: "$400" },
  { id: 6, productName: "Nokia", status: "not-active", quantity: 14, price: "$400" },
  { id: 7, productName: "Lenovo ideapad", status: "active", quantity: 21, price: "$400" },
  { id: 8, productName: "HP", status: "not-active", quantity: 14, price: "$400" },
]

export const orderRows = [
  { id: 41242, username: 'sasha.golovin', date: '2020-13-07', total: '$190.30', delivered: true },
  { id: 41243, username: 'john.johnson', date: '2019-14-06', total: '$210.00', delivered: false },
  { id: 41244, username: 'michael.jackson', date: '2015-16-03', total: '$280.20', delivered: false },
  { id: 41245, username: 'david.beckham', date: '2015-16-03', total: '$500.10', delivered: true },
  { id: 41246, username: 'leo.messi', date: '2016-23-04', total: '$400.00', delivered: true },
  { id: 41247, username: 'misha.grigoriev', date: '2018-19-01', total: '$424.12', delivered: true },
  { id: 41248, username: 'kylian.marsel', date: '2016-11-04', total: '$400.12', delivered: true },
  { id: 41249, username: 'aisha.matvey', date: '2019-19-11', total: '$300.02', delivered: true },
]

export const customerOrders = [
  { id: 1, productName: "Iphone 12 PRO", date: "2019-24-06", total: "%400.10", delivered: false, orderID: 41241 },
  { id: 2, productName: "Airpods", date: "2018-27-10", total: "$100.35", delivered: false, orderID: 41250 },
  { id: 3, productName: "Samsung", date: "2019-26-04", total: "$200.50", delivered: false, orderID: 41270 },
  { id: 4, productName: "Huawei", date: "2021-24-11", total: "$100.00", delivered: false, orderID: 41300 }
]



export const customers = [
  {
    id: 1, username: 'david.laid', firstName: 'David', lastName: "Laid", email: "david@gmail.com",
    orders: [
      { id: 41241, productName: "Iphone 12 PRO", date: '2020-12-09', total: '$200.40', delivered: "Yes", paymentMethod: "MasterCard", shippingAddress: "New York City" },
      { id: 41242, productName: "Airpods", date: "2020-25-08", total: "$250.30", delivered: "No", paymentMethod: "VISA", shippingAddress: "Astana" }
    ]
  },
  {
    id: 2, username: 'sasha.golovin', firstName: 'Sasha', lastName: "Golovin", email: "golovin@gmail.com",
    orders: [

      { id: 41243, productName: "Samsung", date: "2021-13-07", total: "$400.23", delivered: "No", paymentMethod: "MasterCard", shippingAddress: "Monaco" },
      { id: 41244, productName: "Huawei", date: "2022-14-06", total: "$500.50", delivered: "No", paymentMethod: "VISA", shippingAddress: "Moscow, Russia" }
    ]
  }
]