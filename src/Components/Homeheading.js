import React from 'react'
import PropTypes from 'prop-types'
import bootstrap from 'react-bootstrap'
import {Row, Col, Table, NavDropdown, Button, Card, Form} from 'react-bootstrap'

function Home() {
    return (
    
            <div className="homeimg">
                       
                <div className="hometxt">
                   <center> <p>Let us help you to</p>
                    <p>CHOOSE THE BEST</p></center>
                    </div>

                    <div>
                        <center><Card className="homecard">
                            
                            <Row>
                                <Col xl={4} lg={4} sm={4} xs={4} >
                                  
                                      <div><p className="search-heading">Looking For?</p>
                                  
                                      
                                         <Form.Control as="select" className="homeselect">
                                            <option>Rent Home</option>
                                             <option>Rent</option>
                                             <option>Rent</option>
                                                 </Form.Control></div>
                                       

                                    
                                  
                                </Col>
                                <Col xl={4} lg={4} sm={4} xs={4} >
                                    
                                    <div><p className="search-heading">Locality</p>
                                        
                                            
                                         <Form.Control  as="select" className="homeselect1">
                                             <option>Manewada</option>
                                             <option>Narendra Nagar</option>
                                             <option>Manish Nagar</option>
                                                 </Form.Control>
                                                 </div>

                                    
                                </Col>
                                <Col xl={4} lg={4} sm={4} xs={4}>
                                    
                                        <div><p className="search-heading">Rent Price</p>
                                        
                                             
                                         <Form.Control  as="select" className="homeselect2">
                                             <option>Rent</option>
                                             <option>Rent</option>
                                             <option>Rent</option>
                                                 </Form.Control>
                                                 </div>
                                        
                                
                                </Col>
                                </Row>
                                </Card>
                               <center><div className="homebtn">
                                 <Button className="searchbtn" variant="warning">Search </Button>
                                 </div></center> 
                                
                            

                        </center>
                    </div>


                </div>

    );
   }




export default Home
