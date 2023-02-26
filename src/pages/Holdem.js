import React from "react";
import { Unity, useUnityContext } from 'react-unity-webgl';

function Holdem() {
	const { unityProvider, unload } = useUnityContext({
    loaderUrl: "unityFiles/Holdem.loader.js",
    dataUrl: "unityFiles/Holdem.data",
    frameworkUrl: "unityFiles/Holdem.framework.js",
    codeUrl: "unityFiles/Holdem.wasm",
  });
  async function handleClickBack() {
    await unload();
	window.history.go(-1);
    // Ready to navigate to another page.
  }
  document.body.style.backgroundColor = "rgb(62, 3, 158)";
	return (
		
		<div>
			<div><button onClick={handleClickBack}>Back</button></div>
			<Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
		</div>
	);
}

export default Holdem;