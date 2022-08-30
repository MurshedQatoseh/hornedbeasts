import HornedBeast from './HornedBeast.js';
import React from 'react';

import Card from 'react-bootstrap/Card'




class Main extends React.Component {  
  render() {
    return (
      <div>
        
        <Card> 
          {this.props.beasts.map((thisBeast, index) => {
            return (
              <div key={index}>
                <HornedBeast
                  showModal = {this.props.showModal}
                  title={thisBeast.title}
                  img={thisBeast.image_url}
                  description={thisBeast.description}
                  horns={thisBeast.horns}
                />
              </div>
            )
          })}
        </Card>
      </div>
    )
  }
}

export default Main;