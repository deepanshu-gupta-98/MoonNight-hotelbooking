import React from 'react'
import "./searchItem.css"
import Footer from '../footer/Footer'
import MailList from '../mailList/MailList'
import Header from '../header/Header'

function SearchItem() {
  return (
    <>
    
    <div className='searchItem'>
        <img src="https://www.shutterstock.com/image-photo/luxury-hotel-infinity-pool-palms-600w-648165631.jpg" alt="" className="sImg" />
        <div className="sDesc">
            <h1 className="sTitle">Tower Street Apartments</h1>
            <span className="sDistance">500m from center</span>
            <div className="sTaxiOp">Free airport taxi</div>
            <span className="sSubtitle">Studio Apartment with Air conditioning
            </span>
            <span className="sCancelOp">Free cancellation</span>
        </div>
        <div className="sDetails">
         <div className="sRating">
          <span>Excellent</span>
          <button>8.9</button>
         </div>
         <div className="sDetailTexts">
          <span className="sPrice">&#x20B9;20,000</span>
          <span className="sText">Includes taxes and fees</span>
          <button className='sCheck'>See availability</button>
         </div>
        </div>
    </div>

    <div className='searchItem'>
        <img src="https://www.uniqhotels.com/media/current_blog/11._Ambassador_City_Jomtien_Tower.jpg" alt="" className="sImg" />
        <div className="sDesc">
            <h1 className="sTitle">ocen hotel</h1>
            <span className="sDistance">1km from center</span>
            <div className="sTaxiOp">Free airport taxi</div>
            <span className="sSubtitle">Studio Apartment with Air conditioning
            </span>
            <span className="sCancelOp">Free cancellation</span>
        </div>
        <div className="sDetails">
         <div className="sRating">
          <span>Excellent</span>
          <button>9.2</button>
         </div>
         <div className="sDetailTexts">
          <span className="sPrice">&#x20B9;25,000</span>
          <span className="sText">Includes taxes and fees</span>
          <button className='sCheck'>See availability</button>
         </div>
        </div>
    </div>

    
    <div className='searchItem'>
        <img src="https://qph.cf2.quoracdn.net/main-qimg-90ed78e13bc99a6e817d8373bee63e33" alt="" className="sImg" />
        <div className="sDesc">
            <h1 className="sTitle">Crystel blue hotel</h1>
            <span className="sDistance">5km from center</span>
            <div className="sTaxiOp">Free airport taxi</div>
            <span className="sSubtitle">Studio Apartment with Air conditioning
            </span>
            <span className="sCancelOp">Free cancellation</span>
        </div>
        <div className="sDetails">
         <div className="sRating">
          <span>Excellent</span>
          <button>9.1</button>
         </div>
         <div className="sDetailTexts">
          <span className="sPrice">&#x20B9;30,000</span>
          <span className="sText">Includes taxes and fees</span>
          <button className='sCheck'>See availability</button>
         </div>
        </div>
    </div>

    <div className='searchItem'>
        <img src="https://gos3.ibcdn.com/b2d30126ddc611ed8e7b0a58a9feac02.png" alt="" className="sImg" />
        <div className="sDesc">
            <h1 className="sTitle">Holiday inn</h1>
            <span className="sDistance">800m from center</span>
            <div className="sTaxiOp">Free airport taxi</div>
            <span className="sSubtitle">Studio Apartment with Air conditioning
            </span>
            <span className="sCancelOp">Free cancellation</span>
        </div>
        <div className="sDetails">
         <div className="sRating">
          <span>Excellent</span>
          <button>8.1</button>
         </div>
         <div className="sDetailTexts">
          <span className="sPrice">&#x20B9;21,000</span>
          <span className="sText">Includes taxes and fees</span>
          <button className='sCheck'>See availability</button>
         </div>
        </div>
    </div>

    <div className='searchItem'>
        <img src="https://c8.alamy.com/comp/F0TGA5/lanesborough-hotel-knightsbridge-elevation-lanesborough-hotel-london-F0TGA5.jpg" alt="" className="sImg" />
        <div className="sDesc">
            <h1 className="sTitle">High fly hotel</h1>
            <span className="sDistance">2km from center</span>
            <div className="sTaxiOp">Free airport taxi</div>
            <span className="sSubtitle">Studio Apartment with Air conditioning
            </span>
            <span className="sCancelOp">Free cancellation</span>
        </div>
        <div className="sDetails">
         <div className="sRating">
          <span>Excellent</span>
          <button>8.2</button>
         </div>
         <div className="sDetailTexts">
          <span className="sPrice">&#x20B9;22000</span>
          <span className="sText">Includes taxes and fees</span>
          <button className='sCheck'>See availability</button>
         </div>
        </div>
    </div>

<MailList/>
<Footer/>

  </>  
  )
}

export default SearchItem