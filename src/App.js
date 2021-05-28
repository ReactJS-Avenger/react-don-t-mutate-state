import logo from './logo.svg';
import './App.css';
import React from 'react';
import ItemList from './ItemList';

class App extends React.Component {
  state={ item: []}

  // initialize the counter
  nextItemId = 0;

  makeItem(){
    return {
      id: this.nextItemId++,
      value: Math.random()
    }
  }

  // The Right Way:
  // copy the existing items and add a new one
  addItemImmutably=()=>{
    this.setState({
      item: [...this.state.item, this.makeItem()]
    })
  }

    // The Wrong Way:
  // mutate items and set it back
  addItemMutably = () => {
    this.state.item.push(this.makeItem());
    this.setState({ item: this.state.items });
  };
  
  render(){
    return(
      <div>
        <button onClick={this.addItemImmutably}>Add Item immutably</button>
        <button onClick={this.addItemMutably}>Add item Mutably</button>
        <ItemList items={this.state.item}/>
      </div>
    )
  }
}

export default App;
