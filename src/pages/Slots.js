import React from "react";
import { Unity, useUnityContext } from 'react-unity-webgl';



function Slots() {
	const { unityProvider } = useUnityContext({
    loaderUrl: "unityFiles/SlotsGZ.loader.js",
    dataUrl: "unityFiles/SlotsGZ.data",
    frameworkUrl: "unityFiles/SlotsGZ.framework.js",
    codeUrl: "unityFiles/SlotsGZ.wasm",
  });
  document.body.style.backgroundColor = "rgb(44, 31, 56)";
	return (
		
`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="logo.png" />
    
    <link rel="manifest" href="/manifest.json" />
    
    <title>Donkey King Casino</title>
  <script defer src="/static/js/bundle.js"></script></head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    
  </body>
</html>`

	);
}

export default Slots;