import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

//constants
const user = {
    firstName: 'Harper',
    lastName: 'Perez',
    avatarUrl: 'E:/Photography/Lightroom Exports/My Fav/1.jpg'
};

const elementOld = React.createElement(
    'h2',
    { className: 'greeting' },
    'Hello, world!'
);

const element = <Welcome name="Sara" />;


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




function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    );
}

function Clock(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

function tick() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('root')
    );
}

//main code
setInterval(tick, 1000);

/*
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
*/

//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
