import "../index";
import BottomSheet from "./BottomSheet";


function onDeviceReady(){
    BottomSheet({parent:document.body});
};

document.addEventListener("deviceready",onDeviceReady,false);
