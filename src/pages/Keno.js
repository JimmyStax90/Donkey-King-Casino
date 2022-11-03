import React from "react";
import { Unity, useUnityContext } from 'react-unity-webgl';

function iframe() {
    return {
        __html: '<iframe src="keno/index.html" width="540" height="450"></iframe>'
    }
}


function Keno() {
	document.body.style.backgroundColor = "rgb(44, 31, 56)";
    return (
        <div>
            <div dangerouslySetInnerHTML={iframe()} />
        </div>)
}

export default Keno;