import {View,map} from "vritra";
import css from "./CmtView.module.css";
import ProfileImage from "../ProfileImage/ProfileImage";
import {speechbubble0,thumbup0} from "assets";


export default function CmtView(props){
    const {parent,comment}=props,{poster:{name},likecount,replycount}=comment;
    const cmtview=View({parent,className:css.cmtview});

    cmtview.innateHTML=`
        <div class="${css.content}">
            <text class="${css.postername}">@${name}</text>
            <text class="${css.body}">${comment.body}</text>
            <div class="${css.actions}">
                ${map(statics.actions,({key,icon})=>{
                    const count=comment[key];
                    return `
                        <button class="${css.action}">
                            <img src="${icon("black")}"/>
                            ${count?`<text as="label">${count}</text>`:""}
                        </button>
                    `;
                })}
            </div>
        </div>
    `;
    ProfileImage({
        parent:cmtview,at:"start",
        username:name,
    });

    return cmtview;
}

const statics={
    actions:[
        {key:"likecount",icon:thumbup0},
        {key:"replycount",icon:speechbubble0},
    ],
}
