import React from 'react';
import CardsView from './CardsView';
import IconSwitch from './IconSwitch';
import ListView from './ListView';

export default class Store extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: "view_list",
      view: "cards",
    }
    this.onSwitch = this.onSwitch.bind(this);

    this.products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
      }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
      }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
      }]; 
  }

  onSwitch(event) {
    this.setState({
      icon: event.target.textContent === "view_module" ? "view_list" : "view_module",
      view: event.target.textContent === "view_list" ? "list" : "cards",
    });
  }

  render() {
    return (
      <div>
        <IconSwitch icon={this.state.icon} onSwitch={this.onSwitch}/>
        {this.state.view === "cards" ?
          <CardsView cards={this.products}/> :
          <ListView cards={this.products}/>}
      </div>
    )
  }
};
