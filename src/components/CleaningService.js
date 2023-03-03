import React, { useContext, useEffect } from 'react'
import providerContext from '../context/Providers/providersContext'
import Technician from './Technician'
import Authcheck from './Authcheck';


const PlumbingService = () => {
  const context = useContext(providerContext);
  const { providers, getcleaningprovider } = context;
  useEffect(() => {
    getcleaningprovider();
  }, [1])

  return (
    <>
<Authcheck />
      <div className="container mt-5">
        <div className="row">
          
        {providers && providers.map((item) => {
           return <Technician item={item} key={Math.random()}/>
})}
        </div>
      </div>
    </>
  )
}

export default PlumbingService