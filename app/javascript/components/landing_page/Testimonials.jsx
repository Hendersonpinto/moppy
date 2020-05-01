import React from "react";

const renderQuotes = (quotes, quoteIcon, polyIcon) => {
  return quotes.map((quote) => {
    return (
      <div className="quote-wrapper">
        <div className="quote-box">
          <img className="quote-icon" src={quoteIcon} />
          <p className="quote">{quote.message}</p>
          <img className="poly" src={polyIcon} />
        </div>
        <p className="quote-owner">{quote.owner}</p>
      </div>
    );
  });
};

const Testimonials = ({
  title,
  file,
  id,
  alt,
  quotes,
  quoteIcon,
  polyIcon,
}) => {
  return (
    <div className={`splitted testimonials`}>
      <div className="splitted__wrapper">
        <div className="splitted__left">
          <h2>{title}</h2>
          <img src={file} id={id} alt={alt} />
        </div>
        <div className="splitted__right">
          <div className="quotes">
            {renderQuotes(quotes, quoteIcon, polyIcon)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
