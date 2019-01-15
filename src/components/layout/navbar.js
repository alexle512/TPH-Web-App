import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
    
    return (
        <nav className="navwrapper">
         <div className="container">
            <Link to='/' className='brand-logo' img src="../../images/logo.png" style={{textDecoration: 'none'}}>Tudor Pickering Holt & Co</Link>
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