import React from 'react';

function Hero({isAuth}){
    return (
        <div className="hero">
            <h1 className="page-title">BlogSight</h1>
            <img class="girl" src="../images/girl.png" alt="" />
            <img class="gadget" src="../images/gadgets.png" alt="" />
            <img class="beat" src="../images/beat.png" alt="" />

            <div className="buttons">
                {!isAuth ? <button className="explore-button"><a href="/login">Explore</a></button> : <button className="explore-button"><a href="/blogs">Explore</a></button>}
                {!isAuth ? <button className="enlighten-button"><a href="/login_enlighten">Enlighten</a></button> : <button className="enlighten-button"><a href="/newblogpost">Enlighten</a></button>}
            </div>
        </div>
    );
}

export default Hero;