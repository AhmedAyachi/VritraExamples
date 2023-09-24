import {DraggableView, isTouchDevice} from "corella";
import css from "./LeaderLineTester.module.css";
import LeaderLine from "leaderline";


export default function LeaderLineTester(props){
    const leaderlinetester=DraggableView({...props,className:css.leaderlinetester}),state={
        start:null,end:null,
        hidden:false,
    };

    leaderlinetester.innateHTML=`
        <button ref="togglebtn">Toggle Line</button>
    `;

    ["start","end"].forEach(key=>{
        const draggableview=state[key]=DraggableView({
            parent:leaderlinetester,
            className:css.draggableview,
            onMove:()=>{line.position()},
        });
        draggableview.innerText=key;
        draggableview.onmousedown=draggableview.ontouchstart=(event)=>{
            event.stopPropagation();
        }
    });
    const line=new LeaderLine({
        ...state,parent:leaderlinetester,
        color:minorColor,
        size:isTouchDevice()?rem/5:rem,
    });
    
    leaderlinetester.togglebtn.onclick=()=>{
        const hidden=state.hidden=!state.hidden;
        hidden?line.hide("fade"):line.show("fade",{});
    }

    return leaderlinetester;
}
