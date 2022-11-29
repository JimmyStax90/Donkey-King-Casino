import React from "react";
import { Unity, useUnityContext } from 'react-unity-webgl';
import Navigation from './navbar/NavigationGame';
import MetaTags from 'react-meta-tags';
import { useNavigate } from 'react-router-dom';

function Slots() {
	const navigate = useNavigate();
	const { unityProvider, unload } = useUnityContext({
    loaderUrl: "unityFiles/SlotsGZ.loader.js",
    dataUrl: "unityFiles/SlotsGZ.data",
    frameworkUrl: "unityFiles/SlotsGZ.framework.js",
    codeUrl: "unityFiles/SlotsGZ.wasm",
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