import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor () {
    super();

    this.state = {
      name: 'Abhishek'
    };
  }

  // handleChange(){
  //   this.setState({
  //     name: 'China'
  //   });
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi { this.state.name }
          </p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          <button onClick={() => {
            this.setState(
              (state, props) => {
                return {
                  name: state.name === 'Abhishek' ? 'China' : 'Abhishek'
                };
              },
              () => {
                console.log(this.state);
              })
            }}>
            Change Name
          </button>          
        </header>
      </div>
    );
  }

}

export default App;
