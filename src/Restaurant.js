import React, { Component } from "react";
import Order from "./Order";

class Restaurant extends Component {
  state = {
    pizzas: 0,
    orders: 0
  };

  addOrder = () => {
    console.log("add Order");
    this.setState(prevState => {
      return {
        orders: prevState.orders + 1
      };
    });
  };

  render() {
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <ul>
          <Order orderType={"Pizzas"} />
          <Order orderType={"Salads"} />
        </ul>
      </div>
    );
  }
}

export default Restaurant;
