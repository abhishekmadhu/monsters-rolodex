import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'

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

    const { monsters, filterString } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toString().toLowerCase().includes(filterString.toLowerCase());
    }) 

    return (

      <div className="App">

        <h1 className='app-title'>Monsters Rolodex</h1>

        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder='search monsters'
          className='monsters-search-box'
        />
        <CardList monsters={ filteredMonsters }  />
      </div>
    );
  }

}

export default App;
