import React from "react";
import { Unity, useUnityContext } from 'react-unity-webgl';
import Navigation from './navbar/Navigation';
import MetaTags from 'react-meta-tags';

function KenoTwo() {
	const { unityProvider, unload } = useUnityContext({
    loaderUrl: "unityFiles/WebBuild.loader.js",
    dataUrl: "unityFiles/WebBuild.data",
    frameworkUrl: "unityFiles/WebBuild.framework.js",
    codeUrl: "unityFiles/WebBuild.wasm",
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

export default KenoTwo;