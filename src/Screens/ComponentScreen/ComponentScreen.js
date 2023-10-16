import {useId,View} from "vritra";
import css from "./ComponentScreen.module.css";


export default function ComponentScreen(props){
    const {parent,id=useId("componentscreen"),name,component}=props;
    const componentscreen=View({
        parent,id,
        className:`${css.componentscreen} ${css[name.toLowerCase()]||""}`,
    });

    componentscreen.innateHTML=`
    `;
    component&&component({parent:componentscreen});

    return componentscreen;
}
