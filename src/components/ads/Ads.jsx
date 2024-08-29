import React, { useEffect } from "react";

function Ads() {
  useEffect(() => {
    const runScripts = () => {
      const footerElement = document.getElementById("r-ads");
      if (footerElement) {
        footerElement.innerHTML = "";

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.innerHTML = `atOptions = {'key':'59f43819df9179f98cdd25ee48ba9839','format':'iframe','height':300,'width':160,'params':{}};`;
        footerElement.appendChild(script);

        const invokeScript = document.createElement("script");
        invokeScript.type = "text/javascript";
        invokeScript.src = "//www.topcreativeformat.com/59f43819df9179f98cdd25ee48ba9839/invoke.js";
        footerElement.appendChild(invokeScript);
      }
    };
    runScripts();
    const intervalId = setInterval(() => {
      runScripts();
    }, 60000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <div id="r-ads"></div>;
}

export default Ads;
