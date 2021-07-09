//Reverse String

let NewStr = '';

function reverseAString(str) {
  for(let i = str.length -1; i >= 0; i--) {
      NewStr += str[i];
      console.log(NewStr);
  }
  
}

let resultado = reverseAString('Hello Word')