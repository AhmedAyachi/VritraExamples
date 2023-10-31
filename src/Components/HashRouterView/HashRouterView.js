import {View,HashRouter,map, useId} from "vritra";
import css from "./HashRouterView.module.css";
import {home0,market0,wallet0,cog0} from "assets";


export default function HashRouterView(props){
    const {parent}=props;
    const hashrouterview=View({parent,className:css.hashrouterview}),state={
        active:null,
    };

    hashrouterview.innateHTML=`
        <div class="${css.container}" ref="container"></div>
        <div class="${css.navigator}">
            ${map(statics.actions,({id="",icon})=>`
                <img id="${id||""}" src="${icon(textColor)}"/>
            `)}
        </div>
    `;
    const router=HashRouter({
        target:hashrouterview.container,
        routes:[
            /**
             * home route config
             */
            {
                hash:"",
                /**
                 * the home route hash is always the same
                 * because memorize is set to true.
                 */
                memorize:true,
            },
            /**
             * All other routes config
             */
            {
                hash:"#:name",
                /**
                 * the other hashes are always changing because params-change triggers a rerender
                 * even when memorize true is applied.
                 * If you remove the home route config object or set memorize to false, 
                 * you will notice that the home hash is changing between navigations.
                 */
                memorize:true,
            }
        ].map(config=>({
            ...config,
            /**
             * Typically, you would create a component for every route,
             * but here we passing the same component for the sake of the example.
             */
            component:(props)=>{
                const {parent,params}=props;
                const view=View({parent,className:css.route}),{name}=params;
                view.innateHTML=`
                    <p>showing the <span>${useId(name||"Home")}</span> screen</p>
                `;
                view.onShow=()=>{
                    const action=statics.actions.find(action=>name?action.id===name:!action.id);
                    const {active}=state;
                    state.active=action;
                    [active,action].forEach((action,i)=>{if(action){
                        const {id}=action;
                        const element=hashrouterview.querySelector(id?`#${id}`:`[id]`);
                        element.src=action.icon(i?mainColor:textColor);
                    }});
                }
                return view;
            },
        })),
    });

    const actionEls=hashrouterview.querySelectorAll(`.${css.navigator}>img`);
    actionEls.forEach(actionEl=>{
        const {id=""}=actionEl;
        actionEl.onclick=()=>{
            router.push("#"+id);
        }
    });

    return hashrouterview;
}

const statics={
    actions:[
        {
            icon:home0,
        },
        {
            id:"market",
            icon:market0,
        },
        {
            id:"wallet",
            icon:wallet0,
        },
        {
            id:"settings",
            icon:cog0,
        },
    ]
}
