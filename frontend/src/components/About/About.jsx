import React from 'react'
import './About.css'
import faq1 from '../../assets/cust3.jpg'
import faq2 from '../../assets/cust2.jpg'
import inv1 from '../../assets/inv1.jpg';
import inv2 from '../../assets/inv2.jpg';
import inv3 from '../../assets/inv3.jpg';
import inv4 from '../../assets/inv4.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
//    style={{bottom:'10px',left:'50px'}}
   <div>
   <div className='container-fluid bgimg mb-1'>
    <div className='fw-bold position-absolute h1 text-center centered-text text-shadow' >About ByteBuddy</div>   
   </div>

   <div className="container-fluid px-5">
    <div className='row'>
        <div className="col-12 col-md-7 col-lg-7 ">
            <p className='h1 py-5'>From Your Favorite Meals to Instant Convenience.</p>
            <p>At Byte Buddy, we are dedicated to making food delivery faster, easier, and more convenient for the people of Chennai. What began as a platform to deliver your favorite meals has quickly evolved into a go-to service for all your daily cravings and essentials.<br/><br/>
            Our mission is simple: to provide seamless, quick access to delicious meals and more—whether it's a comforting dinner or a quick snack on the go. Powered by cutting-edge technology and an unwavering commitment to excellence, Byte Buddy ensures that every order is delivered with speed, reliability, and care.<br/><br/>
            With a growing network of partners, efficient delivery riders, and a team passionate about service, Byte Buddy is here to make your life more convenient, one meal at a time.</p>
        </div>
        <div className="col-12 col-md-5 col-lg-5 ">
            <img className='img-fluid' src={faq1} alt="aboutus"  />
        </div>
    </div>
   </div>

   <div className="container-fluid px-5">
    <div className="row">
        <div className="col-12 col-md-5 col-lg-5">
        <img className='img-fluid rounded-5' src={faq2} alt="aboutus"  />
        </div>
        <div className="col-12 col-md-7 col-lg-7 my-5 ">            
            <p className='h2 py-3'>Our riders are our heroes</p>
            <p>At Byte Buddy, our riders are the backbone of our service. We believe in providing them with exciting opportunities and empowering them with the flexibility to work on their terms. Whether it's delivering a warm meal or rushing essentials, our riders play a crucial role in ensuring that every order is delivered with care and on time.<br/><br/>
            Join our team and become a hero in the Byte Buddy journey. Whether you're looking for full-time or part-time opportunities, we offer the freedom and flexibility to work when it suits you. Learn more about their journey and see how you can become a part of it today!</p>            
        </div>
    </div>
   </div>

        <p className='text-center h1 my-3 text-shadow'>ByteBuddy's Owners</p>
   <div className="container-fluid d-flex justify-content-center px-5">

    <div className="row row-cols row-cols-1 row-cols-md-2 row-cols-lg-4 w-100">

        <div className="col mb-3 text-center p-5">
            <div class="card h-100 w-100 border-0 ">
            <img src={inv2} class="img-fluid" alt="..."/>
            <div class="card-body">
                <h5 class="card-title fw-bold">Ms. Revathi</h5>
                <p class="card-text">Lorem ipsum dolor sit amet.</p>
                
            </div>
            </div>
        </div>
        <div className="col mb-3 text-center p-5  ">
            <div class="card h-100 w-100 border-0">
            <img src={inv4} class="img-fluid" alt="..."/>
            <div class="card-body">
            <h5 class="card-title fw-bold">Mr. Parthiban</h5>
                <p class="card-text">Lorem ipsum dolor sit amet.</p>
                
            </div>
            </div>
        </div>
        <div className="col mb-3 text-center p-5 ">
            <div class="card h-100 w-100 border-0">
            <img src={inv1} class="img-fluid" alt="..."/>
            <div class="card-body">
            <h5 class="card-title fw-bold">Mr. Pandiaraj</h5>
                <p class="card-text">Lorem ipsum dolor sit amet.</p>
                
            </div>
            </div>
        </div>
        <div className="colb-3 text-center p-5 ">
            <div class="card h-100 w-100 border-0">
            <img src={inv3} class="img-fluid" alt="..."/>
            <div class="card-body">
                <h5 class="card-title fw-bold">Mr . Balamurugan</h5>
                <p class="card-text">Lorem ipsum dolor sit amet.</p>
                
            </div>
            </div>
        </div>

    </div>

   </div>


   

   </div>

  )
}

export default About
