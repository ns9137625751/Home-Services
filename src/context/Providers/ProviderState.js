import { useState } from "react";
import providerContext from "./providersContext";

const ProviderState = (props) => {

  const host = "http://localhost:5000"
  const providerInitial = ["Nishant"]
  const [providers, setProviders] = useState(providerInitial)

  const getplumbingprovider = async () => {
    const response = await fetch(`${host}/api/provider/getplumbingprovider`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json()
    setProviders(json)
  }

  const getcarpenterprovider = async () => {
    const response = await fetch(`${host}/api/provider/getcarpenterprovider`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json()
    setProviders(json)
  }

  const getelectricianprovider = async () => {
    const response = await fetch(`${host}/api/provider/getelectricianprovider`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json()
    setProviders(json)
  }

  const getcleaningprovider = async () => {
    const response = await fetch(`${host}/api/provider/getcleaningprovider`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json()
    setProviders(json)
  }

  const gethousekeepingprovider = async () => {
    const response = await fetch(`${host}/api/provider/gethousekeepingprovider`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json()
    setProviders(json)
  }

  const getpaintingprovider = async () => {
    const response = await fetch(`${host}/api/provider/getpaintingprovider`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json()
    setProviders(json)
  }

  const getallprovider = async () => {
    const response = await fetch(`${host}/api/admin/getallprovider`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json()
    setProviders(json)
  }

  // delete a provider
  const deleteprovider = async (id) => {
    const response = await fetch(`${host}/api/admin/deleteprovider/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = response.json();
    const newProvider = providers.filter((providers) => { return providers._id !== id })
    setProviders(newProvider)
  }

  return (
    <providerContext.Provider value={{ providers, getplumbingprovider, getcarpenterprovider, getelectricianprovider, getcleaningprovider, gethousekeepingprovider, getpaintingprovider, getallprovider, deleteprovider }}>
      {props.children}
    </providerContext.Provider>
  )
}
export default ProviderState;