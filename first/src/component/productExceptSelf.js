function productExceptSelf(nums){
  
  const n=nums.length;
  const result=new Array(n);
  //calculate prefix products
  let prefix=1;
  for(let i=0;i<n;i++){
    result[i]=prefix;
    prefix *=nums[i];
  }
  //calculate sufix and multiply
  let sufix=1;
  
  for(let i=n-1;i>=0;i--){
    result[i] *=sufix;
    sufix *=nums[i];
  }
  return result;
}
const arr=[1,2,3,4];
console.log(productExceptSelf(arr))