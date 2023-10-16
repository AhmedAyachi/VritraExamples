import {DraggableView,isTouchDevice} from "vritra";
import css from "./LeaderLineView.module.css";
import LeaderLine from "leaderline";


export default function LeaderLineView(props){
    const leaderlineview=DraggableView({...props,className:css.leaderlineview}),state={
        start:null,end:null,
        hidden:false,
    };

    leaderlineview.innateHTML=`
        <button ref="togglebtn">Toggle Line</button>
    `;

    ["start","end"].forEach(key=>{
        const draggableview=state[key]=DraggableView({
            parent:leaderlineview,
            className:css.draggableview,
            onMove:()=>{line.position()},
        });
        draggableview.innerText=key;
        draggableview.onmousedown=draggableview.ontouchstart=(event)=>{
            event.stopPropagation();
        }
    });
    const line=new LeaderLine({
        ...state,parent:leaderlineview,
        color:minorColor,
        size:Math.min(isTouchDevice()?rem/5:rem,5),
    });
    
    leaderlineview.togglebtn.onclick=()=>{
        const hidden=state.hidden=!state.hidden;
        hidden?line.hide("fade"):line.show("fade",{});
    }

    return leaderlineview;
}
