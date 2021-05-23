import React from 'react';
import OwlCarousel from 'react-owl-carousel'; 
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import {Card, Container, Row, Col, CardDeck, Button, CardImg }from 'react-bootstrap'
import MiniSlider from './BookTour';

function Slider() {
    return (
        <div style={{marginTop:"2%"}}>
                
            
                {/* <OwlCarousel items={3}  
          className="owl-theme"  
          loop
         dots={false}
          autoplay
          autoplayTimeout={2000}
          margin={0} >  
          
         <div><Card> <Card.Img src="/assets/Images/download.jpg"></Card.Img></Card></div>
         <div> <Card> <Card.Img src="/assets/Images/building.jpg"></Card.Img></Card></div>
         <div> <Card> <Card.Img src="/assets/Images/download.jpg"></Card.Img></Card></div>
         <div> <Card> <Card.Img src="/assets/Images/building.jpg"></Card.Img></Card></div>
         <div> <Card> <Card.Img src="/assets/Images/download.jpg"></Card.Img></Card></div>
         <div> <Card> <Card.Img src="/assets/Images/building.jpg"></Card.Img></Card></div>
         </OwlCarousel> */}
                  
     
            
        
          <Card style={{height:"800px", width:"92.5%", marginLeft:"50px" }}>
            <Row>
              <Col xl={8} lg={8} sm={8} xs={12}>
              <Card style={{width:"99%", height:"120px"}}>
                <Row>
                <Col xs={6}>
                    <div  className="slidecard1"><b>₹ 16,500</b><br></br>
                    <p style={{lineHeight:"50px"}}>Civil Lines, Nagpur</p>
                    <p style={{marginTop:"-30px"}} >fguirfhjsilwhdkdut</p>
                      
                            
                    </div> 
                 
                </Col>       
                 
                 <Col xl={6} lg={6} sm={6} xs={12}>        
                       <CardDeck style={{display:"flex"}}>
                         <Card.Text>Direction</Card.Text>
                         <Card.Text style={{marginLeft:"10px"}}>Pdf</Card.Text>
                         <Card.Text style={{marginLeft:"10px"}}>Share</Card.Text>
                         <Card.Text style={{marginLeft:"10px"}}>Favorite</Card.Text>
                         </CardDeck>  

                       
                 </Col>

                 <Card style={{width:"97%", height:"500px", marginLeft:"14px"}}>
                <Card.Title>Description</Card.Title>
                <Card.Text>
                Augmented reality (AR) is an interactive experience of a real-world environment
                 where the objects that reside in the real world are enhanced by computer-generated 
                 perceptual information, sometimes across multiple sensory modalities, including visual,
                  auditory, haptic, somatosensory and olfactory. AR can be defined as a system that fulfills 
                  three basic features: a combination of real and

                  <div style={{marginTop:"30px"}}><b>Mangesh Wadibhasme</b>
                      <p>Civil Lines, Nagpur</p></div>

                      <Card.Title>
                        Property Summary
                        <Row>
                          <Col xl={4} lg={4} sm={4} xs={12}>
                              <ul className="sliderlist1">
                                <li><b>Property Type</b></li>
                                <li><p>Single Family</p></li>
                                <li style={{marginTop:"-15px"}}><b>Total Area</b></li>
                                <li>fhuhrv</li>
                              </ul>
                          </Col>
                          <Col xl={4} lg={4} sm={4} xs={12}>
                          <ul className="sliderlist2">
                                <li><b>Building Type</b></li>
                                <li><p>House</p></li>
                                <li style={{marginTop:"-15px"}}><b>Storeys</b></li>
                                <li>4</li>
                              </ul>
                          </Col>
                          <Col xl={4} lg={4} sm={4} xs={12}>
                          <ul className="sliderlist3">
                                <li><b>Parking Space</b></li>
                                <li><p>2</p></li>
                               
                              </ul>
                          </Col>
                        </Row>
                      </Card.Title>

                </Card.Text>
              </Card>
                 </Row>

            </Card>
              </Col>
             
              <Col xl={4} lg={4} sm={4} xs={12}>

                <Card style={{width:"106.5%", height:"200px", marginLeft:"-25px"}}>
                  <Row>
                    <Col xs={5}>
                     <img src="/assets/Images/testimonial2.jpg" className="slideimg"/>
                    </Col>
                       
                    <Col xs={7}>
                      <div className="slidecard2"><b>Mangesh Wadibhasme</b>
                      <p>AshoKashi Associate</p>
                      <p>9579831122</p>
                      <p style={{marginTop:"-25px"}} >arungaddam9@gmail.com</p>
                      <Button variant="danger" className="slidebtn">Book Appointment</Button>
                      </div>
                     
                    </Col>
                    <div className="sliderimg">
               
          
               <div><Card> <Card.Img className="sliderimg" src="/assets/Images/download.jpg"></Card.Img></Card></div>
               <div > <Card> <Card.Img className="sliderimg" src="/assets/Images/building.jpg"></Card.Img></Card></div>
               <div> <Card><Card.Img className="sliderimg" src="/assets/Images/download.jpg"></Card.Img></Card></div>
            
              
              
            
              </div>
                  </Row>
              
             

                </Card>
             
              </Col>
              
            </Row> 
           
             
             </Card>
        
         
       
    

    

      
      </div>  
        
    )
}

export default Slider
