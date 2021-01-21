import React from "react";
import { Link } from "react-router-dom";

const Error: React.FC<{ error: string }> = ({ error }) => {
  return (
    <div className="error-container">
      <h1>{error}</h1>
      <Link className="back-btn" type="button" to="/">
        Go to Main Page
      </Link>
    </div>
  );
};

export default Error;
