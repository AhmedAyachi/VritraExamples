import {View,FlatList,useId} from "vritra";
import css from "./YTCmtView.module.css";
import HeaderView from "./HeaderView/HeaderView";
import CmtView from "./CmtView/CmtView";
import CmtInput from "./CmtInput/CmtInput";


export default function YTCmtView(props){
    const {parent}=props;
    const ytcmtview=View({parent,className:css.ytcmtview});

    ytcmtview.innateHTML=`
    `;
    HeaderView({parent:ytcmtview});
    FlatList({
        parent:ytcmtview,
        className:css.commentlist,
        data:statics.comments,
        renderItem:({parent,item})=>CmtView({parent,comment:item}),
        threshold:0,
        backwards:false,//set to true to make the flatlist scrollable from bottom to top
    });
    CmtInput({parent:ytcmtview});

    return ytcmtview;
}

const statics={
    comments:function(){
        const sentences=`
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        `.trim().replace(/\n/g,"").split(".");
        return new Array(10).fill().map((_,i)=>({
            id:"comment"+i,
            poster:{name:useId()},
            body:sentences[i%sentences.length],
            likecount:Math.floor(Math.random()*20),
            replycount:Math.floor(Math.random()*20),
        }));
    }(),
}
