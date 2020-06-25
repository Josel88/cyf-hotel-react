import React, { Component } from "react";
import RestaurantButton from "./RestaurantButton";

class Order extends Component {
  render() {
    return (
      <li>
        Pizzas: {this.state.orders}
        <RestaurantButton addOrder={this.addOrder} />
      </li>
    );
  }
}

export default Order;
