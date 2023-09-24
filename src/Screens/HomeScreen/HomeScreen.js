import {useId,View} from "corella";
import css from "./HomeScreen.module.css";
import {} from "components";


export default function HomeScreen(props){
    const {parent,id=useId("homescreen")}=props;
    const homescreen=View({parent,id,className:css.homescreen});

    homescreen.innateHTML=`
    `;
    return homescreen;

}
