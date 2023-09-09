import React from 'react'

export default function Contact() {
    return<>
    
    <div id='conatct' className="ontainer-fluide d-flex align-items-center" >
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-12">
                    <h2 className='text-center' >
                    CONATCT SECTION
                    </h2>
                </div>
                <div className="col-md-12 position-relative d-flex align-align-items-center justify-content-center ">
                        <div className='star position-relative me-auto d-flex align-align-items-center m-auto justify-content-center'>
                                <div className="lineLeft"></div>
                                <i class="fa-solid fa-star"></i>
                                <div className="lineRight"></div>
                        </div> 
                    </div>
                <div className="col-md-12 py-2 text-center ">
                    <div className="form w-50 m-auto">
                    <input className='form-control w-100' type="text" placeholder='username' />
                    <input className='form-control w-100 '  type="number" placeholder='userage' />
                    <input  className='form-control w-100' type="email" placeholder='useremail' />
                    <input className='form-control w-100' type="password" placeholder='userpassword' />
                <div className="button me-auto py-2">
                <button className='me-auto' >send message</button>
                </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </> 
}
