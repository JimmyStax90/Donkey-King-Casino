import React from "react";
import { Unity, useUnityContext } from 'react-unity-webgl';

function Slots() {
	const { unityProvider, unload } = useUnityContext({
    loaderUrl: "unityFiles/Slots/SlotsGZ.loader.js",
    dataUrl: "unityFiles/Slots/SlotsGZ.data",
    frameworkUrl: "unityFiles/Slots/SlotsGZ.framework.js",
    codeUrl: "unityFiles/Slots/SlotsGZ.wasm",
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

export default Slots;
