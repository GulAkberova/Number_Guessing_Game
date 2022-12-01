let input=document.getElementById('input')
let inp=document.getElementById('inp')
let btn=document.getElementById('btn')
let ipucu=document.getElementById('ipucu')
let try_answer=document.getElementById('try_answer')
let c=Math.floor(Math.random()*10)
console.log(c)
let try_value=1;
btn.addEventListener('click',function(){
    if(input.value<0 || input.value>15){
        input.value=0
        alert('1-15 arasi qeyd edin')
    }
 
    console.log(input.value)
    inp.innerText=input.value

    if(input.value>c){
        ipucu.innerText='Asagi dus :('
    }else if(input.value<c){
        ipucu.innerText='Yuxari qalx :)'

    }else if(input.value=c){
        ipucu.innerText='Perfect :))'
        try_answer.innerText=try_value
            
    }
    try_value++
   
   

})