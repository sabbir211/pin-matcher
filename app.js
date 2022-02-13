document.getElementById('generatePin').addEventListener("click" ,function () {
    const randNum=Math.round(Math.random()*9000+1000)
    console.log(randNum);
    document.getElementById("pinGenerateInput").value=randNum
})
document.getElementById("calcBody").addEventListener("click",function(event){
const inputField=document.getElementById("matchingInput")

const capturedText=event.target.innerText
if(capturedText=="C"){
    inputField.value=""
}
else if(capturedText=="<"){
    
inputField.value=inputField.value.slice(1)
}
else if(capturedText!="Submit"){
    inputField.value=inputField.value +capturedText
}
})
document.getElementById('submitBtn').addEventListener("click",function(){
    const inputField=document.getElementById("matchingInput")
    const inputValue=inputField.value
    const pin= document.getElementById("pinGenerateInput");
    const pinValue=pin.value
  const matched= document.getElementById("matched")
  const didNotMatched= document.getElementById("didNotMatched")
    if(inputValue==pinValue){
        matched.style.display="block"
        didNotMatched.style.display="none"
    }
    else{
        didNotMatched.style.display="block"
        matched.style.display="none"

    }
  
inputField.value=""
pin.value=''
})