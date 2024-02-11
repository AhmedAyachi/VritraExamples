import {NativeView,DrawerNavigator} from "vritra";
import css from "./MainView.module.css";
import {ComponentScreen,HomeScreen} from "screens";
import * as components from "components";
import FPSMeter from "fps-m";


export default function MainView(props){
    const {parent,store}=props;
    const mainview=NativeView({parent,id:"webview",className:css.mainview});

    mainview.innateHTML=`
    `;
    DrawerNavigator({
        parent:mainview,
        headerClassName:css.header,
        tintColor:mainColor,
        initialId:"home",
        routes:statics.routes,
    });

    const fpsmeter=new FPSMeter({ui:true});
    fpsmeter.start();
    const headerEl=mainview.querySelector(`.${css.header}`);
    headerEl.appendChild(fpsmeter.element).classList.add(css.fpsmeter);

    return mainview;
}

const statics={
    routes:[
        {id:"home",component:HomeScreen},
        ...Object.keys(components).map(key=>({
            id:key.toLowerCase(),
            title:key,
            component:({parent})=>ComponentScreen({
                parent,name:key,
                component:components[key],
            }),
        })),
    ],
}
