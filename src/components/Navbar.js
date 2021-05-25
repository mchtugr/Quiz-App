import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';


const Navbar = (props) => {

    const renderAuthSection = () => {
        if(!props.isSignedIn){
            return null
        } else {
            return (
                <>
                <Link to='/add-question' className='navbar-item btn navbar-btn'>Add Question</Link>
                </>
            )
        }
    }
    return (
        <div className='navbar-container'>
            <div className='logo-container'>
                <Link to='/' className='navbar-item btn navbar-btn'>Home</Link>
            </div>
            <div className='navbar-items-container'>
                {renderAuthSection()}
                <GoogleAuth />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isSignedIn : state.auth.isSignedIn
    }
}

export default connect(mapStateToProps)(Navbar)
