import React from 'react';
import './App.css';
import List from './List.js';
import Store from './store';
class App extends React.Component{
  state = Store
  

   omit(obj, keyToOmit) {
    return Object.entries(obj).reduce(
      (newObj, [key, value]) =>
          key === keyToOmit ? newObj : {...newObj, [key]: value},
      {}
    );
  }

  
      deleteCard = (card,listId)=> {
   
    let newAllCards=this.omit(this.state.allCards,id)
    let newLists=this.state.lists.map(list=>list.cardIds.filter(i=>id!==i))
    console.log(id);
    console.log(newLists);
    
    this.setState({
      allCards:newAllCards,
      lists:newLists,
    })
    
  }

  handleRandomCard = () => {
    console.log('handling random card')
  }
  render(){
    
  //look through STORE.lists to get a list (object)
  //in the list get the array of cardIds
  //this.allCards to display the card objects with matching cardIds


  const lists = this.state.lists.map((list)=> {
 
    return <List key={list.id} 
  header={list.header}
  cards={list.cardIds.map((id)=>Store.allCards[id])}
  deleteCard={()=>this.deleteCard(list.id)}
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
