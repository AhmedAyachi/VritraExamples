import {NativeView,DrawerNavigator} from "corella";
import css from "./MainView.module.css";
import * as components from "components";
import {HashRouterScreen,ComponentScreen,PinchScreen,HomeScreen} from "screens";


export default function MainView(props){
    const {parent}=props;
    const mainview=NativeView({parent,id:"webview",className:css.mainview});

    mainview.innateHTML=`
    `;
    DrawerNavigator({
        parent:mainview,
        headerClassName:css.header,
        initialId:"leaderlinetester",
        routes:statics.routes,
        tintColor:mainColor,
    });

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
