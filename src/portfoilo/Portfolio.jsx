/* eslint-disable no-whitespace-before-property */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react'
import x from '../img/poert1.png'
import y from '../img/port2.png'
import z from '../img/port3.png'
import { click } from '@testing-library/user-event/dist/click'
import $ from 'jquery'



export default function Portfolio() {

    let [imges , showimges] = useState()

    useEffect(function(){

        
        

        
        
        

        $('.img').click((e)=>{
            $('#imgContainer').css('display','flex') 
            $('#imgItem').css('background-image',`url(${e.target.src})`)
        })



        $('#imgContainer').click(()=>{
            $('#imgContainer').css('display','none') 
        })

    },[])


    return<>
    <div id='portfolio' className="container-fliude d-flex align-items-center my-5">
        <div className="container ">
            <div className="row align-items-center text-center">
                <div className="col-md-12 py-5">
                    <h2>
                    portfolio component
                    </h2>
                    <div className=" position-relative d-flex align-align-items-center justify-content-center">
                    <div className='star position-relative me-auto d-flex align-align-items-center m-auto justify-content-center'>
                            <div className="lineLeft"></div>
                            <i class="fa-solid fa-star"></i>
                            <div className="lineRight"></div>
                    </div> 
                </div> 
                </div>
                

                    <div className="col-md-4 py-3 col-sm-6">
                        <div className="img position-relative">
                            <img className='w-100' src={x} alt="" />
                            <div className="back ">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 py-3 col-sm-6">
                        <div className="img position-relative">
                            <img className='w-100' src={y} alt="" />
                            <div className="back ">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 py-3 col-sm-6">
                        <div className="img position-relative">
                            <img className='w-100' src={z} alt="" />
                            <div className="back ">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 py-3 col-sm-6">
                        <div className="img position-relative">
                            <img className='w-100' src={x} alt="" />
                            <div className="back ">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 py-3 col-sm-6">
                        <div className="img position-relative">
                            <img className='w-100' src={y} alt="" />
                            <div className="back">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 py-3 col-sm-6">
                        <div className="img position-relative">
                            <img className='w-100' src={z} alt="" />
                            <div className="back ">
                            <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    
            </div>
        </div>
        <div id="imgContainer">

        <div class="imgItem " id="imgItem" >

        </div>
    </div>
    </div>
    

    </> 
}
