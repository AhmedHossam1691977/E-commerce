import React from 'react'
import x from '../img/avataaars (1).svg'

export default function Home() {
    return <>
        <div id='home' className="container-fleid d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-12 w-100 ">
                        <div className="img w-100 m-aout d-flex align-items-center justify-content-center py-3">
                            <img src={x} alt="" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <h2 className='text-uppercase text-center text-white'>
                        start Framework
                        </h2>
                    </div>
                    <div className="col-md-12 position-relative d-flex align-align-items-center justify-content-center ">
                        <div className='star position-relative me-auto d-flex align-align-items-center m-auto justify-content-center'>
                                <div className="lineLeft"></div>
                                <i class="fa-solid fa-star"></i>
                                <div className="lineRight"></div>
                        </div> 
                    </div>
                    <div className="col-md-12">
                        <p className='text-white text-center py-1'>
                        Graphic Artist - Web Designer - Illustrator
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
}
