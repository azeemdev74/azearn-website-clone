import React from 'react'
import { useState } from "react";
import './HomePage.css'
import { Button, Card, Row } from 'react-bootstrap';
function HomePage() {
  const [selectedList, setselectedList] = useState("women");
  var womenList= [
    {
    productImg:'Women Watch',
    productName:'Anne Klein Womens Genuine Diamond Dial Bangle Watch',
    ProductDesc:"Mineral crystal lens Light rose gold-tone dial with genuine diamond at rose gold-tone hands and markers Rose gold-tone open bangle",
    productPrice:'30 $'

  },
  {
    productImg:'Women Watch',
    productName:'Anne Klein Womens Genuine Diamond Dial Bracelet Watch',
    ProductDesc:"Slightly domed wall-to-wall mineral crystal lens Green sunray dial with genuine diamond at rose gold-tone hands and markers Rose gold-tone",
    productPrice:'40 $'

  },
  {
    productImg:'Women Watch',
    productName:'Leather Strap Watch',
    ProductDesc:"Round silver-tone watch with mm metal case and mineral dial window Japanese quartz movement with analog display Featuring hinged lugs",
    productPrice:'400 $'

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
              <Card style={{ width: '24rem', margin:'40px', border:'none'}}>
              <Card.Img variant="top" src="holder.js/100px180"/>
              <Card.Body style={{textAlign:'center'}}>
                <Card.Title>{val.productName}</Card.Title>
                <Card.Text>
                    {val.ProductDesc}
                </Card.Text>
               <Card.Text className=''style={{fontSize:'20px', fontWeight:'600', color:'brown'}}>
                {val.productPrice}
               </Card.Text>
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
