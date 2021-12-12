let a=10;
let fact=1;
while(a>0){
  fact=fact*a;
  a--;
}
console.log(fact);
let countz=0;
let temp=fact;
while(temp>0){
  if(temp%10===0){
    countz++;
  }
  temp=temp/10;
}
console.log(countz);