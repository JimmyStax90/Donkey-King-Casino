import React from "react";
import { Unity, useUnityContext } from 'react-unity-webgl';

function HorseRace() {
	const { unityProvider } = useUnityContext({
    loaderUrl: "unityFiles/Build.loader.js",
    dataUrl: "unityFiles/Build.data",
    frameworkUrl: "unityFiles/Build.framework.js",
    codeUrl: "unityFiles/Build.wasm",
  });
  document.body.style.backgroundColor = "rgb(44, 31, 56)";
	return (
		<div>
			<Unity unityProvider={unityProvider} style={{ width: window.innerWidth, height: window.innerHeight }} />
		</div>
	);
}

export default HorseRace;