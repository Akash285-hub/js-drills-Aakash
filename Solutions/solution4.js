/*
    Complete the following functions.
    These functions only need to work with arrays.
    A few of these functions mimic the behavior of the `Built` in JavaScript Array Methods.
    The idea here is to recreate the functions from scratch BUT if you'd like,
    feel free to Re-use any of your functions you build within your other functions.
    **DONT** Use for example. .forEach() to recreate each, and .map() to recreate map etc.
    You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating.
*/

function each(elements, cb) {
 
   // Do NOT use forEach to complete this function.
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // You should also pass the index into `cb` as the second argument
  // based off http://underscorejs.org/#each
  
  for(let i=0 ; i<elements.length ; i++){
      cb(elements[i],i);   
  }

}

function map(elements, cb) {
  // Do NOT use .map, to complete this function.
  // How map works: Map calls a provided callback function once for each element in an array, in order, and functionructs a new array from the res .
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  
  let newarr=[];
  for(let i=0;i<elements.length;i++){
    newarr.push(cb(elements[i]))
  }
  return newarr;
}

 function reduce(elements, cb, startingValue) {
//   // Do NOT use .reduce to complete this function.
//   // How reduce works: A reduce function combines all elements into a single value going from left to right.
//   // Elements will be passed one by one into `cb` along with the `startingValue`.
//   // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
//   // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
let show=startingValue;
 for(let i=0 ;i<elements.length ;i++){
   if(show===undefined){
    show=elements[i];
   }
   else{
    show=cb(show,elements[i]);
   }
}  
return show;
}

 function find(elements, cb) {
//   // Do NOT use .includes, to complete this function.
//   // Look through each value in `elements` and pass each element to `cb`.
//   // If `cb` returns `true` then return that element.
//   // Return `undefined` if no elements pass the truth test.
  
for(let i=0;i<elements.length;i++){
    if(cb(elements[i],i,elements)){
        return elements[i];
    }
   }
   return undefined;
}

 function filter(elements, cb) {
 let newarr=[];
 let bool=true;
    //   // Do NOT use .filter, to complete this function.
//   // Similar to `find` but you will return an array of all elements that passed the truth test
//   // Return an empty array if no elements pass the truth test
for(let i=0;i<elements.length;i++){
    if(cb(elements[i])){
        newarr.push(elements[i]);
    }
    if(!bool){
        return [];
    }
}
return newarr;
}

// const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

 function flatten(elements) {
    let result=[];
//   // Flattens a nested array (the nesting can be to any depth).
//   // Hint: You can solve this using recursion.
//   // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  for(let i=0;i<elements.length;i++){
     if(Array.isArray(elements[i])){
        result=result.concat(flatten(elements[i]));
     }
     else{
        result.push(elements[i]);
     }
  }
  return result;
}


module.exports={each,map,find,reduce,filter,flatten};