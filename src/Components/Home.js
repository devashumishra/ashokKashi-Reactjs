import React from 'react'
import Homeheading from './Homeheading';
import Homecard from './Homecard' 
import {Tabs , Tab, Col, Card, Form, FormControl,Row, Button } from 'react-bootstrap';
import Blogs from './Blogs';
import TeamSlider from './TeamSlider'

export default function Home() {
    return (
        <div >
            <Homeheading/>
            <Homecard/>
            <section className="container" style={{marginTop:"20%"}}>
               <h1> Featured Homes</h1>
               <div className="hozline"> </div>
                 fofoef
                   <div style={{marginLeft:"70%"}}>
                   <Tabs defaultActiveKey="Rent" id="uncontrolled-tab-example">
  <Tab eventKey="Rent" title="Rent">
     <div style={{marginLeft:"-750px"}}> <Blogs/>
     </div>
  </Tab>
  <Tab eventKey="Sell" title="Sell">
  <div style={{marginLeft:"-750px"}}> <Blogs/>
     </div>
  </Tab>
  <Tab eventKey="Buy" title="Buy">
  <div style={{marginLeft:"-750px"}}> <Blogs/>
     </div>
  </Tab>
</Tabs>
                  
               </div>

            </section>
           
        <section>
        <TeamSlider/>
        </section>

         
        <div style={{marginTop:"5%", marginLeft:"20%"}}>
           
         <div>
       <Card style={{width:"15em",height:"65px"}}>
           
               <Card.Text>
                   <h4 style={{lineHeight:"30px"}}><strong>Subsribe Our<br></br> Newsletter</strong></h4>
                </Card.Text>
        
       </Card></div>
       <div style={{marginTop:"-65px", marginLeft:"22%"}}> <Form inline>
           
    <FormControl type="email" placeholder="Email Id" className="form" style={{width:"300px",height:"65px"}}/>
    <Button style={{marginTop:"-97px", height:"65px", marginLeft:"280px", width:"20%"}} type="submit" variant="btn btn-warning">Subscribe</Button>
  </Form>
  </div>
</div>


        </div>
    )
}
