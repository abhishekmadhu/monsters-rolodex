import { Component } from 'react';

// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    console.log('constructor-begin');
    super();

    this.state = {
      monsters: [],
      filterString: ''
    };
  }

  onSearchChange = (event) => {
    console.log('onSearchChange-begin');
    // console.log(event.target.value);
    this.setState(() => {
      return {
        filterString: event.target.value
      };
    },
      () => {
      // console.log(this.state);
    });
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
          // console.log(this.state);
        })
      });
  }

  render() {
    console.log('render-begin');
    return (
      <div className="App">
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={this.onSearchChange}
        />
        {
          this.state.monsters.filter((monster) => {
            // console.log(monster.name, this.state.filterString);
            return monster.name.toString().toLowerCase().includes(this.state.filterString.toLowerCase());
          }).map(
            (monster) => {
              // console.log('map', monster.name);
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
