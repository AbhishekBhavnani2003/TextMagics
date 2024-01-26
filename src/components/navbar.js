import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";


export default function navbar(props) {

const greencolor = () =>
{
     document.body.style.backgroundColor = 'green' ;
      document.body.style.color = 'white' ;
      document.getElementsByTagName("button").backgroundColor = "green"
      document.querySelector(".navbar").style.backgroundColor="black"
}

const redcolor = () =>
{
     document.body.style.backgroundColor = 'red' ;
      document.body.style.color = 'white' ;
      document.getElementsByTagName("button").backgroundColor = "green"
}

const browncolor = () =>
{
     document.body.style.backgroundColor = 'brown' ;
      document.body.style.color = 'white' ;
      document.getElementsByTagName("button").backgroundColor = "green"
}





  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">{props.title}</a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-primary" type="submit">Search</button>
        </form> */}

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-3`}>
            <input className="form-check-input" type="checkbox" role="switch" onClick={props.togglemode} id="flexSwitchCheckDefault" />
            <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable Dark Mode </label>
          </div>



          <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off"  onClick={browncolor}/>
            <label className="btn btn-outline-primary" htmlFor="btnradio1">Brown</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"  onClick={redcolor} />
            <label className="btn btn-outline-primary" htmlFor="btnradio2">Red</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"  onClick={greencolor}/>
            <label className="btn btn-outline-primary" htmlFor="btnradio3">Green</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

// ensuring datatypes like number , strings and boolean . this is check  
navbar.propTypes = { title: PropTypes.string.isRequired, aboutText: PropTypes.string.isRequired }



// for setting default values here 
navbar.defaultProps =
{
  title: ' Set title here ',
  aboutText: ' About text here '

}

