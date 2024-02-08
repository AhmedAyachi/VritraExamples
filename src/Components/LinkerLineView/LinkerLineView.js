import {DraggableView} from "vritra";
import css from "./LinkerLineView.module.css";
import LinkerLine from "linkerline";


export default function LinkerLineView(props){
    const linkerlineview=DraggableView({...props,className:css.linkerlineview}),state={
        start:null,end:null,
        hidden:false,
    };

    linkerlineview.innateHTML=`
        <button ref="togglebtn">Toggle Line</button>
    `;

    ["start","end"].forEach(key=>{
        const draggableview=state[key]=DraggableView({
            parent:linkerlineview,
            className:css.draggableview,
            onMove:()=>{line.position()},
        });
        draggableview.innerText=key;
        draggableview.onmousedown=draggableview.ontouchstart=(event)=>{
            event.stopPropagation();
        }
    });
    const line=new LinkerLine({
        ...state,parent:linkerlineview,
        color:minorColor,
    });
    
    linkerlineview.togglebtn.onclick=()=>{
        const hidden=state.hidden=!state.hidden;
        hidden?line.hide("fade"):line.show("fade");
    }

    return linkerlineview;
}
