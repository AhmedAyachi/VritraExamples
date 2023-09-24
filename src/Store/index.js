

export const store={
    langname:localStorage.getItem("langname")||"english",
    user:{
        firstname:"ahmed",
        lastname:"ayachi",
        age:22,
        arrays:[
            [[1],[2],[3]],
            [[1],[2],[3]],
        ],
        accounts:[
            {site:"facebook",username:"aayachi032@gmail.com"},
            {site:"gmail",username:"dofus592@gmail.com"},
            {attributs:["a","b",[1,2,3]]},
        ],
        balance:{
            total:1500,
            date:{
                day:7,
            },
        },
    },
};
