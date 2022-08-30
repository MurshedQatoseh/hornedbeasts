import React from "react";
import Hornedbeast from "./HornedBeast";
import data from '../data.json'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class Main extends React.Component{

    render(){

        return(
            <Row xs={1} md={2} className="g-4">
            {
                data.map(item =>
                    

                    <Col>
                    

                    <Hornedbeast title={item.title} imageURL={item.image_url} description={item.description}/>
                    </Col>
                
                    
                    
                    
                    )
                   

            
            }
            
            </Row>
        )
    }
}
export default Main;