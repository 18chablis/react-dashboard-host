import React from "react";
import { useHistory } from "react-router-dom";
function Error() {
  let history = useHistory();
  return (
    <div>
      <h1>Oops! Page not found!</h1>
      <input
        className="btn btn-primary"
        type="button"
        value="Back"
        onClick={() => history.goBack()}
      />
    </div>
  );
}

export default Error;
