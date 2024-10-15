import "./App.css";
import React, { useState } from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);
  const shareUrl = window.location.href;

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
      </div>
      <div className="share-icons">
        <div className="icons">
          <FacebookShareButton url={shareUrl} title={quote.content}>
            <FacebookIcon size={37} round />
          </FacebookShareButton>
          <LinkedinShareButton url={shareUrl} title={quote.content}>
            <LinkedinIcon size={37} round />
          </LinkedinShareButton>
          <TwitterShareButton url={shareUrl} title={quote.content}>
            <TwitterIcon size={37} round />
          </TwitterShareButton>
          <WhatsappShareButton url={shareUrl} title={quote.content}>
            <WhatsappIcon size={37} round />
          </WhatsappShareButton>
        </div>
        <h2>Share Quote </h2>
      </div>
    </>
  );
};

export default App;
