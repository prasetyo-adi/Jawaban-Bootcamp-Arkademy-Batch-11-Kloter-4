//untuk string 5 huruf

function belahKata(){
var str =['kotak'];
str = str.join(" ");
var res = str.slice(-3);
var ros = str.slice(0,2);
console.log(str.slice(0,2) + ',' + str.slice(-3));
console.log(str.slice(0,3) + ',' + str.slice(-2));
}
belahKata();