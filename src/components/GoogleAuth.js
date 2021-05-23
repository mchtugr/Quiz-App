import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaGoogle } from 'react-icons/fa';


import { signIn, signOut } from '../actions';

export class GoogleAuth extends Component {

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId : '705845778926-k5agjom1a6o8v2sematid1c3q1sdijdl.apps.googleusercontent.com',
                scope : 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.handleAuthChange(this.auth.isSignedIn.get())
                // we listen to the changes in Sign-in and set state accordingly
                this.auth.isSignedIn.listen(this.handleAuthChange);
            })
        });
    };

    handleAuthChange = isSignedIn => {
        if(isSignedIn){
            return this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    handleSignIn = () => {
        this.auth.signIn();
    }

    handleSignOut = () => {
        this.auth.signOut();
    }

    renderAuthButton = () => {
        if(this.props.isSignedIn){
            return (
                <div className='navbar-item navbar-btn btn' onClick={this.handleSignOut}>Sign Out</div>
            )
        } else {
            return (
                <div className='navbar-item navbar-btn btn' onClick={this.handleSignIn}>
                    <FaGoogle style={{color:'red'}}/> 
                    <span>Sign In with Google</span>
                </div>
            )
        }
    }

    render() {
        return (
            <>
                {this.renderAuthButton()}
            </>
        )
    }
}


const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn 
    }
}


export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)
