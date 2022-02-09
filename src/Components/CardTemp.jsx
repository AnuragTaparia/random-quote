import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";

function CardTemp() {
  const [quote, setQuote] = useState(null);

  async function updateQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const { statusCode, statusMessage, ...quote } = await response.json();
      setQuote(quote);
    } catch (err) {
      console.error(err);
      setQuote({ content: "Ooops........ Something went wrong!!!" });
    }
  }

  useEffect(() => {
    updateQuote();
  }, []);

  if (!quote) {
    return null;
  }

  return (
    <div className="cardQuote">
      {/* <p>{quote.content}</p>
      <p>{quote.author}</p> */}

      <Card border="dark" style={{ width: "90%", maxWidth: "40rem" }}>
        <Card.Header>Quote</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p className="content">{quote.content}</p>
            <footer className="blockquote-footer">
              <cite>{quote.author}</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
      <Button variant="primary" onClick={updateQuote} className="btn">
        random
      </Button>
    </div>
  );
}

export default CardTemp;
