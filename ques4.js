let arr=[3,2,0,1];
function rearrange(arr,n){
  for(let i=0;i<n;i++){
    arr[i]+=(arr[arr[i]]%n)*n;
  }
  for(let i=0;i<n;i++){
    arr[i]=Math.floor(arr[i]/n);
  }
  console.log(arr);
}
rearrange(arr,4)