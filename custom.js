let p1 =document.getElementById("p1");
let p2 =document.getElementById("p2");
const result =document.getElementById("result");
const answer =document.getElementById("answer");
const ans=document.getElementById("ans");

function calculate(){
    let person1=p1.value;
    let person2=p2.value;
    let x = Math.floor((Math.random()*11)+90);
    answer.textContent=person1+" loves you "+x +"% 💜🌹";
    switch(x){
        case 90:
            ans.textContent="j vaye ni maya ta raexa ni!!!🥺🥺🥺"
            break;
        
        case 91:
            ans.textContent="kei hola jasto xa hai 😝😝"
            break;

        case 92:
            ans.textContent="Maya ta tmrai lagxa ni😘😘"
            break;

        case 93:
            ans.textContent="Tmrai yaad aauxa malai!!!💓"
            break;

        case 94:
            ans.textContent="Samanda junivari ko 🌹"
            break;

        case 95:
            ans.textContent="K garnu maya ta 100% nai ho tara family pani xa ni!!🌍"
            break;

        case 96:
            ans.textContent="Dhukduki tmro maya hamro"+x+"% 💓💓";
            break;

        case 97:
            ans.textContent="Juni vari lai maya garxu juni varilai ❣"
            break;

        case 98:
            ans.textContent="Maya!!! Bhagyamani xau timi!!😘!"
            break;

        case 99:
            ans.textContent="Exam ma ta 99 aayena mero maya ma 99% aako xa khusi mana💍"
            break;

        case 100:
            ans.textContent="Kati dherai maya ho vanya love calculator fadhdinu vayo!!!💍🌍💓🌹"
            break;
    }
    
}


