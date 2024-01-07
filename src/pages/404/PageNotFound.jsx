import React from "react";
import { Link } from "react-router-dom";
import errGif from "~/assets/image/error.gif";

function PageNotFound() {
  return (
    <div className="error_container">
      <Link to={"/"}>
        <img src={errGif} alt="error-gif" />
      </Link>
      <div className="error">
        <h1>404</h1>
        <p>{`Ôi không! Chúng tôi không thể tải trang này!`}</p>
        <Link to={"/"}>Về trang chủ</Link>
      </div>
    </div>
  );
}

export default PageNotFound;
