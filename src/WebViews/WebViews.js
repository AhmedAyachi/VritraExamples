

module.exports=[
    {
        name:"BottomSheet",
        statusBarTranslucent:true,
        asModal:true,
        modalStyle:{height:0.7},
    }
].map((webview,i)=>({
    backgroundColor:globalThis.backgroundColor,
    ...webview,
    id:webview.name.toLowerCase(),
    file:`index${i+1}.html`,
}));
