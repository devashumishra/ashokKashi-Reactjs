import React from 'react'
import PropTypes from 'prop-types'
import bootstrap, { Container } from 'react-bootstrap'
import {Row,Col, Button, Form, FormControl, Nav} from 'react-bootstrap'


function Footer(props) {
  return (
        
      <div>
           <footer style={{fontSize:"10px", color:"white"}} className="mobile">
             <Row>
               <Col xl={12} lg={12} xs={12} sm={12}>
                  <h2 className="foot">Want to Buy or Sell Your Property?</h2>
                  <p style={{fontSize:"5px"}}>wdhfuhvjldjlsjfvfdjfjjcvjjvdkfhuhfhfkdjdurrrfkjjvaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                  <p style={{fontSize:"5px"}}>dsjdfhkfhdskfsjkjjgjfdgjlfkd</p><br></br><br></br>
                  <div className="foot-btn">
                  <span className="foot-btn1">
                  <Button href="#"  variant="warning"><span style={{fontSize:"5px"}}>Buying Property</span></Button>
                  </span>
                  <hr className="line"></hr>
                  <span className="foot-btn2">
                  <Button href="#"  variant="warning"><span style={{fontSize:"5px"}}>Selling Property</span></Button></span>
                  </div><br></br>
                  </Col>
             </Row>
                  <div style={{fontSize:"1px"}}> 
                    <Container > 
                  <hr className="hozline"></hr>
                  <Row>
                  <Col  xl={3} lg={3} xs={3} sm={3}>
                    <div className="footicon">
                    <img src="/assets/Images/footlogo.png"></img>  <br></br>  
                  <img src="/assets/Images/facebook.png"></img>
                    <img src="/assets/Images/twitter.png"></img>
                    <img src="/assets/Images/googleplus.png"></img>
                    <img src="/assets/Images/instagram.png"></img>
                    </div>
                    
                  
                  </Col>
                  <Col xl={2} lg={2} xs={2} sm={3}>
                    <h6 className="footh">Quick links</h6>
                    <hr className="footline"></hr>
                    <ol className="footh">

                      <li>Home</li>
                      <li>Buy</li>
                      <li>Rent</li>
                      <li>Sell</li>
                      <li>Blogs</li>
                      <li>Contact Us</li>
                    </ol>

                  </Col>
                  <Col xl={2} lg={2} xs={2} sm={3}>
                    <h6 className="footh">Services</h6>
                    <hr className="footline"></hr>
                     <ol className="footh">

                      <li>Buy Property</li>
                      <li>Rent Property</li>
                      <li>Sell Property</li>
                      <li>Purchase</li>
                     
                    </ol>
                   
                    </Col>
                    <Col xl={3} lg={3} xs={3} sm={3}>
                    <h6 className="footh">Discover</h6>
                    <hr className="footline" ></hr>
                     <ol className="footh">

                      <li>Privacy Policy</li>
                      <li>Terms & Conditions</li>
                      <li>Owners</li>
                      <li>Houses</li>
                     
                    </ol>
                    </Col>
                    <Col xl={2} lg={2} xs={2} sm={3} style={{marginLeft:"-80px"}}>
                    <h6 className="footh">Subscribe</h6>
                    <hr className="footline"></hr>
                    
                    <Form inline style={{marginTop:"40px"}}>
    <FormControl  type="email" placeholder="Email Address" className="form"/>
    <Button style={{position:"absolute", marginTop:"-47px" , marginLeft:"70px"}} type="submit" variant="btn btn-warning">Subscribe</Button>
  </Form>

                    </Col>
                    </Row>
                    <hr className="hozline"></hr>
                  </Container>

                  </div>
             
           </footer>

          {/* MOBILE */}
             <div className="desktop">
                          <footer style={{fontSize:"10px", color:"white"}} >
                         <div className="foot">
                           <Row>
                         <Col xl={12} lg={12} xs={12} sm={12}>
                          <h2>Want to Buy or Sell Your Property?</h2>
                  <p style={{fontSize:"5px"}}>wdhfuhvjldjlsjfvfdjfjjcvjjvdkfhuhfhfkdjdur</p>
                  <p style={{fontSize:"5px"}}>dsjdfhkfhdskfsjkjjgjfdgjlfkd</p> 
                  </Col></Row> 
                  
  
                
                  
                 <div className="foot-btn">
                  <span className="foot-btn1">
                  <Button href="#"  variant="warning"><span style={{fontSize:"5px"}}>Buying Property</span></Button>
                  </span>
                  <hr className="line"></hr>
                  <span className="foot-btn2">
                  <Button href="#"  variant="warning"><span style={{fontSize:"5px"}}>Selling Property</span></Button></span>
                  </div>
                  <hr className="hozline"></hr>

                  
                  
             
                  
                    
                 <div className="footlink">
                  <Row>
                  <Col xs= {4}>
                     <h6>Quick links</h6>
                    <hr className="footline"></hr>
                    <ul className="footitems">

                      <li>Home</li>
                      <li>Buy</li>
                      <li>Rent</li>
                      <li>Sell</li>
                      <li>Blogs</li>
                      <li>Contact Us</li>
                    </ul>
               </Col>

                <Col xs= {4}>
                <h6>Services</h6>
                    <hr className="footline"></hr>
                     <ul className="footitems">

                      <li>Buy Property</li>
                      <li>Rent Property</li>
                      <li>Sell Property</li>
                      <li>Purchase</li>
                     
                    </ul>
               </Col>

                <Col xs= {4}>
                <h6>Discover</h6>
                    <hr className="footline" ></hr>
                     <ul className="footitems">

                      <li>Privacy Policy</li>
                      <li style={{lineHeight:"20px"}}>Terms & Conditions</li>
                      <li>Owners</li>
                      <li>Houses</li>
                     
                    </ul>
               </Col>
               </Row>
               </div>

               <Form inline style={{marginTop:"-10px"}}>
    <FormControl style={{width:"300px", marginLeft:"30px"}} type="email" placeholder="Email Address" className="form"/>
    <Button style={{position:"absolute", marginTop:"-47px" , marginLeft:"70px"}} type="submit" variant="btn btn-warning">Subscribe</Button>
  </Form>

  <hr className="hozline1"></hr>
                  
                  
                  <img style={{width:"100px",height:"100px", marginTop:"-20px", marginLeft:"-100px"}} src="/assets/Images/footlogo.png"></img> 
                  <div style={{marginTop:"-30px", marginLeft:"100px"}}> <img src="/assets/Images/facebook.png"></img>
                    <img src="/assets/Images/twitter.png"></img>
                    <img src="/assets/Images/googleplus.png"></img>
                    <img src="/assets/Images/instagram.png"></img>
                    </div>

                
                  {/* 
                  
                   
                  */}

                  </div>
                
            
           </footer>
           </div>

    





      </div>
    );
}


export default Footer
