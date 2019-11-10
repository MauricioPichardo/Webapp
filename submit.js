
const derk =  document.getElementById("send");


derk.addEventListener("click", function validation(){
var name = document.getElementById("userField").value;
var messa = document.getElementById("messageField").value;
if( name ==='' || messa ===''){
alert("Incomplete Form");
}else{
alert("Message Sent");

}
});
