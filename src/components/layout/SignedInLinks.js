import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <div className="navLinks">
      <ul className="right">
        <li><NavLink to='/create' style={{textDecoration: 'none'}}>Add Stock to Portfolio</NavLink></li>
        <li><NavLink to='/calendar' style={{textDecoration: 'none'}}>Calendar of Events</NavLink></li>
        <li><NavLink to='/weeklynews' style={{textDecoration: 'none'}}>TPH Weekly Newsletter</NavLink></li>
        <li><NavLink to='/dashboard'> My Portfolio </NavLink></li>
        <li><a href='/' onClick={props.signOut}>Log Out</a></li>
       
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)