import React from 'react';
import OwlCarousel from 'react-owl-carousel'; 
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Row, Col, Card, Button, CardGroup}from 'react-bootstrap';

function BookTour() {
    return (
    <div>
        <Card style={{width:"700px",height:"600px"}}>
            <div className="Booktour">
                <Card.Title className="booktitle">Book A Tour</Card.Title>
                <Card.Text className="booktext">Call 9579831122</Card.Text>
                <Card.Text className="booktext1"><b >AshoKashi Co-Working Space</b></Card.Text>
                <Card.Text className="booktext2">Select Date and Time</Card.Text>

                <b>Check In</b>
                <b style={{marginLeft:"35px"}}>Check Out</b>
                <br></br>
                <p>Set Date <span style={{marginLeft:"35px"}}>Set date</span></p>
                <br></br>
                <b>Time</b>
                <Card style={{width:"350px", height:"50px"}}>
                    <Card.Body>12:00 pm</Card.Body>
                </Card>
                <br></br>
                <Button variant="warning" className="slidebtn">Continue</Button>
                
            </div>
            
            </Card>        
    </div>
    )
}

export default BookTour
