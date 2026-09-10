
//Write a function to reverse the string.
let reversedString="";
function reverseSTring(str){
    //Convert the input into characters 
    let charArray=str.split("");
    //Loop them in reverse direction 
    for(let charIndex=charArray.length-1;charIndex>=0;charIndex--){
        console.log(charArray[charIndex]);
        reversedString=reversedString+charArray[charIndex];
    }
    //Concatenate the string 

// Print the new string
console.log("Reversed String is:",reversedString);
}

//4. Print the new string Write a function to check the given string is a palindrome 
// [If the given string and reverse string are the same, it is a palindrome] 

function checkPalindrome(str){
    if(str===reversedString){
        console.log("The given string is a palindrome");
    }
    else{
        console.log("The given string is not a palindrome");
    }
}
reverseSTring("malayalam");
checkPalindrome("malayalam");

