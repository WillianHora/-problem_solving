
function ABCheck(str) { 
  
    for (var i = 0 ; i < str.length-4 ; i++){
      if (str[i].match(/[aABb]/)){
        if (str[i+4].match(/[AaBb]/)){
          return true;
        }
      }
    }
  return false; 
           
  }
  
  console.log(ABCheck("acccb"))