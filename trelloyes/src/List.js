import React from 'react';
import Card from './Card';
import './List.css';


function List (props) {

  let cards=props.cards.map((card) => 
  <Card 
  key={card.id}
  id={card.id}
  title={card.title} 
  content={card.content}
  deleteCard={props.deleteCard}
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