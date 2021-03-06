import React from 'react'


export default function Footer() {
  function Sub123() {
    alert("Thank You")
  }
  return (
    <div >

      <footer position="fixed">
        <div className="row">
          <div className="col-4">
           
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="/view-Tour/I" className="nav-link p-0 text-muted">International</a></li>
              <li className="nav-item mb-2"><a href="/view-Tour/D" className="nav-link p-0 text-muted">Domestic</a></li>
              <li className="nav-item mb-2"><a href="/aboutUs" className="nav-link p-0 text-muted">About Us</a></li>
              <li className="nav-item mb-2"><a href="/contactUs" className="nav-link p-0 text-muted">Contact Us</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted"></a></li>
            </ul>
          </div>

          
          <div className="col-5 offset-1">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Get Offers on Trips from us.</p>
              <div className="d-flex w-100 gap-2">

                <input id="newsletter1" type="text" className="form-control" placeholder="Email address..." /><br></br>
                <button onClick={Sub123} className="btn btn-dark" type="submit">Subscribe  </button>
              </div>
            </form>
            
          </div>
          
        </div>
        <p>© 2021 AGENTS, Inc. All rights reserved.</p>

        
      </footer>
    </div>
  )
}
