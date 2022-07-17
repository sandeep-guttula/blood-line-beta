import React from 'react'
import './search.css'
import Nav from '../nav/Nav'
import {AiOutlineCloseCircle} from "react-icons/ai"
import {FiSearch} from "react-icons/fi"
import {IoMdLocate} from "react-icons/io"
import {BiDonateHeart} from "react-icons/bi"
import {RiUserLocationLine} from "react-icons/ri"
import {Link} from "react-router-dom"

function Search() {
  return (
    <>
        <div className="search__container">
            <div className='search__header'>
                <h2>Request blood <BiDonateHeart/></h2>
                <Link to="/" className="close__search">
                    <AiOutlineCloseCircle />
                </Link>
            </div>
            <div className="search__content">
                <h3>Search for doners</h3>
                <div className="search__bar">
                    <FiSearch id='icon'/>
                    <input type="text" placeholder='Blood type/ Location' />
                </div>
                <div className="search__results">
                    <div className="search__result">
                        <IoMdLocate id='icon'/>
                        <div className="location">
                            <h4>Location: Kakinada</h4>
                            <h5>Show all the donors in kakinada</h5>
                        </div>
                    </div>
                    <div className="search__result">
                        <IoMdLocate id='icon'/>
                        <div className="location">
                            <h4>Location: Kakinada</h4>
                            <h5>Show all the donors in kakinada</h5>
                        </div>
                    </div>
                    <div className="search__result">
                        <RiUserLocationLine id='icon'/>
                        <div className="location">
                            <h4>Blood type: O +ve</h4>
                            <h5>Show all the donors with O +ve</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

  )
}

export default Search