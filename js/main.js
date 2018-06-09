/*function insert(txt){
var a = document.getElementById('textarea');
a.innerHTML = txt;
}



<input type="button" onclick="insert('tekst');" value="tekst">*/

/*
function c(val){
  document.getElementById("numbers").value = val;
}
function math(val){
  document.getElementById("numbers").value += val;
}
*/

function c(val)
{
    document.getElementById("d").value=val;
}
function math(val)
{
    document.getElementById("d").value+=val;
}
function e(){
  try{
  c(eval(document.getElementById("d").value));
  }
  catch(e){
    c()
  }
  
}
