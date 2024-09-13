// function counterFactory() {
//     // Return an object that has two methods called `increment` and `decrement`.
//     // `increment` should increment a counter variable in closure scope and return it.
//     // `decrement` should decrement the counter variable and return it.
    
//     let count=0;
//     return obj={
//        increment(){
//         count++;
//         return count;
//        },
//        decrement(){
//         count--;
//         return count;
//        }
//     };

// }
// let counter = counterFactory();
// console.log(counter.increment());
// console.log(counter.decrement());


// function limitFunctionCallCount(cb, n) {
//     // Should return a function that invokes `cb`.
//     // The returned function should only allow `cb` to be invoked `n` times.
//     // Returning null is acceptable if cb can't be returned
//     let count =n;

//     return function(){
//       if(count>0){
//         count--;
//         return cb();
//       }
//       else{
//         return null;
//       }
//     }
// }
// function print(){
//     return "Function invoked";
// }
// let res=limitFunctionCallCount(print,3);

// console.log(res());
// console.log(res());
// console.log(res());
// console.log(res());


  function cacheFunction(cb) {
    // Should return a function that invokes `cb`.
    // A cache (object) should be kept in closure scope.
    // The cache should keep track of all arguments have been used to invoke this function.
    // If the returned function is invoked with arguments that it has already seen
    // then it should return the cached result and not invoke `cb` again.
    // `cb` should only ever be invoked once for a given set of arguments.

     let obj={
     }
    return function(arg){

        if(!obj.hasOwnProperty(arg))
        {
            console.log(`funtion call`)
            let ans=cb(arg);
            obj[arg]=ans;
            return ans;

        }
        else{
           return obj[arg];
        }
        //return cb(arg)

    }
  }


  function callback(nums){
    return nums*nums;
  }
  let store=cacheFunction(callback);

  let val=store(5)
  console.log(val);
  val=store(6)
  console.log(val);
  
