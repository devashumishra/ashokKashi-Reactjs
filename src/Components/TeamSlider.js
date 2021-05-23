import React, {useState, useEffect} from 'react';
import { Row, Col ,Card, } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function TeamSlider() {
 
  const size = useWindowSize();
  let item = 4;
  if(size.width < 500){
        item = 1;
  }else if(size.width < 767){
        item = 1;
  }else if(size.width > 991){
        item = 3;
  }

  const data = [
      {
          id:1,
          name:"",
          description:"asjdijewiefiejfi",
          image: 'assets/Images/testimonial1.jpg',
          
      },
      {
          id:2,
          name:"",
          description:"",
          image: 'assets/Images/testimonial2.jpg',
         
      },
      {
          id:3,
          name:"",
          description:"",
          image: 'assets/Images/testimonial3.jpg',
         
      },
      {
          id:4,
          name:"",
          description:"",
          image: 'assets/Images/testimonial4.jpg',
         
      },
      

  ]

  return (

    <div className="testimonial">
            <Row>
                <Col xl={4} lg={4} sm={4} xs={4} >
                    <div className="clienttext">
                    <h4>Client Testimonials</h4>
                    <hr className="hozline"></hr>
                    <p>Browse our latest prperty's customer review</p>
                    </div>

                </Col>

                <Col xl={8} lg={8} sm={8} xs={8}>
        <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            nav={true}
            items = {item}
            autoplay = {true}
            autoplayTimeout = {3000}
        >
            {data.map((item) => (
                    <Card className="client">
          
                    <div className="client-img" >
        <img className="client-img1" src={item.image}/></div>
        
       
           <div className="client-text">
                
           <Card.Text>
          <p><h6>{item.name}</h6>
         {item.description}</p>
      
      
              
          </Card.Text>
          </div>
        </Card>
                    ))}
        </OwlCarousel>
        </Col>
            </Row>

        
        </div>
  );
}

// Hook
function useWindowSize() {

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []); 

  return windowSize;
}

export default TeamSlider;
