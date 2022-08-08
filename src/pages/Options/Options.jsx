import React from 'react';
import { useEffect } from 'react';
// import env from '../../../utils/env';
import { TOKEN } from '../../constants';

const Options = () => {

  useEffect(()=>{
    console.log(`loaded the content loaded`)
    const url = window.location.search
    const urlParams = new URLSearchParams(url)
    const token = urlParams.get('token')
  
    let pToken = JSON.parse(token)
  
    localStorage.setItem(TOKEN.ACCESS_TOKEN, pToken.at)
    localStorage.setItem(TOKEN.REFRESH_TOKEN, pToken.rt)

  },[])
console.log(process.env.NAME)
/*   console.log(env.SECRET_CODE)
  console.log(env.NODE_ENV)
  console.log(env.ACCESS_TOKEN) */
  

  return (
    <div>Please wait...</div>
  )
}

export default Options;
