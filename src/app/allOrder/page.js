

import "./order.css";
import MainHeader from "../component/order/MainHeader";
import SearchCustomer from "../component/order/SearchCustomer";
import AllCustomer from "../component/order/AllCustomer";

const allOrder = () => {
   
  return (
    <>
      <MainHeader />
       <SearchCustomer />
       <AllCustomer
         tdata={ [
            {
                "id": "1324",
                "city": "Lahore",
                "status":"new",
                "creatdate":"06/02/2023",
                "PickupDate" :"07/02/2023",
                "Customer":"03067880329",
                "cname":"Umair Akram",
                "cphone":"03067880329",
                "sname":"Ali Ahmed",
                "saddress":"G84M+228, Block E 2 Gulberg III, Lahore, Punjab, Pakistan",
                "caddress":"Hassan abad gate no 1 stret no 4A khanewal road Multan",
                "PCA":"500",
                "driver":"Usman"
            },
            {
              "id": "1534",
              "city": "Lahore",
              "status":"new",
              "creatdate":"06/02/2023",
              "PickupDate" :"07/02/2023",
              "Customer":"03067880329",
              "cname":"Umair Akram",
              "cphone":"03067880329",
              "sname":"Ali Ahmed",
              "saddress":"G84M+228, Block E 2 Gulberg III, Lahore, Punjab, Pakistan",
              "caddress":"Hassan abad gate no 1 stret no 4A khanewal road Multan",
              "PCA":"500",
              "driver":"Usman"
          },
          {
            "id": "2635",
            "city": "Lahore",
            "status":"new",
            "creatdate":"06/02/2023",
            "PickupDate" :"07/02/2023",
            "Customer":"03067880329",
            "cname":"Umair Akram",
            "cphone":"03067880329",
            "sname":"Ali Ahmed",
            "saddress":"G84M+228, Block E 2 Gulberg III, Lahore, Punjab, Pakistan",
            "caddress":"Hassan abad gate no 1 stret no 4A khanewal road Multan",
            "PCA":"500",
            "driver":"Usman"
        },
        {
          "id": "1332",
          "city": "Lahore",
          "status":"new",
          "creatdate":"06/02/2023",
          "PickupDate" :"07/02/2023",
          "Customer":"03067880329",
          "cname":"Umair Akram",
          "cphone":"03067880329",
          "sname":"Ali Ahmed",
          "saddress":"G84M+228, Block E 2 Gulberg III, Lahore, Punjab, Pakistan",
          "caddress":"Hassan abad gate no 1 stret no 4A khanewal road Multan",
          "PCA":"500",
          "driver":"Usman"
      },
      {
        "id": "67623",
        "city": "Lahore",
        "status":"new",
        "creatdate":"06/02/2023",
        "PickupDate" :"07/02/2023",
        "Customer":"03067880329",
        "cname":"Umair Akram",
        "cphone":"03067880329",
        "sname":"Ali Ahmed",
        "saddress":"G84M+228, Block E 2 Gulberg III, Lahore, Punjab, Pakistan",
        "caddress":"Hassan abad gate no 1 stret no 4A khanewal road Multan",
        "PCA":"500",
        "driver":"Usman"
    },
 
        ]}
       />

     
    </>
  );
};

export default allOrder;
