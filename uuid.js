const uuidv4 = require('uuid/v4');
const uuidv1 = require('uuid/v1');

var id4 = uuidv4();
var id1 = uuidv1();
var reply = {
	name: "nan",
	id5 : uuidv4()
}

console.log("id1: "+id1);
console.log("id4: "+id4);
console.log("reply.id: "+reply.id5);
// hello
