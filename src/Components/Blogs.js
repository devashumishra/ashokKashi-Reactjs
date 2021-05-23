import React, {useState, useEffect, Card} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

function Blogs() {

    const size = useWindowSize();
    let item = 3;
    if(size.width < 500){
          item = 1;
    }else if(size.width < 767){
          item = 3;
    }else if(size.width > 991){
          item = 8;
    }
   

    const data=[
        {
            id:1,
            area: "Civil Lines, Nagpur",
            heading:"Rent",
            price:"16500",
            url:'/assets/Images/Blog1.jpg',
            feet:"200"
         },
         { 
            id:2,
            area: "Manish Nagar, Nagpur",
            heading:"Rent",
            price:"16500",
            url:"/assets/Images/Blog2.jpg",
            feet:"200"

         },
         {
            id:3,
            area: "Narendra nagar, Nagpur",
            heading:"Rent",
            price:"16500",
            url:"/assets/Images/Blog3.jpg",
            feet:"200"
         },
         {
          id:4,
          area: "Narendra nagar1, Nagpur",
          heading:"Rent",
          price:"16500",
          url:"/assets/Images/Blog3.jpg",
          feet:"200"
       },
    ]
    return (
        
             <OwlCarousel
              className="owl-theme"
              loop
              nav={true}
              items = {item}
              autoplay = {true}
              autoplayTimeout = {3000}
              margin={330}>
                  {data.map((item)=>(
                    
                    
                      <div className="box" key={item.id} >
                      <div className= "box-img">
                         <img src={item.url}></img> 
                      </div>
                      <div className="rent">
                        <h6>{item.heading}</h6>
                      </div>
              
                      <h6 style={{fontSize:"5px",margin:"10px"}}>{item.area}</h6>
                      <p style={{lineHeight:"1px", marginLeft:"10px", fontSize:"1px"}}>{item.feet}</p>
                      <div className="rupees">
                        <h6>{item.price}</h6>
                      </div>
              
                    </div>
                        
                        

                  )
                  )}
      
      </OwlCarousel>
   
 
      
    );
}

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




export default Blogs
