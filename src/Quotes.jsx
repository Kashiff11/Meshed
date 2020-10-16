import React from 'react';

const Quotes = (props) => {
  console.log(props.quote && props.quote.originator.name)

  return (
    <div className="quoteStyle">
      <h4 classname="quoteText">{props.quote && props.quote.content}</h4>
      <h4 classname="quoteText">{props.quote && props.quote.originator.name}</h4>
    </div>
  );
};

export default Quotes;