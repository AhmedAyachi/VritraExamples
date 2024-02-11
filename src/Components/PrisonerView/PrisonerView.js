import {useId,View,DraggableView} from "vritra";
import css from "./PrisonerView.module.css";


export default function PrisonerView(props){
    const {parent,id=useId("prisonerview")}=props;
    const prisonerview=View({parent,id,className:`${css.prisonerview} ${props.className||""}`}),state={
        brokenout:false,
    };

    prisonerview.innateHTML=`
        <div ref="prisonEl" class="${css.prison}"></div>
        <button ref="breakbtn" class="${css.breakbtn}">break out</button>
    `;
    const {prisonEl,breakbtn}=prisonerview,radius=prisonEl.clientWidth/2;
    const prisoner=DraggableView({
        parent:prisonEl,
        className:css.prisoner,
        onDrop:(coords)=>{
            const {x,y}=coords;
            const distance=Math.sqrt(x**2+y**2)+prisoner.clientWidth/2;
            if(state.brokenout){
                if(distance<=radius){
                    state.brokenout=false;
                    breakbtn.innerText="break out";
                }
            }
            else{
                if(distance>radius){
                    prisoner.setPosition({x:0,y:0,duration:200});
                }
            }
        },
    });

    breakbtn.onclick=function breakOut(){if(!state.brokenout){
        breakbtn.onclick=null;
        const attemptCount=10,duration=100;
        const r=prisoner.clientWidth/2;
        let i=0;
        const interval=setInterval(()=>{
            const brokenout=Math.random()>0.95;
            const angle=(2*Math.random()-1)*Math.PI;
            const distance=brokenout?radius+2*r:radius-r;
            prisoner.setPosition({
                x:distance*Math.cos(angle),
                y:distance*Math.sin(angle),
                duration,
            });
            if((i>=attemptCount)||brokenout){
                state.brokenout=brokenout;
                if(brokenout){
                    breakbtn.innerText="Drag him back to prison";
                }
                else{
                    prisoner.setPosition({x:0,y:0,duration});
                }
                clearInterval(interval);
                breakbtn.onclick=breakOut;
            }
            i++;
        },duration);
    }};

    return prisonerview;
}
