import React, { useContext, useEffect } from 'react'
import providerContext from '../context/Providers/providersContext'
import Technician from './Technician'
import Authcheck from './Authcheck';

const PlumbingService = () => {
  const context = useContext(providerContext);
  const { providers, getpaintingprovider } = context;
  useEffect(() => {
    getpaintingprovider();
  }, [1])

  return (
    <>
<Authcheck />
      <div className="container mt-5">
        <div className="row">
          
        {providers && providers.map((item) => {
           return <Technician item={item} key={item._id}/>
})}
        </div>
      </div>
    </>
  )
}

export default PlumbingService