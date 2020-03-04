const students = [
    {id:21, name:"omar sunny"},
    {id:31,name:"Manna"},
    {id:41,name:"Shabnur"},
    {id:71,name:"Deepjol"}
];
const names = students.map(s => s.name);
const ids = students.map(x => x.id);
const ids1 = students.filter(x => x.id > 40);
const ids2 = students.find(x => x.id > 40);

console.log(ids2); 