import React from "react";
import { Unity, useUnityContext } from 'react-unity-webgl';

function HorseRace() {
	const { unityProvider, unload } = useUnityContext({
    loaderUrl: "unityFiles/Horse Race/Horse Latest New.loader.js",
    dataUrl: "unityFiles/Horse Race/Horse Latest New.data",
    frameworkUrl: "unityFiles/Horse Race/Horse Latest New.framework.js",
    codeUrl: "unityFiles/Horse Race/Horse Latest New.wasm",
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

export default HorseRace;
