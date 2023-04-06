import React from 'react'
import{ Link} from 'react-router-dom'


export default function Home() {
  return (
  <React.Fragment>
    <div class="navbar">

<img src="..\assets\logo\LOGO.PNG" alt="logo" class="homeimg" />
       <button class="navbar-btn">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <div class="navbar-item hide">

            <ul>
             <li><Link to ="/account"><img src="..\assets\logo\user.png"  class="user" title="Account" /></Link><br /></li>
             <li><Link to ="/">Home</Link></li>
             <li><Link to ="/about">About us</Link></li>
             <li><Link to ="/">Account</Link></li> 
            </ul>
            </div>
    </div>
   
     <form autocomplete="off"><div><input type="text"  id="input" placeholder="search here..." /><button class="btn">search</button>
</div>
<ul class="list"></ul>
</form>
<div class="pro">
   <a href="p1.html"> <img src="..\assets\logo\p1.jpg" alt=""  /><p class="det"><b> <h1>Redmi note 8 pro backcover</h1></b></p>
                            
        <h2 > 30% off </h2> <h1>₹226</h1><p><h4>M.R.P <del>₹300</del></h4></p></a>
        <a href="p2.html"> <img src="..\assets\logo\p2.jpg" alt=""  /><p class="det"><b> <h1>apple 14 pro max + backcover</h1></b></p>
                            
        <h2 > 40% off </h2> <h1>₹449</h1><p><h4>M.R.P <del>₹999</del></h4></p></a> 
       <a href="p3.html"> <img src="..\assets\logo\p3.jpg" alt="" class="" /><p class="det"><b> <h1>Realme x3 superzoom backcover</h1></b></p>
                            
        <h2 > 70% off </h2> <h1>₹299</h1><p><h4>M.R.P <del>₹889</del></h4></p></a>
        <a href="p4.html"> <img src="..\assets\logo\p4.jpg" alt="" class="" /><p class="det"><b> <h1>Realme narzo 20 pro backcover</h1></b></p>
                            
        <h2 > 66% off </h2> <h1>₹168</h1><p><h4>M.R.P <del>₹499</del></h4></p></a>
        <a href="t1.html"> <img src="..\assets\logo\t1.jpg" alt="" class="" /><p class="det"><b> <h1>Redmi note 8 pro temperglass</h1></b></p>
                            
        <h2 > 20% off </h2> <h1>₹200</h1><p><h4>M.R.P <del>₹399</del></h4></p></a>
        <a href="t2.html"> <img src="..\assets\logo\t2.jpg" alt="" class="" /><p class="det"><b> <h1>Tempered Glass iPhone 14Pro Max </h1></b></p>
                            
        <h2 > 20% off </h2> <h1>₹149</h1><p><h4>M.R.P <del>₹449</del></h4></p></a>
        <a href="t3.html"> <img src="..\assets\logo\t3.jpg" alt="" class="" /><p class="det"><b> <h1>Realme x3 superzoom temperglass</h1></b></p>
                            
        <h2 > 30% off </h2> <h1>₹150</h1><p><h4>M.R.P <del>₹399</del></h4></p></a>
        <a href="t4.html"> <img src="..\assets\logo\t4.jpg" alt="" class="" /><p class="det"><b> <h1>Realme narzo 20 pro temperglass</h1></b></p>
                            
        <h2 > 50% off </h2> <h1>₹100</h1><p><h4>M.R.P <del>₹299</del></h4></p></a>
</div>

  </React.Fragment>
  )
}
