import React from 'react'

const SearchCustomer = () => {
  return (
    <>
         <div className="search-filter  w-[1440] lg:w-[1166] h-[205.5px]">
            <div className=" flex p-7 ">
                    <div className="basis-1/2 text-xl font-semibold">
                        Search Option
                    </div>

                    <div className="basis-1/2 text-right">
                        <button className="btn btn-clear">Clear</button>
                        <button className="btn btn-search"> Search</button>

                    </div>
            </div>

            <div className="flex pl-7">
                <div>
                    <label htmlFor="city">City</label><br />
                    <select >
                        <option>Karachi</option>
                        <option>Lahore</option>
                    </select>
                    
                </div>

                <div>
                    <label htmlFor="zone">Zone</label><br />
                    <select >
                        <option>Default</option>
                        
                    </select>
                    
                </div>

                <div>
                    <label htmlFor="datefrom">Date From</label> <br />
                    <input type="date"  />
                </div>

                <div>
                    <label htmlFor="dateto">Date To</label> <br />
                    <input type="date"  />
                </div>

                <div>
                    <label htmlFor="orderid">Order Id</label> <br />
                    <input type="text" placeholder="00000708" />
                </div>

                <div>
                    <label htmlFor="cname">Customer Name</label> <br />
                    <input type="text" placeholder="Umair   " />
                </div>

                <div>
                    <label htmlFor="pno">Phone No</label> <br />
                    <input type="number" placeholder="03067880329   " />
                </div>

                <div>
                    <label htmlFor="ctype">Customer Type</label><br />
                    <select >
                        <option>All</option>
                        
                    </select>
                    
                </div>

            </div>

      </div>
    </>
  )
}

export default SearchCustomer