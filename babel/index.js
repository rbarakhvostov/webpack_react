import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import url from './images/avatar.png';

const App = () => React.createElement("div", null, React.createElement("p", null, "This is Webpack React App"), React.createElement("img", {
  src: url,
  alt: "avatar"
}));

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));