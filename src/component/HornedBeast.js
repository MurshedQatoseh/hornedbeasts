import React from "react";

import Card from 'react-bootstrap/Card';


class Hornedbeast extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      states: 0,
    }
  }
  buttonClicked = () => {
  this.setState({states: this.state.states + 1});
  this.props.showModal(this.props.title);
}
    render(){

    
      
      const title = this.props.title;
      const description = this.props.description;
      
        return(
            
    
    <div>
    <Card style={{ width: '18rem' }}
      onClick={this.buttonClicked}>
        <Card.Img variant="top" src={this.props.imageURL} alt={this.props.title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Horn Count: {this.props.horns}</Card.Text>
          <Card.Text>❤️ = {this.state.states}</Card.Text>
        </Card.Body>
    </Card>
  </div>
        

            
            
            
            


        )
    }
}
export default Hornedbeast;