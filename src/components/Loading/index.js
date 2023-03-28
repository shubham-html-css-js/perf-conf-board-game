import React, { useEffect } from 'react'
import './index.css'

const Loading = () => {
useEffect(()=>{
var textarea = document.getElementById('shell')
var speed = 30; //Writing speed in milliseconds
var text = 'lets start the game';
var message = `\nWorking on your Request.Please be patient`;
const loginButton = document.createElement("button");
loginButton.innerText='Login'
loginButton.classList.add('login-btn')
loginButton.setAttribute('onclick',"location.href='http://localhost:3000/login'")
var i = 0;

runner();

function runner() {
  textarea.append(text.charAt(i));
  i++;
  setTimeout(
    function() {
      if (i < text.length)
        runner();
      else {
        textarea.append(message)
        i = 0;
        setTimeout(function() {feedbacker();}, 1000);
      }
    }, Math.floor(Math.random() * 220) + 50);
}

var count = 0;
var time = 1;
function feedbacker() {
  textarea.append("[" + count / 1000 + "]" + output[i] + "\n");
  if (time % 2 == 0) {
    i++;
    textarea.append("[" + count / 1000 + "]" + output[i] + "\n");
  }
  if (time == 3) {
    i++;
    textarea.append("[" + count / 1000 + "]" + output[i] + "\n");
    i++;
    textarea.append("[" + count / 1000 + "]" + output[i] + "\n");
    i++;
    textarea.append("[" + count / 1000 + "]" + output[i] + "\n");
  }
  window.scrollTo(0, document.body.scrollHeight);  
  i++;
  time = Math.floor(Math.random() * 4) + 1;
  count += time;
  setTimeout(
    function() {
      if (i < output.length - 2)
        feedbacker();
      else {
        textarea.append("\nClick Here to Login\n")
        textarea.insertAdjacentElement("beforeend",loginButton)
      }
    },time);
}

var output = [
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "API triggered,Fetching Data........",
    "We are not trolling !! We really have the rules",
    "Here are the rules of the game",
    "1.Some Rule 1",
    "2.Some Rule 2",
    "1.Some Rule 1",
    "2.Some Rule 2",
    "1.Some Rule 1",
    "2.Some Rule 2",
    "1.Some Rule 1",
    "2.Some Rule 2",
    "1.Some Rule 1",
    "2.Some Rule 2",
    "1.Some Rule 1",
    "2.Some Rule 2",
];
    },[])
  return (
    <div id="loading">
    <pre id="shell">perf-conf@:redhat~$ </pre>
    </div>
  )
}

export default Loading
