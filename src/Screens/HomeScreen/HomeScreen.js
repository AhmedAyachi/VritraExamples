import {useId,View} from "vritra";
import css from "./HomeScreen.module.css";
import {list0} from "assets";


export default function HomeScreen(props){
    const {parent,id=useId("homescreen")}=props;
    const homescreen=View({parent,id,className:css.homescreen});

    homescreen.innateHTML=`
        <p class="${css.message}">
            Use the <img src="${list0(textColor)}"/> button at the top-left corner 
            to navigate between components.
        </p>
        <p class="${css.message}">
            A touch device is required for some components.
            If you're on desktop, toggle device emulation mode and reload the page.
        </p>
    `;

    return homescreen;
}
