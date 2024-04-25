"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
    const [isactive,setisactive]=useState("active")
    return (
      <>
      
         <div className="main-nav flex ">
          <div className="left-nav flex">
            
            <Image
                src="/LOGO.png"
                width={59}
                height={58}
                className="rounded"
              />
            
            <div className="nav-menu ">
              <div className="flex items-center  ">
                <Link href="#">
                    <div className="flex pl-10">
                    
                        <span>Dashboards</span>
                        <span>
                        <Image src="/Polygon2.png" width={15.85} height={9.75}  className="rounded-sm m-2"/>
                        </span>
                    </div>
                </Link>

                 <Link href="/allOrder">
                    <div className="I flex pl-10  text-white " >
                    
                        <span>Orders</span>
                        <span>
                        <Image src="/Polygon2.png" width={15.85} height={9.75}  className="rounded-sm m-2"/>
                        </span>
                        
                    </div>
                   
                    <div className={`${isactive}`}></div>
                </Link>

                <Link href="#">
                    <div className="flex pl-10">
                    
                        <span>Cutomers</span>
                        <span>
                        <Image src="/Polygon2.png" width={15.85} height={9.75}  className="rounded-sm m-2"/>
                        </span>
                    </div>
                </Link>

                <Link href="#">
                    <div className="flex pl-10">
                    
                        <span>Partner</span>
                        <span>
                        <Image src="/Polygon2.png" width={15.85} height={9.75}  className="rounded-sm m-2"/>
                        </span>
                    </div>
                </Link>

                <Link href="#">
                    <div className="flex pl-10">
                    
                        <span>Notifications</span>
                        <span>
                        <Image src="/Polygon2.png" width={15.85} height={9.75}  className="rounded-sm m-2"/>
                        </span>
                    </div>
                </Link>

                <Link href="#">
                    <div className="flex pl-10">
                    
                        <span>Reports</span>
                        <span>
                        <Image src="/Polygon2.png" width={15.85} height={9.75}  className="rounded-sm m-2"/>
                        </span>
                    </div>
                </Link>

                <Link href="#">
                    <div className="flex pl-10">
                    
                        <span>Settings</span>
                        <span>
                        <Image src="/Polygon2.png" width={15.85} height={9.75}  className="rounded-sm m-2"/>
                        </span>
                    </div>
                </Link>
              </div>
          </div>
          </div>
         <div className="right-nav pl-48  flex items-center">
            <div >
            <Image
                src="/bell.png"
                width={33.68}
                height={33.68}
                className="rounded-full"
              />
            </div>

            <div className="vertical-line">
            </div>

            <div className="flex items-center">
                <div className="text-white text-xs">
                <div style={{fontSize:"12px" ,width:"100px"}}>Jones Ferdinand</div>
                <div className="text-right " style={{color:"rgba(223, 224, 235, 60%)", fontSize:"11px"}}>Super Admin</div>
                </div>
                <div >
            <Image
                src="/photo.png"
                width={31.12}
                height={31.12}
                className="rounded-full"
              />
            </div>
              
            </div>

         </div>
        </div>
      </>
    );
}

export default Header