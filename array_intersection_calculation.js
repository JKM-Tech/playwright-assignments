//1. Write a function named `intersection` that accepts two arguments, `arr1` and `arr2`, which are arrays of numbers, 
// and returns an array of their intersection. 

function intersection(arr1, arr2){ //function to find the intersection of two arrays
    let result = []; //create an empty array to store the intersection values
    for(let i=0;i<arr1.length;i++){  //loop through the first array
        for(let j=0;j<arr2.length;j++){ //loop through the second array
            if(arr1[i]===arr2[j]){    //check if the value in the first array is equal to the value in the second array
                result.push(arr1[i]);  //push the value to the result array
            }
    }
}
console.log(result);  //print the result array
}
intersection([1,2,3,4,5],[4,5,6,7,8]);  //call the function with two arrays as arguments