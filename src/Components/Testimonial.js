import React from 'react'
import { Row, Col ,Card, Button, FormControl, Form} from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel'; 
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

function Testimonial() {
    return (
        <div>        <div className="testimonial">
            <Row>
                <Col xl={4} lg={4} sm={4} xs={4} >
                    <div className="clienttext">
                    <h4>Client Testimonials</h4>
                    <hr className="hozline"></hr>
                    <p>Browse our latest prperty's customer review</p>
                    </div>

                </Col>
                <Col xl={8} lg={8} sm={8} xs={8}>
                <OwlCarousel  items={4}  
          className="owl-theme"  
          loop
         dots={false}
          autoplay
          autoplayTimeout={2000}
          margin={2} >  
          
         
          <Card className="client">
          
              <div className="client-img" >
  <img className="client-img1" variant="top" src="/assets/Images/testimonial1.jpg"/></div>
  
 
     <div className="client-text">
          
     <Card.Text>
    <p><h6>Arun Gaddam</h6>
    oskdsifrioitoryyyyyyyiuyhgfdswerrrrrrrrrrrrrrrrrrrrr </p>


        
    </Card.Text>
    </div>
  </Card>

  <Card className="client" >
          
          <div className="client-img" >
<img className="client-img1" variant="top" src="/assets/Images/testimonial2.jpg"/></div>


 <div className="client-text">
      
 <Card.Text>
<p><h6>Asutosh Sir</h6>
oskdsifrioitoryyyyyyyiuyhgfdswerrrrrrrrrrrrrrrrrrrrr </p>


    
</Card.Text>
</div>
</Card>

<Card className="client" >
          
              <div className="client-img" >
  <img className="client-img1" variant="top" src="/assets/Images/testimonial3.jpg"/></div>
  
 
     <div className="client-text">
          
     <Card.Text>
    <p><h6>Sachin sir</h6>
    oskdsifrioitoryyyyyyyiuyhgfdswerrrrrrrrrrrrrrrrrrrrr </p>


        
    </Card.Text>
    </div>
  </Card>

  <Card className="client" >
          
              <div className="client-img" >
  <img className="client-img1" variant="top" src="/assets/Images/testimonial4.jpg"/></div>
  
 
     <div className="client-text">
          
     <Card.Text>
    <p><h6>Dragonite</h6>
    oskdsifrioitoryyyyyyyiuyhgfdswerrrrrrrrrrrrrrrrrrrrr </p>


        
    </Card.Text>
    </div>
  </Card>
         
       
         </OwlCarousel>
        
                </Col>
            </Row>

        
        </div>

        <setion>
            <Row>
                <Col xs={6}>
       
       <Card style={{width:"15em",height:"65px", marginLeft:"200px"}}>
           
               <Card.Text>
                   <h4 style={{lineHeight:"30px"}}><strong>Subsribe Our<br></br> Newsletter</strong></h4>
                </Card.Text>
        
       </Card></Col>
       <Col xs={6}>
       <Form inline>
           <div style={{display:"inline-block"}}>
    <FormControl type="email" placeholder="Email Id" className="form" style={{width:"200px"}}/>
    <Button  type="submit" variant="btn btn-warning">Subscribe</Button></div>
  </Form>
  </Col>
  </Row>
</setion>

        </div>



    );
}

export default Testimonial

