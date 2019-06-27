import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import List from './List.js';
import Store from './store';
class App extends React.Component{
  state = {
    store : {Store}
  }

  handleDeleteButton = (card)=> {
    
    console.log('handling delete')
  }

  handleRandomCard = () => {
    console.log('handling random card')
  }
  render(){
    
  //look through STORE.lists to get a list (object)
  //in the list get the array of cardIds
  //this.allCards to display the card objects with matching cardIds


  const lists = this.state.store.Store.lists.map((list)=> {
    return <List key={list.id} 
  header={list.header}
  cards={list.cardIds.map((id)=>Store.allCards[id])}
  deleteButton={this.handleDeleteButton}
  randomCard={this.handleRandomCard}
  />});

  return (
  <div className='App'>
      <header className="App-header">
      <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {lists}
        </div>
    </div>
    )
  }
  }

export default App;
