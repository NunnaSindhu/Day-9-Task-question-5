// Solving problems using array functions on rest countries data.Print the country which uses US Dollars as currency.
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.send();
xhr.onload = function () {
  let data = JSON.parse(xhr.response);
  
  // console.log(data);
  for(let i = 0; i < data.length; i++) {
    if(!data[i].currencies){
       
         
    }else{
      
      for(let j = 0; j <data[i].currencies.length; j++)
      { if(data[i].currencies[j].code==='USD'){
       console.log(data[i].name);
     
      }
          
      }
    }
    
  }
}

  