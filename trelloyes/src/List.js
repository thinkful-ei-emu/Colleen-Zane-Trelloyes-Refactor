import React from 'react';
import ReactDOM from 'react-dom'
import Card from './Card';
import './List.css';


function List (props) {
console.log(props);
  const cards=props.cards.map((card) => <Card 
  key={card.id}
  title={card.title} 
  content={card.content}
  deleteButton={props.deleteButton}
  />)

return(
<section className="List">
  <header className='List-header'>
    <h2>{props.header}</h2>
    </header>
    <div className='List-cards'>
      {cards}
    </div>
  <button type="button" onClick={props.randomCard}>Add Random Card</button>
  </section>
  )
}

export default List