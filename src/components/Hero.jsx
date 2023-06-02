import React from 'react';

function Hero(){
    return (
        <div className="hero">
            <h1 className="page-title">BlogSight</h1>
            <img class="girl" src="../images/girl.png" alt="" />
            <img class="gadget" src="../images/gadgets.png" alt="" />
            <img class="beat" src="../images/beat.png" alt="" />

            <div className="buttons">
                <button className="explore-button">Explore</button>
                <button className="enlighten-button">Enlighten</button>
            </div>
        </div>
    );
}

export default Hero;