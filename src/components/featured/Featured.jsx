import "./featured.css"

function Featured() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://m.economictimes.com/thumb/msid-73023854,width-1200,height-900,resizemode-4,imgsize-235513/hotel-agencies.jpg"
             alt="" className="featuredImg" />
            <div className="featuredTitles">
               <h1>ocean</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://m.economictimes.com/thumb/msid-73023854,width-1200,height-900,resizemode-4,imgsize-235513/hotel-agencies.jpg"
             alt="" className="featuredImg" />
            <div className="featuredTitles">
               <h1>malta</h1>
                <h2>425 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://m.economictimes.com/thumb/msid-73023854,width-1200,height-900,resizemode-4,imgsize-235513/hotel-agencies.jpg"
             alt="" className="featuredImg" />
            <div className="featuredTitles">
               <h1>reno</h1>
                <h2>524 properties</h2>
            </div>
        </div>

    </div>
  )
}

export default Featured