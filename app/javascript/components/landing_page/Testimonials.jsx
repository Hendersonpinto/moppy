import React from "react";

const renderQuotes = (quotes, quoteIcon, polyIcon) => {
  return quotes.map((quote) => {
    return (
      <div className="quote-wrapper" key={quote.owner}>
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

const Testimonials = ({ content }) => {
  const { title, quotes, image, quoteIcon, polyIcon } = content;
  const { file, alt, id } = image;
  return (
    <div className={`testimonials`}>
      <div className="testimonials__wrapper">
        <div className="testimonials__left">
          <h2>{title}</h2>
          <img src={file} id={id} alt={alt} />
        </div>
        <div className="testimonials__right">
          <div className="quotes">
            {renderQuotes(quotes, quoteIcon, polyIcon)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
