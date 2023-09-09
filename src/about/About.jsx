import React from 'react'

export default function About() {
    return<>
    
    <div id='about' className="container-fluide d-flex align-items-center py-5">
        <div className="container">
            <div className="row text-white">
                <div className="col-md-12">
                    <h2 className='text-center text-white'>
                    ABOUT COMPONENT
                    </h2>
                </div>
                <div className="col-md-12 position-relative d-flex align-align-items-center justify-content-center py-5">
                    <div className='star position-relative me-auto d-flex align-align-items-center m-auto justify-content-center'>
                            <div className="lineLeft"></div>
                            <i class="fa-solid fa-star"></i>
                            <div className="lineRight"></div>
                    </div> 
                </div>
                <div className="col-md-6 py-5">
                    <p className=' fw-bolder'>
                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                    </p>
                </div>
                <div className="col-md-6 py-5">
                    <p className=' fw-bolder '>
                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                    </p>
                </div>
            </div>
        </div>
    </div>

    </> 
}
