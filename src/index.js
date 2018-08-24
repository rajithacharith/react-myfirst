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
/*
function Clock(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}
*/
function tick() {
    ReactDOM.render(
        <Clock />,
        document.getElementById('root')
    );
}

function ActionLink(){
    function handleClick(e){
        e.preventDefault();
        console.log("The link was clicked");
    }

    return(
        <a href="#" onClick={handleClick}>
            Click me
        </a>
    );
}

function UserGreeting(props){
    return <h1>Welcome Back!</h1>;
}

function GuestGreeting(props){
    return <h1>Please Sign Up!</h1>
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting />;
    }
    return <GuestGreeting/>;
}

function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
}
  
function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
}

//Classes
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillMount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }


    render(){
        return(
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        );
    }
}

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn : true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            isToggleOn:!prevState.isToggleOn
        }));
    }

    render(){
        return(
            <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON':'OFF'}
            </button>
        );
    }
}

class LoggingButton extends React.Component{
    handleClick(){
        console.log('this is:', this);
    }

    render(){
        return(
            <button onClick = {(e) => this.handleClick(e)}>
            Click me
            </button>
        );
    }
}


class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
  
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />
      }
  
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
    }
}



//main code
ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
);

/*
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
*/

//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
