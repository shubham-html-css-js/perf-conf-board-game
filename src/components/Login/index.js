import React, { useState,useRef,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Login = (props) => {
  const [val, setVal] = useState('');
  const [password,setPassword]=useState('');
  const [toggle, setToggle]=useState(false);
  const refVal = useRef();
  const passRef=useRef();
  const navigate=useNavigate()
  useEffect(() => {
    window.addEventListener("click", () => {
      refVal?.current?.focus();
    });
  }, []);
  const onsubmit = (event) => {
    if(event.keyCode === 13 || event.keyCode === 9)
    {sessionStorage.setItem('teamName', val.toLowerCase());
    passRef.current.focus();
    setToggle(true)
  }
  }
  const onPasswordHandler=(event)=>{
    if(event.keyCode===13)
    {
      fetch(`http://localhost:4000/team`,{
        method:'POST',
        headers:{
          "Content-type": "application/json",
      },
        body:JSON.stringify({
          teamName:val.toLowerCase(),
          password:password.toLowerCase()
        })
      }).then(res=>res.json())
      .then(data=>{
        if(data.status===200)
        navigate('/game')
        else if(data.status===404)
        alert('Wrong credentials')
      })
      .catch((err) => {
        // console.log(err);
        console.log("Unable to check credentials")
      });
    }
  }
  return (
    <div className="center-screen">
      <div className="nameInput">
      <h2>{">"} Enter your Team Name: {'   '}{val}</h2>
      <input
        ref={refVal}
        type="text"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
        onKeyDown = {onsubmit}
        autoFocus
        className="inputTeamName"
      />
      {toggle||<span className="box"><h2></h2></span>}
      </div>
      <div className="passInput">
      <h2>{">"} Enter your Password: {'   '}{password}</h2>
      <input
      ref={passRef}
      type="password"
      value={password}
      onChange={(e)=>{
        setPassword(e.target.value)
      }}
      onKeyDown={onPasswordHandler}
      className="inputTeamName"
      />
      {toggle&&<span className="box"><h2></h2></span>}
      </div>
    </div>
  );
}

export default Login;
