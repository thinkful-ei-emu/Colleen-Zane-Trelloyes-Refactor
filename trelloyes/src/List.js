import React from 'react';
import Card from './Card';
import './List.css';


function List (props) {

  const cards=props.cards.map((card) => <Card 
  key={card.id}
  title={card.title} 
  content={card.content}
  deleteCard={props.deleteCard}
  id={card.id}
  
  />)

return(
<section className="List">
  <header className='List-header'>
    <h2>{props.header}</h2>
    </header>
    <div className='List-cards'>
      {cards}
    </div>
  <button type="button" onClick={()=>{props.randomCard(props.id)}}>Add Random Card</button>
  </section>
  )
}

export default List