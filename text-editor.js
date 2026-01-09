const inp = document.getElementById("inp1")
const inp1 = document.getElementById("inp2")
const inp2 = document.getElementById("inp3")
const inp3 = document.getElementById("inp4")
const he1 = document.getElementById("he1")
const he2 = document.getElementById("he2")
const he3 = document.getElementById("he3")
const bts1 = document.getElementById("bts1")
const bts2 = document.getElementById("bts2")
const bts3 = document.getElementById("bts3")
const bts4 = document.getElementById("bts4")
const bts5 = document.getElementById("bts5")
const text = document.getElementById("textarea")
const btn = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const det = document.getElementById("det")
const det1 = document.getElementById("det1")
const bos = document.getElementById("bos")
const inp5 = document.getElementById("inp5")
const inp6 = document.getElementById("inp6")
const inp7 = document.getElementById("inp7")
const inp8 = document.getElementById("inp8")
const rudios = document.getElementById("rudios")
he3.style.border = "4px solid black" ;
inp.value = "#ffffff"
inp2.value = "13.3"
let m;

addEventListener("input", function(){
        text.style.color = inp1.value
        text.style.background = inp.value
        text.style.fontSize = inp2.value * 2 + "px"
        
})
btn.addEventListener("click", function(){
if(text.style.textShadow === ""){
            text.style.textShadow = `0.3em 0.3em 0.2em ${inp3.value}`
            btn.style.transition = "0.4s"
            btn.style.background = "#88ff00ff"
             m = true

}
else{
            text.style.textShadow = ""
            btn.style.background = "red"
}


})
btn2.addEventListener("click", function(){
if(text.style.fontWeight === ""){
            text.style.fontWeight = `bold`
            btn2.style.transition = "0.4s"
            btn2.style.background = "#cbfed7ff"

}
else{
            text.style.fontWeight = ""
            btn2.style.background = "#f9c1c1ff"
}


})


inp3.addEventListener("input", function(){
if(m == true && btn.style.background !== "red"){
            text.style.textShadow = `0.3em 0.3em 0.2em ${inp3.value}`


}


})
he1.addEventListener("click", function(){
        he1.style.transition = "0.2s"
                he3.style.transition = "0.2s"
        he2.style.transition = "0.2s"

he1.style.border = "4px solid black" ;
he2.style.border = "4px solid gray" ;
he3.style.border = "4px solid gray" ;
text.style.textAlign = "left"


})
he2.addEventListener("click", function(){
        he1.style.transition = "0.2s"
        he2.style.transition = "0.2s"
        he3.style.transition = "0.2s"

he2.style.border = "4px solid black" ;
he1.style.border = "4px solid gray" ;
he3.style.border = "4px solid gray" ;

text.style.textAlign = "center"


})
he3.addEventListener("click", function(){
        he2.style.transition = "0.2s"
        he1.style.transition = "0.2s"
        he3.style.transition = "0.2s"

he3.style.border = "4px solid black" ;
he2.style.border = "4px solid gray" ;
he1.style.border = "4px solid gray" ;

text.style.textAlign = "right"


})

bts1.addEventListener("click", function(){
text.style.fontFamily = "cursive"
bts1.style.border = "4px dashed"
bts2.style.border = "2px dashed"
bts3.style.border = "2px dashed"
bts5.style.border = "2px dashed"
bts6.style.border = "2px dashed"

})
bts2.addEventListener("click", function(){
text.style.fontFamily = "Georgia, 'Times New Roman', Times, serif"
bts2.style.border = "4px dashed"
bts1.style.border = "2px dashed"
bts3.style.border = "2px dashed"
bts3.style.border = "2px dashed"
bts4.style.border = "2px dashed"
bts5.style.border = "2px dashed"
bts6.style.border = "2px dashed"

})
bts3.addEventListener("click", function(){
text.style.fontFamily = "Arial, Helvetica, sans-serif"
bts3.style.border = "4px dashed"
bts2.style.border = "2px dashed"
bts1.style.border = "2px dashed"
bts4.style.border = "2px dashed"
bts5.style.border = "2px dashed"
bts6.style.border = "2px dashed"

})
bts4.addEventListener("click", function(){
text.style.fontFamily = "Impact, fantasy"
bts4.style.border = "4px dashed"
bts2.style.border = "2px dashed"
bts1.style.border = "2px dashed"
bts3.style.border = "2px dashed"
bts5.style.border = "2px dashed"
bts6.style.border = "2px dashed"

})
bts5.addEventListener("click", function(){
text.style.fontFamily = '"Segoe Script", "Brush Script MT", "Comic Sans MS", cursive'
bts5.style.border = "4px dashed"
bts2.style.border = "2px dashed"
bts1.style.border = "2px dashed"
bts3.style.border = "2px dashed"
bts4.style.border = "2px dashed"
bts6.style.border = "2px dashed"

})
bts6.addEventListener("click", function(){
text.style.fontFamily =   '"Rubik Wet Paint", system-ui';

bts6.style.border = "4px dashed"
bts2.style.border = "2px dashed"
bts1.style.border = "2px dashed"
bts3.style.border = "2px dashed"
bts4.style.border = "2px dashed"
bts5.style.border = "2px dashed"

})
text.style.fontFamily =   '"Rubik Wet Paint", system-ui';

inp5.addEventListener("input", function(){
if( Number(inp5.value) > 1600){
inp5.value = 1600

}


text.style.width = `${inp5.value}px`

})
inp6.addEventListener("input", function(){
if( Number(inp6.value) > 500){
inp6.value = 500

}
text.style.height = `${inp6.value}px`
})
det.addEventListener('toggle', function(){
if(det.open) det1.open = false;


});
det1.addEventListener('toggle', function(){
if(det1.open) det.open = false;
})
inp7.addEventListener("input", function(){
        if(inp7.value > 15) inp7.value = 15
        else if(inp7.value < 0) inp7.value = 0
text.style.border = `${inp7.value}px solid ${inp8.value}`
})
inp8.addEventListener("input", function(){
text.style.borderColor = `${inp8.value}`
})
rudios.addEventListener("input", function(){
text.style.borderRadius = `${rudios.value}px`        
})
