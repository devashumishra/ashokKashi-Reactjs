import React from 'react'
import {Card, Button, CardGroup, Form}from 'react-bootstrap';

function Login() {
    return (
        <div className="loginbg">
            
            
            <Card className="logincard" style={{position:"absolute"}}>
            <div style={{marginLeft:"25px", marginRight:"25px"}}>
                <Card.Title style={{marginTop:"25px"}}>Login</Card.Title>
               <Form> 
    <Form.Control style={{border:"none", marginLeft:"-15px", height:"80px" }} type="email" placeholder="Enter Email Id Or Mobile No. " />
    <hr className="loginline"></hr>
    </Form>
    <Button style={{marginTop:"10px", width:"100%", color:"white"}} variant="warning">Next</Button>
    <span style={{marginLeft:"340px", cursor:"pointer"}}>Need Help?</span>
           
    <hr className="loginline1"></hr><p className="loginusing">Or Login Using</p><hr className="loginline2"></hr>
           <div className="loginsite">
               <ul>
               <li>Facebook</li>
               <li>Google</li>
               </ul>
           </div>
           </div>

           <div className="loginfooter">
               <b>New to AshoKashi?<span>Sign Up</span></b>
           </div>


           
          
            </Card>
            
          
            
        </div>
    )
}

export default Login
