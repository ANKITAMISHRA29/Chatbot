import "./App.css";
import image from "./img/bot_image.jpg";
import { useState, useRef } from "react";

function App() {
  const humanMessage = useRef();
  const botMessage = useRef();
  const inputRef = useRef();

  // Updated Date and Time Logic
  const date = new Date();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const [time, setTime] = useState(`${hours}:${seconds}`);
  const [dateTime, setDateTime] = useState(`${day}, ${month} ${year}`);

  const checkStatus = () => {
    const isActive = dateTime !== "Thursday, Aug 13 2022";
    const status = document.querySelector(".status");

    if (isActive) {
      status.textContent = "Active";
      status.style.color = "green";
    } else {
      status.textContent = "Not Active";
      status.style.color = "red";
    }
  };

  // Handle user input and bot responses
  const handleInput = () => {
    const inputValue = inputRef.current.value;
    const badWords = ["fuck", "bad", "stupid", "useless", "bitch", "crazy", "nonsense"];
    const welcomeWords = ["hi", "hello", "hey", "sup", "yo", "wassup", "namaste", "goodmorning", "Goodmorning", "evening", "Evening"];
    const byeWords = ["bye", "goodbye", "see you later"];
    const thanksWords = ["thanks", "thank you"];
    const howWords = ["how are you", "how are you doing"];
    const goodWords = ["that's good", "sounds great", "nice"];
    const ownerWords = ["Who is the owner", "who is the owner", "Who made you", "who created you","owner"];
    const ageWords = ["What's your age", "age", "What is your age", "how old are you"];
    const helpWords = ["I need help", "help me", "can you help","help","Help"];

    const regexBadWords = new RegExp(badWords.join("|"), "i");
    const regexWelcome = new RegExp(welcomeWords.join("|"), "i");
    const regexBye = new RegExp(byeWords.join("|"), "i");
    const regexThanks = new RegExp(thanksWords.join("|"), "i");
    const regexHow = new RegExp(howWords.join("|"), "i");
    const regexGood = new RegExp(goodWords.join("|"), "i");
    const regexOwner = new RegExp(ownerWords.join("|"), "i");
    const regexAge = new RegExp(ageWords.join("|"), "i");
    const regexHelp = new RegExp(helpWords.join("|"), "i");

    if (regexBadWords.test(inputValue)) {
      botMessage.current.textContent = "Typing...";
      setTimeout(() => {
        botMessage.current.textContent = "Please do not use bad words";
        inputRef.current.value = "";
      }, 2000);
    } else if (regexWelcome.test(inputValue)) {
      botMessage.current.textContent = "Typing...";
      setTimeout(() => {
        botMessage.current.textContent = "Hello There, how are you doing today?";
        checkStatus();
        inputRef.current.value = "";
      }, 2000);
    } else if (regexBye.test(inputValue)) {
      botMessage.current.textContent = "Typing...";
      setTimeout(() => {
        botMessage.current.textContent = "Bye, have a nice day";
        inputRef.current.value = "";
      }, 2000);
      setTimeout(() => {
        const status = document.querySelector(".status");
        status.textContent = "Not active";
        status.style.color = "red";
      }, 5000);
    } else if (regexThanks.test(inputValue)) {
      botMessage.current.textContent = "Typing...";
      setTimeout(() => {
        botMessage.current.textContent = "You are welcome";
        inputRef.current.value = "";
      }, 2000);
    } else if (regexHow.test(inputValue)) {
      botMessage.current.textContent = "Typing...";
      setTimeout(() => {
        botMessage.current.textContent = "I am fine, thank you";
        checkStatus();
        inputRef.current.value = "";
      }, 2000);
    } else if (regexGood.test(inputValue)) {
      botMessage.current.textContent = "Typing...";
      setTimeout(() => {
        botMessage.current.textContent = "😁";
        inputRef.current.value = "";
      }, 1000);
    } else if (regexOwner.test(inputValue)) {
      botMessage.current.textContent = "Typing...";
      setTimeout(() => {
        botMessage.current.textContent = "The owner of this bot is Ankita Mishra, visit her LinkedIn ID to know her more: linkedin.com/in/ankita-mishra-75593b24a";
        inputRef.current.value = "";
      }, 2000);
    } else if (regexAge.test(inputValue)) {
      botMessage.current.textContent = "Typing...";
      setTimeout(() => {
        botMessage.current.textContent = "I am 21 years old";
        inputRef.current.value = "";
      }, 2000);
    } else if (regexHelp.test(inputValue)) {
      botMessage.current.textContent = "Typing...";
      setTimeout(() => {
        botMessage.current.textContent = "Sure! I can help you with various topics like my age, name, owner, etc.";
        inputRef.current.value = "";
      }, 2000);
    } else {
      botMessage.current.textContent = "Typing...";
      setTimeout(() => {
        botMessage.current.textContent = "I am sorry! I can not answer this right now but I can help you with topics like my age, name, owner, etc.";
        inputRef.current.value = "";
      }, 2000);
    }

    humanMessage.current.textContent = inputValue;
  };

  return (
    <div className="App" onLoad={checkStatus}>
      <div className="wrapper">
        <div className="content">
          <div className="header">
            <div className="img">
              <img src={image} alt="" />
            </div>
            <div className="right">
              <div className="name">ChatBot</div>
              <div className="status">Active</div>
            </div>
          </div>
          <div className="main">
            <div className="main_content">
              <div className="messages">
                <div
                  className="bot-message"
                  ref={botMessage}
                ></div>
                <div
                  className="human-message"
                  ref={humanMessage}
                ></div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="btm">
              <div className="input">
                <input
                  type="text"
                  id="input"
                  placeholder="Enter your message"
                  ref={inputRef}
                />
              </div>
              <div className="btn">
                <button onClick={handleInput}>
                  <i className="fas fa-paper-plane"></i>Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
