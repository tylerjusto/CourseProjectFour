import React from 'react';
import imagetanningbed from './Images/TanningBed.png';
import imagetanninggirl from './Images/TanningGirl.png';
import imagespraytanning from './Images/TanningSpray.png';

function HoursOfOperation(){
    return (
        <div>
            <div class="box">
                <section class="section">
                    <div class="container">
                        <h1 class="title">Hours of Operation</h1>
                        <h2 class="subtitle">Summer Hours:</h2>
                        <p> Monday-Friday: 9am - 7pm</p>
                        <p>Saturday: 11am - 4pm</p>
                        <p>Sunday: 1pm - 6pm</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

function WelcomeIntro(){
    return(
        <div>
            <br/>
            <section class="section">
                <div class="container">
                    <h1 class="title">Tanning</h1>
                    <p>Beds + Bulbs = Results</p>
                    <p>Simplicity. No Fees. No Contracts.</p>
                </div>
            </section>
        </div>
    )
}

function MembershipCosts(){
    return (
        <div>
            <br/>
            <section class="section">
                <div class="container">
                    <h2 class="subtitle">Money Back Guarantee</h2>
                    <p>Unlimited Prices</p>
                    <p>Month Unlimited = 31 days</p>
                    <p>Level & Two $30.99</p>
                    <p>All Levels $49.99</p>
                </div>
            </section>
        </div>
    )
}

export default function Home(){
    return (
        <div>
            <br/>
            <section class="section">
                <div class="container">
                    <HoursOfOperation/>
                    <WelcomeIntro/>
                    <MembershipCosts/>
                    <img src={imagetanningbed} alt="Tanning Bed"/>
                    <img src={imagetanninggirl} alt="Tanning Member"/>
                    <img src={imagespraytanning} alt="Tanning Spray"/>
                </div>
            </section>
        </div>
    );
}
