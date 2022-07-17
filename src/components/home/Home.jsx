import React,{ useState} from 'react'
import './home.css'
import {FiSearch} from "react-icons/fi"
import Search from "../search/Search";
import {GoSettings} from "react-icons/go"
import Nav from '../nav/Nav';
import {Link} from "react-router-dom"
import 'animate.css';
function Home() {
  // const [openSearch, setOpenSearch] = useState(false)
  return (
    <>
      <div className='search' >
          <FiSearch id='searchIcon'/>
          <Link to="/search" className="search__info" 
          // onClick={() => setOpenSearch(true)}
          >
            <h5>Search for ?</h5>
            <p>Blood type | Location </p>
          </Link>
          {/* <input type="text"  placeholder='Blood type/ Location'/> */}
          <GoSettings id='settingsIcon'/>
          {/* <UseAnimations animation={settings2} /> */}
      </div>
      {/* {openSearch && <Search closeSearch={setOpenSearch} />} */}
      <Nav/>
    </>

  )
}

export default Home