import {View} from "corella";


export default function NavButton(props){
    const {parent,move}=props;
    const navbutton=View({parent,tag:"li"});

    navbutton.innateHTML=`
        <button ref="btn">${move>0?("Go to move #"+move):"Go to game start"}</button>
    `;

    navbutton.btn.onclick=()=>{
        const tictactoegame=parent.parentNode;
        tictactoegame.jumpTo(move);
    };

    return navbutton;
}
