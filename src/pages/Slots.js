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
		<Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
	);
}

export default Slots;