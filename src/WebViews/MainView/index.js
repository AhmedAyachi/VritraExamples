import "../index";
import MainView from "./MainView";
import {store} from "../../Store";
import WebViews from "../WebViews";


function onDeviceReady(){
    StatusBar.backgroundColorByHexString(mainColor);
    WebView.defineWebViews(WebViews);
    WebView.initiateStore(store,(store)=>{
        MainView({parent:document.body,store});
    });
};

document.addEventListener("deviceready",onDeviceReady,false);
document.addEventListener("backbutton",()=>{
    location.hash?history.back():WebView.close();
},false);
