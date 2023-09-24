import {useId,View} from "corella";
import css from "./Square.module.css";


export default function Square(props){
    const {parent,value,onClick}=props;
    const square=View({parent,tag:"button",className:css.square});

    square.innateHTML=`
        ${value||""}
    `;
    if(!value){
        square.onclick=()=>{
            onClick();
            square.onclick=null;
        };
    }

    return square;
}
