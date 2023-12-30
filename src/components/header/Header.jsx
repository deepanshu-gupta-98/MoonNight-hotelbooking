import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./header.css"
import { faBed, faPerson } from "@fortawesome/free-solid-svg-icons"
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from"date-fns"
import { useNavigate } from "react-router-dom";

function Header({type}) {
  const [destination, setDestination] = useState("")
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setopenOptions] = useState(false);
  const [options, setoptions] = useState({
    adult:1,
    children:0,
    room:1,
  })

  const navigate =useNavigate()

  const handleOption =(name,operation)=>{
    setoptions ((prev)=>{
      return{
        ...prev,
        [name]: operation === "i"? options[name] + 1 : options[name] - 1,
     };
   });
  };

  const handleSearch =()=>{
    navigate("/hotels")
  }
  
  return (
    <div className="header">
      <div className={type==="list"?"headerContainer listMode":"headerContainer"}>

        <div className="headerList">
            <div className="headerListItem Active">
              <i class="fa-solid fa-bed"></i>
              <span>Stays</span>
            </div>
            <div className="headerList">
            <i class="fa-solid fa-plane"></i>
            <span>Flights</span>
            </div>
            <div className="headerList">
            <i class="fa-solid fa-car"></i>
            <span>Car rentales</span>
            </div>
            <div className="headerList">
            <i class="fa-solid fa-bed"></i>
            <span>Attractions</span>
            </div>
            <div className="headerList">
            <i class="fa-solid fa-taxi"></i>
            <span>Airport taxis</span>
            </div>
         </div>

         { type !== "list" &&
          <>
          <h1 className="headerTitle">A lofetime discounts? It's Genius</h1>
         <p className="headerDesc">Get rewarded for your travels-unlock instunt sevings of 10% or more with a free Hotelbooking account
         </p>
         <button className="headerBtn">Sign in / Register</button>
         <div className="headerSearch">
         <div className="headerSearchItem">
          <FontAwesomeIcon icon={faBed} className="headerIcon"/>
          <input type="text" placeholder="Where are you going?" className="headerSearchInput" onChange={e=>setDestination(e.target.value)}/>
          </div>

         <div className="headerSearchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
          <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate,
            "dd/mm/yyyy")} to ${format(date[0].endDate,"dd/mm/yyyy")}`}</span>
            {openDate && <DateRange
          editableDateInputs={true}
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date} className="date"
          minDate={new Date()}
          />}
          </div>

         <div className="headerSearchItem">
          <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
          <span onClick={()=>setopenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult . ${options.children} children. ${options.room} room`}</span>
          {openOptions && <div className="options">
          <div className="optionItem">
           <span className="optionText">Adult</span>
           <div className="optionCounter">
           <button disabled={options.adult <= 1} className="optionCounterButton " onClick={()=>handleOption("adult","d")}>-</button>
           <span className="optionCounterNumber">{options.adult}</span>
           <button className="optionCounterButton" onClick={()=>handleOption("adult","i")}>+</button>
           </div>
          </div>
          <div className="optionItem">
           <span className="optionText">children</span>
           <div className="optionCounter">
           <button disabled={options.children <= 0} className="optionCounterButton" onClick={()=>handleOption("children","d")}>-</button> 
           <span className="optionCounterNumber">{options.children}</span>
           <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>
           </div>
          </div>
          <div className="optionItem">
           <span className="optionText">room</span>
           <div className="optionCounter">
           <button disabled={options.room <= 1} className="optionCounterButton" onClick={()=>handleOption("room","d")}>-</button> 
           <span className="optionCounterNumber">{options.room}</span>
           <button className="optionCounterButton" onClick={()=>handleOption("room","i")}>+</button>
           </div>
          </div>
        </div>
          }
       </div>
          

         <div className="headerSearchItem">
         <button className="headerbtn" onClick={handleSearch}>Search</button>
          </div>

          </div> 
          </>}
      </div>
    </div>
  )
}

export default Header