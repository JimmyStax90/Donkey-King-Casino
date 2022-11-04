import React from "react";
import { Unity, useUnityContext } from 'react-unity-webgl';



const Slots = () => {
	console.log("Rip");
	const { unityProvider } = useUnityContext({
    loaderUrl: "unityFiles/SlotsGZ.loader.js",
    dataUrl: "unityFiles/SlotsGZ.data",
    frameworkUrl: "unityFiles/SlotsGZ.framework.js",
    codeUrl: "unityFiles/SlotsGZ.wasm",
  });
  document.body.style.backgroundColor = "rgb(44, 31, 56)";
	return (
		<div>
			<Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
		</div>
	);
}

export default Slots;