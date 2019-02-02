import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import '../../images/logo.png'
import '../../App.css'

const Navbar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
    
    return (
        <nav className="navwrapper">
         <div className="container navLink">
            <Link to='/' ><img src="https://i.imgur.com/AA6NzQY.png" style={{textDecoration: 'none'}} alt="TPH Logo" className="logo"/></Link>
            { links }
         </div>
         </nav>
        
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)