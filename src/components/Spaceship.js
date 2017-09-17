import React from 'react';

class Spaceship extends React.Component {
  static defaultProps = {
    speed: 'slow',
    hasRockets: false,
    colors: ['black', 'red'],
  }

  render() {
    return (
      <div className='spaceship'>
        <h1>{this.props.name}</h1>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        <p>{this.props.colors}</p>
      </div>
    )
  }
}

export default Spaceship;
