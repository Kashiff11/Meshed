import React from 'react';

const Quotes = (props) => {

  return (
    <div className="quoteStyle">
      <span>{props.quote}</span>
    </div>
  );
};

export default Quotes;