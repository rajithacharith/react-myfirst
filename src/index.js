import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//constants
const user = {
    firstName: 'Harper',
    lastName: 'Perez',
    avatarUrl: 'E:/Photography/Lightroom Exports/My Fav/1.jpg'
  };
  
  const element = React.createElement(
    'h2',
    {className: 'greeting'},
    'Hello, world!'
  );



//functions
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

  

function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  

//main code
  setInterval(tick, 1000);
//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
