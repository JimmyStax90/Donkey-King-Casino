import React from "react";
import { Unity, useUnityContext } from 'react-unity-webgl';



function Slots() {
	const { unityProvider } = useUnityContext({
    loaderUrl: "build/SlotsGZ.loader.js",
    dataUrl: "build/SlotsGZ.data",
    frameworkUrl: "build/SlotsGZ.framework.js",
    codeUrl: "build/SlotsGZ.wasm",
  });
  document.body.style.backgroundColor = "rgb(44, 31, 56)";
	return (
		<Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
	);
}

export default Slots;