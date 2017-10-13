function RandomNumber(upper){
  return Math.floor( Math.random() * upper ) +1;
}
var counter =0;
while(counter < 100000){
  var RanNum = RandomNumber(6)
  console.log(RanNum)
  counter+=1;
}
