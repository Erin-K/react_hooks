import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Axios from "axios";
import "./styles.css";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    // console.log(event.target);
    const { target: { value }} = event;
    setValue(value);
  }
  return { value, onChange };
}

function useFetch(url) {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const callUrl = async () => {
    try {
      const { data } = await Axios.get(url); //const data = data.data == { data }
      setPayload(data);
    } catch {
      setError("ㅠㅠ");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callUrl();
  }, []);

  return { payload, loading, error };
}

export default function HooksUtils() {
  const name = useInput("Erin");
  const { payload, loading, error } = useFetch("https://randomuser.me/api/");
  // console.log(payload, loading, error);
  return (
    <div className="App">
      <h1>User Hooks</h1>
      <br />
      <input {...name} placeholder="whats your name" />
      {/* <input value={name.value} onChange={name.onChange} placeholder="whats your name name" /> */}
      <br /><br />
      {loading && <span> loading your cat </span>}
      {!loading && error && <span>{error}</span>}
      {!loading && payload && (
        <img
          src={payload.results[0].picture.medium}
          width="150"
          alt={payload.results[0].name}
        />
      )}
    </div>
  );
}
