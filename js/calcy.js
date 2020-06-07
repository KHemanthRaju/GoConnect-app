var output1=document.getElementById("inputLabel")
function pushBtn(obj){
    var state=obj.innerHTML;
    
    if(state=="="){
     output1.innerHTML=eval(output1.innerHTML);
    }
    else if(state=="C"){
        output1.innerHTML='0';
    }
    else{
        if(output1.innerHTML=='0'){
            output1.innerHTML=state;
        }
        else{
            output1.innerHTML+=state;
        }
    }
}