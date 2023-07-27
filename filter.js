const studentDetails=[
    {
        id:1,
        name:'ishu',
        gender:'female'
    },
    {
        id:2,
        name:'lia',
        gender:'female'
    },
    {
        id:3,
        name:'ram',
        gender:'male'
    },
    {
        id:4,
        name:'ria',
        gender:'female'
    },
    {
        id:5,
        name:'simon',
        gender:'male'
    },
]
let filtered=studentDetails.filter((detail)=>{
   
    return detail.gender==='female';
});

let ans=filtered.map((student)=>{
        return student["name"];
})

console.log(JSON.stringify(filtered));
console.log(JSON.stringify(ans));

