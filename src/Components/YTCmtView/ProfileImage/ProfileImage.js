import {View,randomColor} from "vritra";
import css from "./ProfileImage.module.css";


export default function ProfileImage(props){
    const {parent,username="a"}=props;
    const profileimage=View({
        parent,at:props.at,
        className:css.profileimage,
        style:{backgroundColor:randomColor()},
    });

    profileimage.innateHTML=`
        <span class="${css.letter}">${username[0].toUpperCase()}</span>
    `;
}
