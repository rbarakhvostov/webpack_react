import "core-js/modules/web.dom-collections.iterator";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import './main.scss';
import url from './images/avatar.png';
export default class App extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      count: 0
    });

    _defineProperty(this, "increase", () => {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    });

    _defineProperty(this, "decrease", () => {
      this.setState(prevState => ({
        count: prevState.count - 1
      }));
      this.setState(prevState => ({
        count: prevState.count - 1
      }));
    });
  }

  render() {
    return React.createElement("div", {
      className: "container"
    }, React.createElement("img", {
      src: url,
      alt: "avatar"
    }), React.createElement("span", null, this.state.count), React.createElement("div", null, React.createElement("button", {
      onClick: this.decrease
    }, "-"), React.createElement("button", {
      onClick: this.increase
    }, "+")));
  }

}