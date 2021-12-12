let arr=[1,2,3,5,6];
let arr2=[5,10,12,11,15];
let res;
let i=0;
let j=0;
let k=0;
let n=5;
let m=6;

while(i<n&&j<m){
  if(arr[i]<arr[j]){
    res[k]=arr[i];
    i++;
    k++;
  }
  else if(arr[i]>arr[j]){
    res[k]=arr[j];
    j++;
    k++;
  }
}
  while(i<n){
    res[k]=arr[i];
    i++;
    k++;
  }
  while(j<m){
    res[k]=arr[j];
    j++;
    k++;
  }
