import {useId,View,DraggableView} from "vritra";
import css from "./PrisonerView.module.css";


export default function PrisonerView(props){
    const {parent,id=useId("prisonerview")}=props;
    const prisonerview=View({parent,id,className:`${css.prisonerview} ${props.className||""}`});

    prisonerview.innateHTML=`
        <div ref="prisonEl" class="${css.prison}"></div>
    `;
    const {prisonEl}=prisonerview,radius=prisonEl.clientWidth/2;
    const prisoner=DraggableView({
        parent:prisonEl,
        className:css.prisoner,
        onDrop:(coords)=>{
            const {x,y}=coords;
            const distance=Math.sqrt(x**2+y**2)+prisoner.clientWidth/2;
            if(distance>radius){
                prisoner.setPosition({x:0,y:0,duration:200});
            }
        },
    });
    

    return prisonerview;
}
