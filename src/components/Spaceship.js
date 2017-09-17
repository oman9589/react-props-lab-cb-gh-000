import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div className='spaceship'>
        <h1>{this.props.name}</h1>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        <ul>
          {this.props.map((color) =>
            <li>{color}</li>)};
        </ul>
      </div>
    )
  }
}

export default Spaceship;
