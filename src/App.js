import { Component } from 'react';

// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    console.log('constructor-begin');
    super();

    this.state = {
      monsters: []
    };
  }

  // 
  componentDidMount() {
    console.log('componentDidMount-begin');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return { monsters: users }; 
        },
          () => {
          console.log(this.state);
        })
      });
  }

  render() {
    console.log('render-begin');
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={
          (event) => { console.log(event.target.value); return null; }
        } />
        {
          this.state.monsters.map(
            (monster) => {
              return <div key={monster.name}>
                <h1>{monster.name}</h1>
              </div>
            })
        }
      </div>
    );
  }

}

export default App;
