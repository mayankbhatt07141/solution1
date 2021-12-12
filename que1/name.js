document.getElementById("namediv").innerText="Mayank bhatt"
let name1="mayank bhatt"
let vowels="";
let len=name1.length;
for(let i=0;i<len;i++){
  if(name1[i]=='a'||name1[i]=='e'||name1[i]=='i'||name1[i]=='o'||name1[i]=='o'){
    vowels=vowels+name1[i];
  }
}
document.getElementById("p").innerText=vowels;