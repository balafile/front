import React, { useState } from 'react'


function Contactus() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields before submitting!');
      return;
    }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(formData.email)) {
      alert('Please enter a valid email address!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/contact/submit-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.status === 200) {
        alert('Feedback submitted successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset the form
      } else {
        alert('Error submitting feedback!');
      }
    } catch (error) {
      console.log(error);
      alert('Error submitting feedback!');
    }
  };




  return (
    
    
    <div className='container w-lg-50 w-100 py-2 '>
      <section className='text-center'>
        <h1 className='pb-3 text-shadow'>Contact Us</h1>
        <p className='pb-3'>We consider all the drivers of change gives you the components <br /> you need to change to create a truly happens.</p>
      </section>

      <div className='border shadow-lg p-5 rounded-3'>
      <section className='row'>
      <div className="col-lg-6 col-12">
      <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Name</label>
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" name='name' value={formData.name} onChange={handleChange} required/>
      </div>
      </div>

      <div className="col-lg-6 col-12">
      <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter email address" name='email' value={formData.email} onChange={handleChange} required/>
      </div>
      </div>
      </section>
      <section className='row row-cols-1'>
      <div className="col-12">
      <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Subject</label>
      <input type="text" class="form-control  " id="exampleFormControlInput1" placeholder="Write a subject" name='subject' value={formData.subject} onChange={handleChange} required/>
      </div>
      </div>

      <div className="col-12">

      <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Message</label>
      <textarea className="form-control " id="exampleFormControlTextarea1" rows={4} placeholder="Write your feeedback" name='message' value={formData.message} onChange={handleChange} required></textarea>
      </div>
      </div>

      <div className="col-12 d-flex justify-content-center">
      <button type="button" className="btn btn-outline-primary rounded-5 py-2 shadow my-3" onClick={handleSubmit}>Submit feedback</button>
      </div>
      </section>
      </div>
      
      <section className='row row-cols-md-3 row-cols-1 my-4 p-3 text-center'>
        <div className="col pb-3">
          <h1 className='text-decoration-underline'>Call Us</h1>
          <h6 className='text-success'>+91 1234567890</h6>
        </div>
        <div className="col pb-3">
          <h1 className='text-decoration-underline'>Hours</h1>
          <h6>24 hrs available in customer servise </h6>
        </div>
        <div className="col">
          <h1 className='text-decoration-underline'>Our Website</h1>
          <h6>www.bytebuddy.com</h6>
        </div>


      </section>

    </div>
    
  )
}

export default Contactus
