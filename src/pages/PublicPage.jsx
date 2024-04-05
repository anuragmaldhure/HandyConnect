import React from 'react';

function Header() {
  return (
    <header>
      {/* Navigation bar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src='/assets/Handy_Connect.png' style={{ width: '170px', height: '70px' }} alt="Handy Connect" />

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll" style={{ marginRight: '20px', marginLeft: '100px' }}>
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Link
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>

            <div class="form-floating" style={{ marginRight: '20px', marginLeft: '20px' }}>
              <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                <option selected>Not selected</option>
                <option value="1">Dattatraya Nagar</option>
                <option value="2">Mhalgi Nagar</option>
                <option value="3">Manewada</option>
                <option value="3">Hudkeshwar</option>
              </select>
              <label for="floatingSelect">Choose your location</label>
            </div>

            <form className="d-flex me-2" role="search">
              <input className="form-control me-2" type="search" placeholder="Search for a service" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div style={{ marginRight: '20px', marginLeft: '100px' }}>
              <button type="button" className="btn btn-outline-primary" style={{ marginLeft: '10px' }}>Login</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}


function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container-fluid" style={{ backgroundColor: 'black', color: 'white', padding: '20px 0' }}>
        <div className="container">
          <h1>Get vocal for best local service in Nagpur</h1>
          <h4>छोटे कामों का <strong>बड़ा</strong> विश्वास </h4>
          <p>Get trusted professionals for home and personal services at your doorstep</p>
          {/* <button className="btn btn-primary">Book Now</button> */}
        </div>


      </div>
    </section>
  );
}


function ServicesSection() {
  return (
    <section className="services-section">
      <div className="container">
        <br />
        <h2>Our Services</h2>
        <br />
        <div className="row row-cols-1 row-cols-md-3 g-4">

          <div className="col d-flex justify-content-center align-items-center">
            <div className="card text-center">
              <img src="/assets/services_images/plumbing.png" className="card-img-top mx-auto" alt="Plumbing" style={{ width: '100px', height: '100px', padding: '10px' }} />
              <div className="card-body">
                <h5 className="card-title">Plumbing</h5>
                <p className="card-text">Professional plumbing services for all your needs, ensuring reliable solutions for every issue. From installations to repairs, trust us for efficient and effective plumbing solutions.</p>
                <a href="#" className="btn btn-primary">Book Now</a>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Available at your location</small>
              </div>
            </div>
          </div>

          <div className="col d-flex justify-content-center align-items-center">
            <div className="card text-center">
              <img src="/assets/services_images/water_tank_cleaning.png" className="card-img-top mx-auto" alt="Water tank cleaning" style={{ width: '100px', height: '100px', padding: '10px' }} />
              <div className="card-body">
                <h5 className="card-title">Water tank cleaning</h5>
                <p className="card-text">Ensure clean and hygienic water with our professional water tank cleaning services. We remove dirt, sediments, and contaminants to maintain water quality.</p>
                <a href="#" className="btn btn-primary">Book Now</a>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Not available at your location now... Try after sometime</small>
              </div>
            </div>
          </div>


          <div className="col d-flex justify-content-center align-items-center">
            <div className="card text-center">
              <div className="card-body">
                <img src="/assets/services_images/electicwork.png" className="card-img-top mx-auto" alt="Electrical fitting" style={{ width: '100px', height: '100px', padding: '10px' }} />
                <h5 className="card-title">Electrical fitting</h5>
                <p className="card-text">From wiring installations to electrical repairs, trust our skilled electricians for safe and reliable solutions to meet your electrical needs. Be it small or larger work, get it done!</p>
                <a href="#" className="btn btn-primary">Book Now</a>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Available at your location</small>
              </div>
            </div>
          </div>



          <div className="col">
            <div className="card h-100 text-center">
              <img src="/assets/services_images/gardening.png" className="card-img-top mx-auto" alt="Gardening" style={{ width: '100px', height: '100px', padding: '10px' }} />
              <div className="card-body">
                <h5 className="card-title">Gardening</h5>
                <p className="card-text">Transform your outdoor space into a lush paradise with our gardening services. From landscaping to plant care, we create beautiful and thriving gardens.</p>
                <a href="#" className="btn btn-primary">Book Now</a>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Available at your location</small>
              </div>
            </div>
          </div>


          <div className="col">
            <div className="card h-100 text-center">
              <img src="/assets/services_images/carpentry.png" className="card-img-top mx-auto" alt="Carpentry" style={{ width: '100px', height: '100px', padding: '10px' }} />
              <div className="card-body">
                <h5 className="card-title">Carpentry</h5>
                <p className="card-text">Experience expert craftsmanship with our carpentry services. From furniture repairs to custom woodwork, our skilled carpenters deliver quality solutions.</p>
                <a href="#" className="btn btn-primary">Book Now</a>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Available at your location</small>
              </div>
            </div>
          </div>


          <div className="col">
            <div className="card h-100 text-center">
              <img src="/assets/services_images/painting.png" className="card-img-top mx-auto" alt="Painting" style={{ width: '100px', height: '100px', padding: '10px' }} />
              <div className="card-body">
                <h5 className="card-title">Painting</h5>
                <p className="card-text">Enhance the beauty of your space with our professional painting services. Whether it's interior or exterior painting, we provide flawless finishes and vibrant colors.</p>
                <a href="#" className="btn btn-primary">Book Now</a>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Available at your location</small>
              </div>
            </div>
          </div>


          <div className="col">
            <div className="card h-100 text-center">
              <img src="/assets/services_images/welding.png" className="card-img-top mx-auto" alt="Welding" style={{ width: '100px', height: '100px', padding: '10px' }} />
              <div className="card-body">
                <h5 className="card-title">Welding</h5>
                <p className="card-text">Trust our experienced welders for all your welding needs. From repairs to fabrications, we deliver precise and durable welding solutions for various applications.</p>
                <a href="#" className="btn btn-primary">Book Now</a>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Available at your location</small>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer style={{ position: 'fixed', bottom: 0, height:'40px' , width: '100%', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
      <div className="container-fluid" style={{ backgroundColor: 'black', color: 'white', padding: '10px 0' }}>
        <p><i>&copy; 2024 Handy Connect. All rights reserved.</i></p>
      </div>
    </footer>
  );
}


function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}

export default App;
