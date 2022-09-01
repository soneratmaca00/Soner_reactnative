import React, { useEffect, useState } from "react";
import { token } from "../consts/config";
import { Context } from '../context/Context';

var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };
 
const useFetch = (url) => {
  const {data, setdata} = React.useContext(Context);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");
 
  useEffect(() => {
    fetch(url, requestOptions)
    .then((res) => res.json())
    .then((data) => {
        seterror(data.error)
        setdata(data)
        setloading(false)
    })
  }, [url]);
 
  return { data, loading, error };
};
 
export default useFetch;