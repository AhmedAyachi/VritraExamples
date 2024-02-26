import {NativeView} from "vritra";
import css from "./BottomSheet.module.css";
import {YTCmtView} from "components";


export default function BottomSheet(props){
    const {parent}=props;
    const bottomsheet=NativeView({parent,id:"webview",className:css.bottomsheet});

    bottomsheet.innateHTML=`
    `;

    YTCmtView({parent:bottomsheet});

    return bottomsheet;
}
