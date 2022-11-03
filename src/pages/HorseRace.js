import React from "react";
import { Unity, useUnityContext } from 'react-unity-webgl';



function HorseRace() {
	const { unityProvider } = useUnityContext({
    loaderUrl: "build/Build.loader.js",
    dataUrl: "build/Build.data",
    frameworkUrl: "build/Build.framework.js",
    codeUrl: "build/Build.wasm",
  });
  document.body.style.backgroundColor = "rgb(44, 31, 56)";
	return (
		<Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
	);
}

export default HorseRace;