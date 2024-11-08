import React from 'react'
import { useState } from "react";
import './HomePage.css'
import { Button, Card, Row } from 'react-bootstrap';
function HomePage() {
  const [selectedList, setselectedList] = useState("women");
  var womenList= [
    {
    productImg:'Women Watch',
    productName:'Product 1',
    ProductDesc:"This is a list of women's products.",
    productPrice:'$500'

  },
  {
    productImg:'Women Watch',
    productName:'Product 2',
    ProductDesc:"This is a list of women's products.",
    productPrice:'$300'

  },
  {
    productImg:'Women Watch',
    productName:'Product 3',
    ProductDesc:"This is a list of women's products.",
    productPrice:'$30'

  },
  ]
  var MobileList= [
    {
    productImg:'Mobile images',
    productName:'Iphone',
    ProductDesc:"This is a list of Mobile products.",
    productPrice:'$500'

  },
  {
    productImg:'Mobile images',
    productName:'Oppo',
    ProductDesc:"This is a list of Mobile products.",
    productPrice:'$300'

  },
  ]
  var pakistanList= [
    {
    productImg:'Pakistan images',
    productName:'Pakistan product 1',
    ProductDesc:'',
    productPrice:'2000 PKR'

  },
  {
    productImg:'pakistan product images',
    productName:'pakistan product 2',
    ProductDesc:'',
    productPrice:'3000 PKR'

  },
  ]
  return (
    <div className='home-container'>
          <div className='text-center my-5 d-flex flex-column align-items-center'>
            <h4 className='fw-bold'>Best watches & mobiles in UK</h4>
            <p className='fs-5 w-50 text-center px-2' style={{color:'#7F85A8' , lineHeight:'1.6', fontWeight:'400',}}>Best women's gift shop in uk if you are searching. We have multiple collection for gift's like watches for women and mans. We are providing best quality of watches and mobiles.</p>
          </div>
          <div>
            <div className='d-flex justify-content-center' style={{gap:'40px'}}>
              <span style={{cursor:'pointer'}}
              onClick={()=>setselectedList("women")}
              className={!selectedList==='women' && 'active'}
              >Women's watches</span>
              <span style={{cursor:'pointer'}}
              onClick={()=>setselectedList("mobile")}
              className={!selectedList==='mobile' && 'active'}
              >Mobile</span>
              <span style={{cursor:'pointer'}}
              onClick={()=>setselectedList("pakistan")}
              className={!selectedList==='pakistan' && 'active'}
              >Pakistan</span>
            </div>
            <div><hr/></div>
            {/* items */}
            <Row className='d-flex grid grid-col-3 m-5'>
           {((selectedList=== 'women' && womenList)||
           (selectedList=== 'mobile' && MobileList) || 
           (selectedList=== 'pakistan' && pakistanList) )
           .map((val)=>{
             return (
              <Card style={{ width: '18rem' }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>{val.productName}</Card.Title>
                <Card.Text>
                    {val.ProductDesc}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
             )
           })}    
          </Row>
        
            </div>

    </div>
  )
}

export default HomePage
