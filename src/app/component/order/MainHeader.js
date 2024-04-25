"use client"
import Image from 'next/image'
import React, { useState } from "react";
import Header from '../header/Header'


const MainHeader = () => {
    const [isactive,setisactive]=useState("active")
  return (
    <>
        <div className="main-header w-[1440] lg:w-[1166] h-[263.5px] bg-[#00411B]">
       <Header />

        <div className="nav-2nd p-4 flex ">
            <div className="text-white text-4xl font-bold pt-12 pl-8 basis-2/5 ">
                Order Detail
            </div>

            <div className="pt-12 flex">
                <div className="search pl-8">
                
                    <input type="text" placeholder="Search" />
                    <Image
                src="/search.png"
                width={23.68}
                height={33.68}
                className="rounded-full relative -top-8 left-1"
              />
                </div>
                <div className="select">
                    <select>
                        <option>status</option>
                        <option>status</option>
                    </select>
                </div>
                <div className="select2">
                <select >
                        <option>Bulk Order</option>
                    </select>
                </div>

                <button className="btn btn-cvs rounded-lg">
                    CVS
                </button>
            </div>
        </div>
        
      </div>
    </>
  )
}

export default MainHeader