import React from 'react';
import logo from './mega travel logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="" alt="logo" height="200px"/>
    
      </header>
      <section>
        <ol class="breadcrumb">
        </ol>
        <nav>
          <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="aboutus.html">About Us</a></li>
            <li><a href="contactform.html">Contact Agent</a></li>
          </ul>
        </nav>
      </section>
      <div id="root">
      
      </div>

      <section class="intro">
        <h1>Travel Packages</h1>
            <p>We are specialized with International Travels and Tours. Our expertized and experience can save you 100's of dollar in your pocket. Beside the money you can also save your valuable time at the time of transit or tour.  You decide your budget and the time from your comfort zone. We will make it happen for you for an exceptional memory.

              Mega Travels is committed for an excellent service and support for all of its past, present and future customers. We are here today only for you. We remind ourself everyday and every moment with a sincere gratitude.</p>
      </section>
      <section class="product-cards">
        <div class="product-card">
          <img src="./images/maldives.PNG" alt="maldives" />
          <h2><a href="">Maldives Resort</a></h2>
          <p class="original-price">$1800.99</p>
          <p class="current-price">Price you pay <span>$999.99</span></p>
          <p class="saving">Your saving $801</p>
        </div>
    
        <div class="product-card">
          <img src="./images/mexico.PNG" alt="mexico" />
          <h2><a href="">Mexico Resort (All inclusive!)</a></h2>
          <p class="original-price">$2999.99</p>
          <p class="current-price">Price you pay <span>$2199.99</span></p>
          <p class="saving">Your saving $800</p>
        </div>
    
        <div class="product-card">
          <img src="./images/newzealand.PNG" alt="new zealand" />
          <h2><a href="">New Zealand Trek</a></h2>
          <p class="original-price">$2499.00</p>
          <p class="current-price">Price you pay <span>$2100.00</span></p>
          <p class="saving">Your saving $399</p>
        </div>
    
        <div class="product-card">
          <img src="./images/venice.PNG" alt="venice" />
          <h2><a href="">Venice Italy</a></h2>
          <p class="original-price">$4100.00</p>
          <p class="current-price">Price you pay <span>$3699.00</span></p>
          <p class="saving">Your saving $400</p>
        </div>
      </section>

      <footer>
        <p>Copyright Protected. All rights reserved.</p><br/>
        <p>MEGA TRAVELS</p>
        <p>mega@travels.com</p>
      </footer>
    </div>
  );
}

export default App;
