import React, { Component } from 'react';

import './main.scss';

import url from './images/avatar.png';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  decrease() {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }));
    this.setState(prevState => ({
      count: prevState.count - 1,
    }));
  }

  render() {
    return (
      <div className="container">
        <img src={url} alt="avatar" />
        <span>{this.state.count}</span>
        <div>
          <button onClick={this.decrease}>-</button>
          <button onClick={this.increase}>+</button>
        </div>
      </div>
    );
  }
}
