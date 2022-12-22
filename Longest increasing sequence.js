function LongestIncreasingSequence(arr) { 
    var list = new Array();
     var number = arr[0]
        for (var i = 0; i < arr.length; i++){
          list[0]= arr[0];
          if (number < arr[i]){
           list[i]= arr[i];
           number = arr[i];}
       }
       
      for (var i = 0; i < list.length ; i++ ){
        if (list[i]==undefined){
          list.splice(i,1);
    
        }
    }
      
      
      return list.length; 
    
    }
       
    
    console.log(LongestIncreasingSequence(([1,1,2,3,4])));