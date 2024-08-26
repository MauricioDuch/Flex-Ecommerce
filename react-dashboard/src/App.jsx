import React, { Component } from "react";
import UserList from "./components/userList.jsx";
import ProductList from "./components/totalProducts.jsx";
import Home from "./components/Home.jsx";
import SingleProduct from "./components/SingleProduct.jsx";
import SingleUser from "./components/SingleUser.jsx";
import LastProduct from "./components/lastProduct.jsx";
import LastUser from "./components/lastUser.jsx";
import EachCategory from "./components/EachCategory.jsx";
import { Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import Header from "./components/header.jsx";
class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />
        <Switch>
          <Route path="/productList" exact component={ProductList} />
          <Route path="/products/:id" exact component={SingleProduct} />
          <Route path="/userList" exact component={UserList} />
          <Route path="/user/:id" exact component={SingleUser} />
          <Route path="/lastProduct" exact component={LastProduct} />
          <Route path="/eachCategory" exact component={EachCategory} />
          <Route path="/lastuser" exact component={LastUser} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
