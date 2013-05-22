var P=require("../lib/pool").Pool;
var p=new P({stages:["start","end"]});

var c={name:"c"};
var a={name:"a"};


p.add(c,"start");
p.add(a,"start");
console.log(p.getFrom("start"));
console.log(p.getFrom("end"));
p.move(p.getFrom("start"),"start","end");
console.log(p.getFrom("start"));
console.log(p.getFrom("end"));
//console.log(p.popFrom("start"));



