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

  newRandomCard = () => { const id = Math.random().toString(36).substring(2, 4) 
    + Math.random().toString(36).substring(2, 4); 
    return { id, title: `RandomCard ${id}`, content: 'lorem ipsum', } } 


      deleteCard = (id)=> {

        const { allCards, lists} = this.state;
   
        const newList=lists.map( list => ({
          ...list,
          cardIds : list.cardIds.filter(cardId => cardId!==id)
          
        }));
        
        const newCards=this.omit(allCards, id)
          
        this.setState({lists:newList, allCards:newCards})
        
  }

  handleRandomCard = (listId) => {
    const newCard = this.newRandomCard();
    console.log(newCard)
    const { allCards, lists } = this.state;
    const newList = lists.map(list => list.id === listId ? {...list, cardIds:[...list.cardIds, newCard.id ]}: list);
    const newCards = {...allCards, [newCard.id]: newCard};
    console.log(newCards);
    this.setState({lists:newList, allCards: newCards})
}

  render(){
    
  //look through STORE.lists to get a list (object)
  //in the list get the array of cardIds
  //this.allCards to display the card objects with matching cardIds


  const lists = this.state.lists.map((list)=> {
    return <List 
    key={list.id}
  id = {list.id}    
  header={list.header}
  cards={list.cardIds.map((id)=>this.state.allCards[id])}
  deleteCard={this.deleteCard}
  randomCard={this.handleRandomCard}
  />
});

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
