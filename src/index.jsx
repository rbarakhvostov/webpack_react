import React from 'react';
import ReactDOM from 'react-dom';

import './main.scss';

import url from './images/avatar.png';

const App = () => (
       <div>
    <p>This is Webpack React App</p>
    <img src={url} alt="avatar" />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
