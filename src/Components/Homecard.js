import React from 'react'
import {Row, Col, Table, NavDropdown, Button, Card} from 'react-bootstrap'

function Homecard() {
    return (
        <div className="content">
           
           <Row>
              <Col xl={7} lg={7} sm={8}>

          
          <Card className="card1" >
          <Card.Body >
              <div >
  <Card.Img className="cardimg" src="/assets/Images/homecardimg2.jpg"/></div>
  
  <hr className="cardline"></hr> 
     <div className="cardbdy">
          
     <Card.Text>
    <p><strong>Card Title</strong></p>
    
    <div className="cardtext">Some quick example text to build on the card 
    Some quick example text to build on the card 
    Some quick example text to build on the card </div>
    </Card.Text>
    </div>
  
  </Card.Body>
</Card>


<Card className="card2">
          <Card.Body >
              <div >
  <Card.Img className="cardimg"  src="/assets/Images/homecardimg1.jpg"/></div>
  
  <hr className="cardline"></hr> 
     <div className="cardbdy">
          
     <Card.Text>
    <p><strong>Card Title</strong></p>
    
    <div className="cardtext">Some quick example text to build on the card 
    Some quick example text to build on the card 
    Some quick example text to build on the card </div>
    </Card.Text>
    </div>
  
  </Card.Body>
</Card>


<Card className="card3">
          <Card.Body >
              <div >
  <Card.Img className="cardimg"  src="/assets/Images/homecardimg1.jpg"/></div>
  
  <hr className="cardline"></hr> 
     <div className="cardbdy">
          
     <Card.Text>
    <p><strong>Card Title</strong></p>
    <div className="cardtext">Some quick example text to build on the card 
    Some quick example text to build on the card 
    Some quick example text to build on the card </div>
    </Card.Text>
    </div>
  
  </Card.Body>
</Card>
          

     
          </Col>
          < Col xl={5} lg={5} sm={4}>
          <div className="hometxt1">
             <p><h3>WELCOME TO</h3></p>
             <p><h3>ASHOKKASHI INFRA PVT, LTD</h3></p>
             <hr className="secline"></hr>
             <Button type="submit"  variant="btn btn-warning">More Detail <img src="/assets/Images/right-arrow.png"></img></Button>



          </div>
          </Col>
          </Row>
        
        </div>
    );
}

export default Homecard
