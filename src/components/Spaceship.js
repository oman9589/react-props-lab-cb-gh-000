import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div className='spaceship'>
        <h1>{props.name}</h1>
        <p>{props.speed}</p>
        <p>{props.hasRockets}</p>
        <small>{props.colors}</small>
      </div>
    )
  }
}

export default Spaceship;
