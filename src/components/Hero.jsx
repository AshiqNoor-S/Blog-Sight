import React from 'react';
import { auth, provider } from "../firebase-config";

const user = localStorage.getItem("auth-token");

function Hero({isAuth}){
    return (
        <div className="hero">
            <h1 className="page-title">BlogSight</h1>
            <img class="girl" src="../images/girl.png" alt="" />
            <img class="gadget" src="../images/gadgets.png" alt="" />
            <img class="beat" src="../images/beat.png" alt="" />

            <div className="buttons">
                {!user ? <button id="1" className="explore-button"><a href="/login">Explore</a></button> : <button id="1" className="explore-button"><a href="/blogs">Explore</a></button>}
                {!user ? <button id="2" className="enlighten-button"><a href="/login">Enlighten</a></button> : <button id="2" className="enlighten-button"><a href="/newblogpost">Enlighten</a></button>}
            </div>
        </div>
    );
}

export default Hero;