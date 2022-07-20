import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'
import TextBox from "./components/functional-component-text-box/functional-component-text-box.component.jsx";

import Editor from "@monaco-editor/react";

import './App.css';

class App extends Component {

  constructor() {
    console.log('constructor-begin');
    super();

    this.state = {
      monsters: [],
      filterString: '',
      testPlaceHolder: 'placeholder'
    };
  }

  onSearchChange = (event) => {
    console.log('onSearchChange-begin');
    // console.log(event.target.value);
    const value = event.target.value;

    this.setState(() => {
      return {
        filterString: value,
        // testPlaceHolder: 'placeholder ' + value
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

    const { monsters, filterString, testPlaceHolder } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toString().toLowerCase().includes(filterString.toLowerCase());
    }) 

    return (

      <div className="App">

        {/* <Editor
          height="100vh"
          defaultLanguage='python'
          defaultValue='# write some python code here'
        /> */}

        <h1 className='app-title'>Monsters Rolodex</h1>

        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder='search monsters'
          className='monsters-search-box'
        />
        
        {/* <TextBox placeholder={ testPlaceHolder }></TextBox> */}
        <CardList monsters={ filteredMonsters }  />
      </div>
    );
  }

}

export default App;
