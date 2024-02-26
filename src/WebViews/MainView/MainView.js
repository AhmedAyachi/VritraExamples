import {NativeView,DrawerNavigator,Fragment} from "vritra";
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
        containerClassName:css.container,
        tintColor:mainColor,
        initialId:"YTCmtView",
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
        ...[
            "HashRouterView","LinkerLineView","PrisonerView",
            "TicTacToeGame","ZoomExample","InterpolatedView",
        ].map(key=>({
            id:key.toLowerCase(),
            title:key,
            component:({parent})=>ComponentScreen({
                parent,name:key,
                component:components[key],
            }),
        })),
        (cordova.platformId!=="browser")&&{
            id:"YTCmtView",
            component:({parent})=>{
                const fragment=Fragment({parent});
                fragment.innateHTML=`
                    <button ref="showbtn">show comments</button>
                `;
                fragment.showbtn.onclick=()=>{
                    WebView.show({
                        id:"bottomsheet",
                        backgroundColor:"white",
                    });
                }
                return fragment;
            },
        },
    ].filter(Boolean),
}
