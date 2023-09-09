import React from 'react'

export default function Fot() {
return <>

<div className="container-fluid fotter ">
    <div className="container">
        <div className="row">
            <div className="col-md-4  text-center py-5">
                <h3 className="text-uppercase  text-white">location</h3>
                <p className=" text-white">2215 John Daniel Drive</p>
                <p className=" text-white">Clark, MO 65243</p>
            </div>
            <div className="col-md-4  text-center py-5">
                <h3 className="text-uppercase  text-white">AROUND THE WEB</h3>
                <ul className='d-flex align-align-items-center justify-content-center '>
                    <li>
                    <i className="fa-brands fa-facebook"></i>
                    </li>
                    <li>
                    <i className="fa-brands fa-twitter"></i>
                    </li>
                    <li>
                    <i class="fa-brands fa-linkedin"></i>
                    </li>
                    <li>
                    <i className="fa-solid fa-globe"></i>
                    </li>
                </ul>
            </div>
            <div className="col-md-4  text-center py-5">
                <h3 className="text-uppercase  text-white">ABOUT FREELANCER</h3>
                <p className=" text-white">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
    </div>
</div>
<div className="endFooter text-center">
    <p className='text-white'>
    Copyright © Your Website 2021
    </p>
</div>

</>
}
