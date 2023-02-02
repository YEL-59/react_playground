import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
const Phonebar = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res=>res.json())
    // .then(data=>{})
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phonesLoaded = data.data.data;
        //console.log(phonesLoaded)
        const phoneData = phonesLoaded.map((phone) => {
          const parts = phone.slug.split("-");
          const price = parseInt(parts[1]);
          const singlePhone = {
            name: phone.phone_name,
            price: price,
          };
          return singlePhone;
        });
        console.log(phoneData);
        setPhones(phoneData)
      });
  }, []);
  return <div>
    <BarChart width={500} height={400} data={phones}>
      <Bar dataKey="price" fill="#8884d8" />
      <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
    </BarChart>
  </div>;
};

export default Phonebar;
