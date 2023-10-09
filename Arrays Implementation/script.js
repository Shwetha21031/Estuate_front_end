let array = []

function insert(){
   let arr = document.getElementById("input").value
   array = arr.split(",").map((elem)=>{
      return elem = elem.trim();
   })
   document.getElementById("output_array").textContent  = array
   clearInput()
}
function updateArray(){
    document.getElementById("output_array").textContent = array 
}
function clearInput(){
    var getValue= document.getElementById("input");
      if (getValue.value !="") {
          getValue.value = "";
      }
}

function push(){
   let value =  document.getElementById("input").value ;
   if(value!==""){
   array.push(value);
   }
   updateArray();
   clearInput()
}

function pop(){
   array.pop();
   updateArray();
   clearInput()
}

function shift(){
   array.shift();
   updateArray();
   clearInput()
}

function unshift(){
   let value =  document.getElementById("input").value ;
   if(value!==""){
    array.unshift(value);
    }
   updateArray();
   clearInput()
}

function del(){
   let value =  document.getElementById("input").value ;
   delete array[value]
   updateArray();
   clearInput()
}

function slice(){
    
}