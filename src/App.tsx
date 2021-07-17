import React, { useEffect } from 'react';

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
import NotFound from './pages/NotFound/NotFound';

import Shops from './pages/Shops/Shops';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Customer } from './pages/Customer/Customer';

import { Provider } from 'react-redux';

import PrivateRoute from './pages/PrivateRoute/PrivateRoute';

import styles from "./App.module.scss"
import NewProduct from './pages/NewProduct/NewProduct';

import { useTypedSelector } from './store/useTypesSelector';


const App: React.FunctionComponent = () => {

  const isToggledMenuButton = useTypedSelector(state => state.authReducer.isToggledMenuButton);

  const isLoggedIn = useTypedSelector(state => state.authReducer.isLoggedIn);

  return (
    <>
      <Router>
        <PrivateRoute path='/'>
          <Topbar />
          <div className={styles.container}>
            <Sidebar />
            <div className={!isToggledMenuButton ? `${styles.overlay}` : `${styles.overlay} ${styles.addOverlay}`} />
            <Switch>
              <Route exact path='/'>
                <Redirect to='/dashboard' />
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
              <Route exact path='/shops' component={Shops} />
              <Route exact path='/logout'>
                <Redirect to='/login' />
              </Route>
              <Route component={NotFound} />
            </Switch>
          </div>
        </PrivateRoute >
        <Route path='/login' component={Login} />
      </Router >
    </ >
  );
}

export default App;
