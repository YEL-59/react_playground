import React from 'react'

const Country = ({country}) => {
    //console.log(props.country)
  return (
    <>
 
  


    <a href="#" class="block border p-6 mb-5">
  <img
    alt="Art"
    src={country.flags.png}
    class="h-64 w-full  sm:h-80 lg:h-96"
  />

  <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
{  country.name.common}
  </h3>

  
</a>


    </>
  )
}

export default Country