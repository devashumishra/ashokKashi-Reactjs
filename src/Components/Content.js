import React from 'react'
import {Row, Col, Card, Button, CardGroup, slideInUp, slideOutUp}from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

function Content() {

    const data=[
        {
            id:1,
            area: "Civil Lines, Nagpur",
            heading:"Rent",
            price:"16500",
            url:'/assets/Images/content1.jpg',
            feet:"200"
         },
         { 
            id:2,
            area: "Manish Nagar, Nagpur",
            heading:"Rent",
            price:"16500",
            url:"/assets/Images/content2.jpg",
            feet:"200"

         },
         {
            id:3,
            area: "Narendra nagar, Nagpur",
            heading:"Rent",
            price:"16500",
            url:"/assets/Images/content3.jpg",
            feet:"200"
         },
         {
          id:4,
          area: "Narendra nagar1, Nagpur",
          heading:"Rent",
          price:"16500",
          url:"/assets/Images/content1.jpg",
          feet:"200"
       },
    ]
    return (

        
        <div className="container" >
          <Card className="content1">

          <Row>
                 <Col xl={4} lg={4} sm={4} xs={8}>
                     <Card.Img src=""className="contentimg"></Card.Img>
                     <div className="contenttxt">
                         <b>Civil Lines, Nagpur</b>
                         <p>iejierj</p>
                     </div>
                     </Col>
                     <Col xl={2} lg={2} sm={2} xs={4}>
                         <div className="price">
                             <Card.Title><b>₹ 16,500</b></Card.Title>
                            <Card.Text><span> <p>See other Charges</p></span></Card.Text>
                            </div>
                     </Col>

                      <Col xl={6} lg={6} sm={6} xs={12}>
                          <div className="contentleft">
                      <p>1 BHK House for Sale Manewada</p>
                      <CardGroup className="contentgroup" >
             <Card style={{backgroundColor:"skyblue"}}  > 
                    <Card.Text>CARPET AREA</Card.Text>
      <Card.Text>
       400sqft
       
      </Card.Text><div className="rightborder"></div>
      </Card>

      <Card style={{backgroundColor:"skyblue"}}>
                    <Card.Text>STATUS</Card.Text>
      <Card.Text>
       Ready to Move
      </Card.Text><div className="rightborder"></div>
   </Card>

   <Card style={{backgroundColor:"skyblue"}}>
                    <Card.Text>FLOOR</Card.Text>
      <Card.Text>
       1 Out of 1 floor 
      </Card.Text><div className="rightborder"></div>
   </Card>

   <Card style={{backgroundColor:"skyblue"}}>
                    <Card.Text>Transaction</Card.Text>
      <Card.Text>
       New property
      </Card.Text>
   </Card>

   </CardGroup>
                             <div style={{paddingTop:"30px"}}><Card.Text>This property is good place</Card.Text></div>
                             <div style={{paddingTop:"15px", display:"flex"}}>

                             
                             <Button style={{width:"180px", color:"white"}} variant="warning">Contact Agent</Button>
                             <Button variant="outline-warning" style={{marginLeft:"10px"}}>Get Phone No.</Button>
                             <Button variant="outline-light" style={{color:"blue"}}>Share Feedback</Button>
                            
                             </div>
                             </div>
                     </Col>
                     

                     </Row>
                 
          </Card>
          
        </div>
        
    
      
    );
}

export default Content
