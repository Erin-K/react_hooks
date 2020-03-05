import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import "./styles.css";

const content = [
  {
    tab: "Selection 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Selection 2",
    content: "I'm the content of the Section 2"
  }
]

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    // console.log(event.target);
    const { target: { value }} = event;
    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value)
    }
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

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if(! allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex // function
  };
}

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title'); // <title></title>
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]); // title이 업데이트 되면 updateTitle을 실행
  return setTitle;
}

const useClick = (onClick) => {
  const element = useRef();
  
  useEffect(() => {
    if(typeof onClick !== 'function') {
      if (element.current) { //componentDidMount
        element.current.addEventListener("click", onClick);
      }
    }
    return () => { //componentWillUnMount
      if (element.current) {
        element.current.removeEventListener('click', onClick)
      }
    };
  },[]); // [] dependence가 없다 = componentWillMount가 없다.
  return element;
}

export default function HooksUtils() {
  const maxLen = (value) => value.length < 10;
  const name = useInput("Erin", maxLen);
  const { payload, loading, error } = useFetch("https://randomuser.me/api/");
  // console.log(payload, loading, error);

  const { currentItem, changeItem } = useTabs(0, content);

  const titleUpdater = useTitle('Loading...');
  setTimeout(() => titleUpdater('Home'),3000)

  const potato = useRef();
  // console.log(potato); // {current: input}
  // console.log(potato.current); // <input placeholder="la">
  // setTimeout(() => {potato.current.focus()}, 5000);
  // setTimeout(() => console.log(potato), 5000) // object "current"
  
  const sayHello = () => {
    console.log('say hello')
  }
  const title = useClick(sayHello);

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
      <p> ****************** </p>
      <h1>UseTabs</h1>
        {content.map((section, index) => <button onClick={() => changeItem(index)} key={index}>{section.tab}</button>)}
        <div>{currentItem.content}</div>
      <p> ****************** </p>
      <h1>UseEffect(useClick)</h1>
      <input ref={potato} placeholder="la" />
      <p ref={title}>Hi</p>
    </div>  
  );
}
