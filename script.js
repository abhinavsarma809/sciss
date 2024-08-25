const buttons = document.querySelectorAll(".btn");
const cdisplay = document.getElementById('demo21');
const hdisplay = document.getElementById('demo12');
const rock = document.getElementById('demo3');
const paper = document.getElementById('demo5');
const sciss = document.getElementById('demo4');
const rule = document.getElementById('demo6');
const pop = document.getElementById('popup');
//const a = document.getElementById('demo31');
//const b = document.getElementById('demo41');



let pclick = " ";
let cick = " ";
let cscore = 0;
let hscore = 0;



function human(value) {
    if (value === rock.textContent || value === paper.textContent || value === sciss.textContent) {
        pclick = value;
        computer();
    }
}

function computer() {
    let options = [rock.textContent, paper.textContent, sciss.textContent];
    cick = options[Math.floor(Math.random() * options.length)];
    game();
}

function game() {


    if (
        (pclick === rock.textContent && cick === sciss.textContent) ||
        (pclick === paper.textContent && cick === rock.textContent) ||
        (pclick === sciss.textContent && cick === paper.textContent)
    ) {
        hscore += 1;
        hdisplay.textContent = hscore;
   
    } else {
        cscore += 1;
        cdisplay.textContent = cscore;
        

    }

}


//if (hdisplay > cdisplay){
//    a.textContent = pclick;
//    b.textContent = cick;
//
//}




buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        human(value);
    });
});


rule.addEventListener('click',()=>{
    if(cscore === 0 && hscore === 0){
        pop.style.display="block";
        setTimeout(()=>{
            pop.style.display = 'none';
        },3000);
    }
});

