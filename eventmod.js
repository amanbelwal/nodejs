const EventEmitter=require("node:events");
emitter= new EventEmitter();

emitter.on("order-pizza",()=>{
    console.log("order got placed");
})
console.log("jjj");
emitter.on("order-pizza", (size,topping)=>{
    console.log("serving " +size ,"with" +topping)
})

emitter.emit("order-pizza","large","mushroom");
