import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Footer() {
  useEffect(() => {
    const runScripts = () => {
      const footerElement = document.getElementById("ads");
      if (footerElement) {
        footerElement.innerHTML = "";

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.innerHTML = `atOptions = {'key':'92d0484fd121565aa663ddbf3b26f02a','format':'iframe','height':60,'width':468,'params':{}};`;
        footerElement.appendChild(script);

        const invokeScript = document.createElement("script");
        invokeScript.type = "text/javascript";
        invokeScript.src = "//www.topcreativeformat.com/92d0484fd121565aa663ddbf3b26f02a/invoke.js";
        footerElement.appendChild(invokeScript);
      }
    };
    runScripts();
    const intervalId = setInterval(() => {
      runScripts();
    }, 600000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="footer flex items-center justify-center w-full flex-col-reverse ">
      <div id="ads" className="min-h-16"></div>
      <div className="mb-3">
        <Link
          to="/"
          className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-700"
        >
          Về trang chủ
        </Link>
      </div>
    </div>
  );
}

export default Footer;
