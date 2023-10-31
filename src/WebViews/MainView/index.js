import "../index";
import MainView from "./MainView";
import {makeStatusBarUnderlaid} from "resources";
import {store} from "../../Store";
import WebViews from "../WebViews";


function onDeviceReady(){
    //makeStatusBarUnderlaid(mainColor,1);
    WebView.defineWebViews(WebViews);
    WebView.initiateStore(store,(store)=>{
        MainView({parent:document.body,store});
    });
};

document.addEventListener("deviceready",onDeviceReady,false);
document.addEventListener("backbutton",()=>{
    location.hash?history.back():WebView.close();
},false);
