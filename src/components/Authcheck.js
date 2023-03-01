import React, { useEffect }  from 'react'
import { useNavigate } from 'react-router-dom'

const Authcheck = () => {
    let navigate = useNavigate()

    useEffect(() => {
      if (localStorage.getItem('token')){
      }
      else{
        navigate('/logincustomer')
      }

    },)
  return (
    <>
    </>
  )
}

export default Authcheck