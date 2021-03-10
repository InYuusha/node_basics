var events=require('events')
var util=require('util')

var Person=(name)=>{
    this.name=name;
}
util.inherits(Person, events.EventEmitter)

var james= new Person('james')
var inyuusha= new Person('inyuusha')
var ryu= new Person('ryu')

var names=[james,inyuusha,ryu]

people.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name+" Said " +msg)
    })
})
james.emit('speak', "hello guys")