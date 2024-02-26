import {View} from "vritra";
import css from "./CmtInput.module.css";
import ProfileImage from "../ProfileImage/ProfileImage";


export default function CmtInput(props){
    const {parent,onChange}=props;
    const cmtinput=View({parent,className:css.cmtinput});

    cmtinput.innateHTML=`
        <div class="${css.wrapper}">
            <input placeholder="Add a comment..."/>
        </div>
    `;
    ProfileImage({parent:cmtinput,at:"start"});

    return cmtinput;
}
