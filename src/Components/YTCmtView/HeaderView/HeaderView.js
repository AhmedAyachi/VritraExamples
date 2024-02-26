import {View} from "vritra";
import css from "./HeaderView.module.css";
import {adjuster0,cross0} from "assets";


export default function HeaderView(props){
    const {parent}=props;
    const headerview=View({parent,at:"start",className:css.headerview});

    headerview.innateHTML=`
        <p>
            <span class="${css.title}">Comments</span>
            <span class="${css.commentcount}">239</span>
        </p>
        <div class="${css.actions}">
            <img class="clickable" src="${adjuster0("black",1)}"/>
            <img ref="closebtn" class="clickable" src="${cross0("black",1)}"/>
        </div>
    `;

    headerview.closebtn.onclick=()=>{
        WebView.close();
    }

    return headerview;
}
