function hexColor(){
    let hex_Number = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    
   var codeData = '';
   for( var i = 0; i< 6; i++){
    var hex_index = Math.floor(Math.random()  * hex_Number.length);
    codeData += hex_Number [hex_index];
   }
document.getElementById("HEX_Code").innerHTML = codeData;
document.getElementsByTagName("body")[0].style.background = "#" + codeData
}