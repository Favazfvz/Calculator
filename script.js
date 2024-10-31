


const displayContent=(data)=>{


    output.value+=data
}
const clearAllContent=()=>{

    output.value+=''

}
const clearLast=()=>{
    output.value=output.value.slice(0,-1)
}
        
const showResult=()=>{
    try{
    output.value=eval(output.value)
    }
    catch(err){
        console.log(err);
        output.value=""
        output.placeholder="invalid expression"
        
    }
    finally{
        console.log('task completed');
        
    }
}
   

