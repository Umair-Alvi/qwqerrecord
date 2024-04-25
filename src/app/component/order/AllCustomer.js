import React from 'react'
import { RiFileEditLine } from "react-icons/ri";
import { IoInformationCircleOutline } from "react-icons/io5";
import { TbBrowserX } from "react-icons/tb";
import { IoLocationSharp } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';

const AllCustomer = ({tdata}) => {
    
  return (
    <>
        <div className="customer w-[1440] lg:w-[1166] h-[692px;]">
        <div className="flex p-7">
            <div className="basis-1/2 text-xl font-bold">
                All Customer
            </div>
            <div className="basis-1/2 text-right  ">
            <Image
                src="/filter.png"
                width={16}
                height={16}
                className="rounded-full relative left-[74%] top-5 "
              />
                <label htmlFor="status" className="text-xl pr-6 font-semibold">Status Filter</label> <br />
                <select >
                        <option>Dispatched</option>
                        <option>Reattempt</option>
                        <option>Deported</option>
                    </select>

            </div>
        </div>
        <table className="customer-table">
                <thead>
                    <tr className="text-[14px]">
                        <th className="w-[92px]"> ID</th>
                        <th className="w-[92px]">City/Zone</th>
                        <th className="w-[92px]">Status</th>
                        <th className="w-[120px]">Created Date</th>
                        <th className="w-[120px]">Pickup Date</th>
                        <th className="w-[120px] text-left">Customer</th>
                        <th className="w-[150px] text-left">From</th>
                        <th className="w-[150px] text-left">To</th>
                        <th className="w-[150px] text-left">prod Coll Amt</th>
                        <th className="w-[150px] text-left">Driver Name</th>
                        <th className="w-[150px] text-left"> </th>
                        
                    </tr>
                </thead>

                <tbody  className="p-7">

                        {
                            tdata.map((item, index) => (
                                <tr key={index} >
                                    <td className="align-top text-center p-2  text-black text-[14px]">{item.id}</td>
                                    <td className="align-top text-center p-2 text-black text-[14px]">{item.city}</td>
                                    <td className="align-top text-center p-2 text-black text-[14px]">{item.status}</td>
                                    <td className="align-top text-center p-2 text-black text-[14px]">{item.creatdate}</td>
                                    <td className="align-top text-center p-2 text-black text-[14px]">0{item.PickupDate}</td>
                                    <td className="align-top p-2">
                                      <span className=" text-black text-[14px]">{item.cname}</span> <br />
                                      <span className="text-[12px]">{item.cphone}</span>
                                    </td>
                                    <td className="align-top p-2">
                                      <span className=" text-black text-[14px]">{item.sname}</span> <br />
                                      <span className="text-[12px]">{item.saddress}</span>
                                    </td>
                                    <td className="align-top p-2">
                                      <span className=" text-black text-[14px]">{item.cname}</span><br />
                                      <span className="text-[12px]">{item.caddress}</span>
                                    </td>
                                    <td className="align-top p-2 text-black text-[14px]">{item.PCA}</td>
                                    <td className="align-top p-2 text-black text-[14px]">{item.driver}</td>
                                    <td className="align-top p-2 text-black text-[14px] flex justify-evenly">
                                   <Link href="#">
                                   <RiFileEditLine size={"20"}/>
                                   </Link>
                                   <Link href="#">
                                   <IoInformationCircleOutline size={"20"}/>
                                   </Link>
                                   <Link href="#">
                                   <TbBrowserX size={"20"}/>
                                   </Link>
                                   <Link href="#">
                                   <IoLocationSharp color="red" size={"20"} />
                                   </Link>
                                 
                                    
                                    </td>
                        
                                </tr>
                                  ))
                                }
                </tbody>
        </table>
      </div>
    </>
  )
}

export default AllCustomer