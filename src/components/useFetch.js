import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null) 

    const dispatch = useDispatch();
    const { filterUrl } =
      bindActionCreators(actionCreators, dispatch);

      const filter = useSelector((state) => state.filter);
      console.log("filter flag in useFectch is "+filter);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        if(filter === "on"){
          setData(data.filter((aliveones) => aliveones.alive === true))
        }else{
          setData(data);
        }
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [url, filter]);

  return { data, isPending, error }
};

export default useFetch;