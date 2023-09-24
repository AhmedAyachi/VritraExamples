import {useId,View,useZoomGesture,isTouchDevice} from "corella";
import css from "./ZoomExample.module.css";
import {img7} from "assets";


export default function ZoomExample(props){
    const {parent,id=useId("zoomexample")}=props;
    const zoomexample=View({parent,id,className:css.zoomexample});

    zoomexample.innateHTML=`
        ${isTouchDevice()?`
            <img ref="imgEl" class="${css.image}" src="https://wallpapercrafter.com/desktop/178516-rocks-pretty-sun-beautiful-sunset-clouds-sea-beach-photography-nice-beauty-pink-horizon-lovely-view-clear-ocean-sky-winter-water-cool-purple-nature-landscape.jpg"/>
        `:`
            <p class="${css.message}">Touch device required</p>
        `}
    `;

    const {imgEl}=zoomexample;
    imgEl&&useZoomGesture({
        element:imgEl,
        minScale:0,
        onZoomStart:(event)=>{
            event.preventDefault();
        },
    });

    return zoomexample;
}
