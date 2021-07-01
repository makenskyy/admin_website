import React from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Customers from './pages/Customers/Customers';
import Orders from './pages/Orders/Orders';
import Product from './pages/Product/Product'

import Login from './pages/Login/Login';
import Settings from './pages/Settings/Settings';
import Products from './pages/Products/Products';
import OrderDetails from './pages/OrderDetails/OrderDetails';
import CustomerOrders from './pages/CustomerOrders/CustomerOrders';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Customer } from './pages/Customer/Customer';


import "./App.css"
import NewProduct from './pages/NewProduct/NewProduct';

// if store logged in 

function App() {

  return (
    // <>
    //   <h1>Hello</h1>
    // </>
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/customers' component={Customers} />
          <Route exact path='/customer/:id' component={Customer} />
          <Route exact path='/orders' component={Orders} />
          <Route exact path='/settings' component={Settings} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/product/:id' component={Product} />
          <Route exact path='/newProduct' component={NewProduct} />
          <Route exact path='/customer/:id/orders' component={CustomerOrders} />
          <Route exact path='/orders/:id' component={OrderDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
