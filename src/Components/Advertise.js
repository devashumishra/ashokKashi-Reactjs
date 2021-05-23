import React from 'react'
import {Card, Form, FormControl, FormGroup, FormLabel, Button}from 'react-bootstrap'

function Advertise() {
    return (
        <div>
            <div className="advertise">
                <h4 className="adv">Advertisers Details</h4>
                <Card style={{width:"95%", marginLeft:"20px"}}>
                 <table >
                     <tr>
                         <th style={{width:"250px"}}>Ashokashi Executive:</th>
                         <td style={{textAlign:"left"}}>Mangesh Wadibhasme</td>
                         <td><h6>16,500</h6></td>
                     </tr>
                     <tr>
                         <td></td>
                         <td>mangeshwadibhasme02@gmail.com</td>
                         <td>Civil Lines, Nagpur</td>
                     </tr>
                     <tr>
                         <td></td>
                         <td>9579831122</td>
                     </tr>
                     <tr>
                         <th style={{width:"250px"}}>Posted On:</th>
                         <td>20th 2020</td>
                     </tr>
                 </table>

                </Card>
                <h4>Please fill Your Details to be shared with advertiser only</h4>
                <p style={{marginLeft:"20px"}}>BASIC INFORMATION</p>
                <table style={{marginLeft:"20px", width:"900px"}}>
                    <tr>
                        <td>
                       FIRST NAME<br></br>
                       <Form.Control type="text"/></td>
                       <span style={{marginLeft:"20px"}}>                      
                        <td>
                           LAST NAME
                           <Form.Control type="text" style={{width:"350px"}}/>
                       </td></span>


                    </tr>
                   
                    <tr>
                        <td>
                       MOB No<br></br>
                       <Form.Control type="text" style={{width:"250px"}}/></td>
                       <span style={{marginLeft:"20px"}}>                      
                        <td>
                          Email Id
                           <Form.Control type="email" style={{width:"300px"}}/>
                       </td></span>


                    </tr>

                    <tr>I am a
                        
                    <Form.Group controlId="select">
                    <Form.Control as="select">
      <option>Seller</option>
      <option>First Time Buyer</option>
      <option>Repeat Buyer</option>
      <option>Property Dealer</option>
      <option>Investor</option>
      <option>Agent</option>
    </Form.Control> </Form.Group>
                    </tr>

                </table><br></br>
                <span style={{marginLeft:"350px"}}>
                <Button style={{width:"100px"}} variant="secondary">Cancel</Button></span>
                <span style={{marginLeft:"20px"}}>
                <Button style={{width:"100px"}} variant="warning">Send</Button></span>
                

            </div>
        </div>
    )
}

export default Advertise
