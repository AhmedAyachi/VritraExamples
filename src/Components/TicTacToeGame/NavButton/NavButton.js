import {Fragment} from "vritra";
import css from "./NavButton.module.css";


export default function NavButton(props){
    const {parent,move}=props;
    const navbutton=Fragment({parent});

    navbutton.innateHTML=`
        <button class="${css.button}"ref="btn">${move>0?("Go to move #"+move):"Go to game start"}</button>
    `;

    navbutton.btn.onclick=()=>{
        const tictactoegame=parent.parentNode;
        tictactoegame.jumpTo(move);
    };

    return navbutton;
}
