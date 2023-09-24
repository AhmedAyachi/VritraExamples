import {useId,View,map,interpolate} from "corella";
import css from "./InterpolatedView.module.css";


export default function InterpolatedView(props){
    const {parent,id=useId("interpolatedview")}=props;
    const interpolatedview=View({parent,id,className:css.interpolatedview});

    interpolatedview.innateHTML=`
        <div class="${css.scroll}" ref="scrollEl">
            ${map(10,(i)=>`<div>${i+1}</div>`)}
        </div>
        <div class="${css.background}" ref="backgroundEl"></div>
    `;

    const {scrollEl,backgroundEl}=interpolatedview;
    scrollEl.onscroll=()=>{
        requestAnimationFrame(()=>{
            const value=interpolate(scrollEl.scrollLeft,[0,scrollEl.scrollWidth-scrollEl.clientWidth],[0,100]);
            backgroundEl.style.width=`${value}%`;
        });
    }

    return interpolatedview;
}
