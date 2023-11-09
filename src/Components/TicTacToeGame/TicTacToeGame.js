import {View} from "vritra";
import css from "./TicTacToeGame.module.css";
import Board from "./Board/Board";
import NavButton from "./NavButton/NavButton";


export default function TicTacToeGame(props){
    const {parent,id="tictactoegame",startMove=0}=props;
    let tictactoegame=View({parent,id,className:css.tictactoegame});const state={
        history:props.history||[new Array(9).fill(null)],        
    },{history}=state;

    tictactoegame.innateHTML=`
        <div ref="gameinfo" class="${css.gameinfo}"></div>
    `;
    Board({
        parent:tictactoegame,
        squares:[...history[startMove]],
        move:startMove,
        onPlay:(squares)=>{
            history.push([...squares]);
            NavButton({
                parent:tictactoegame.gameinfo,
                move:history.length-1,
            });
        },
    });
    history.forEach((_,move)=>{
        NavButton({parent:tictactoegame.gameinfo,move});
    });
    
    tictactoegame.jumpTo=(move)=>{
        const lastMove=history.length-1;
        if((-1<move)&&(move<lastMove)){
            props.startMove=move;
            props.history=history.slice(0,move+1);
            tictactoegame=tictactoegame.substitute(TicTacToeGame(props));
        }
    }

    return tictactoegame;
}
