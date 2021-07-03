export const products = [
  { id: 1, productName: "Iphone 12", status: "active", quantity: 14, price: 400 },
  { id: 2, productName: "Macbook", status: "not-active", quantity: 14, price: 800 },
  { id: 3, productName: "Samsung", status: "not-active", quantity: 10, price: 400 },
  { id: 4, productName: "Xiaomi", status: "active", quantity: 14, price: 400 },
  { id: 5, productName: "Huawei", status: "active", quantity: 17, price: 400 },
  { id: 6, productName: "Nokia", status: "not-active", quantity: 14, price: 400 },
  { id: 7, productName: "Lenovo ideapad", status: "active", quantity: 21, price: 400 },
  { id: 8, productName: "HP", status: "not-active", quantity: 14, price: 400 },
]

export const orders = [
  { id: 41241, productName: products[0].productName, date: '2020-12-09', total: 200.40, delivered: "Yes", paymentMethod: "MasterCard", shippingAddress: "New York City", customer_id: 1 },
  {
    id: 41242, productName: products[1].productName, date: "2020-25-08", total: 250.30, delivered: "No", paymentMethod: "VISA", shippingAddress: "Astana",
    customer_id: 1
  },
  {
    id: 41243, productName: products[2].productName, date: "2021-13-07", total: 400.23, delivered: "No", paymentMethod: "MasterCard", shippingAddress: "Monaco",
    customer_id: 2
  },
  {
    id: 41244, productName: products[3].productName, date: "2022-14-06", total: 500.50, delivered: "No", paymentMethod: "VISA", shippingAddress: "Moscow, Russia",
    customer_id: 2
  }

]

export const customers = [
  {
    id: 1, username: 'david.laid', firstName: 'David', lastName: "Laid", email: "david@gmail.com", phoneNumber: "+(7)-775-775-75-75",
    orders_id: [41241, 41242]
  },
  {
    id: 2, username: 'sasha.golovin', firstName: 'Sasha', lastName: "Golovin", email: "golovin@gmail.com", phoneNumber: "+(7)-777-777-77-77",
    orders_id: [41243, 41244]
  }
]