import {View} from "corella";
import css from "./Board.module.css";
import Square from "./Square/Square";


export default function Board(props){
    const {parent,id="board",squares,onPlay}=props;
    const board=View({parent,id,at:"start",className:css.board}),state={
        move:props.move||0,
        over:false,
    };

    board.innateHTML=`
        <div ref="status" class="${css.status}"></div>
        <div ref="gameboard" class="${css.gameboard}"></div>
    `;
    squares.forEach((square,i)=>{
        const squareEl=Square({
            parent:board.gameboard,
            value:square,
            onClick:()=>{
                if(!state.over){
                    const player=getPlayer(state.move);
                    squares[i]=player;
                    state.move++;
                    squareEl.innerHTML=player;
                    const winner=getWinner(squares);
                    state.over=winner;
                    board.setStatus();
                    onPlay(squares);
                }
            },
        });
    });

    board.setStatus=()=>{
        const {status}=board;
        const winner=getWinner(squares);
        status.innerHTML=winner?`The winner is : ${winner}`:`Next player : ${getPlayer(state.move)}`;
    }
    board.setStatus();

    return board;
}

const statics={
    winninglines:[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ],
}

const getPlayer=(move)=>move%2?"O":"X";

const getWinner=(squares)=>{
    const {winninglines}=statics,{length}=winninglines;
    let i=0,winner;
    while((!winner)&&(i<length)){
        const [a,b,c]=winninglines[i],player=squares[b];
        if((squares[a]===player)&&(player===squares[c])){
            winner=player;
        }
        i++;
    }
    return winner;
  }
