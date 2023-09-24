import {View,map} from "corella";
import css from "./TicTacToeGame.module.css";
import Board from "./Board/Board";
import NavButton from "./NavButton/NavButton";


export default function TicTacToeGame(props){
    const {parent,id="tictactoegame",startMove=0}=props;
    let tictactoegame=View({parent,id,className:css.tictactoegame});const state={
        histroy:props.histroy||[new Array(9).fill(null)],        
    },{histroy}=state;

    tictactoegame.innateHTML=`
        <ol ref="gameinfo" class="${css.gameinfo}"></ol>
    `;
    Board({
        parent:tictactoegame,
        squares:[...histroy[startMove]],
        move:startMove,
        onPlay:(squares)=>{
            histroy.push([...squares]);
            NavButton({
                parent:tictactoegame.gameinfo,
                move:histroy.length-1,
            });
        },
    });
    histroy.forEach((_,move)=>{
        NavButton({parent:tictactoegame.gameinfo,move});
    });
    

    tictactoegame.jumpTo=(move)=>{
        const lastMove=histroy.length-1;
        if((-1<move)&&(move<lastMove)){
            props.startMove=move;
            props.histroy=histroy.slice(0,move+1);
            tictactoegame=tictactoegame.substitute(TicTacToeGame(props));
        }
    }

    return tictactoegame;
}
