import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div className='spaceship'>
        <h1>{this.props.name}</h1>
        <p>{this.props.speed.toString()}</p>
        <p>{this.props.hasRockets.toString}</p>
        <small>{this.props.colors}</small>
      </div>
    )
  }
}

export default Spaceship;
