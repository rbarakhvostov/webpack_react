import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';

const App = () => React.createElement("p", null, "This is Webpack React App");

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));