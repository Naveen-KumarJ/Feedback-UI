let cancelBtn = document.getElementById("cancel-btn");
let sendBtn = document.getElementById("send-btn");
let eachOptionList = document.querySelectorAll(".each-option");
let feedbackContainer = document.querySelector(".feedback-container");
let outputContainer = document.querySelector(".output-container");
cancelBtn.addEventListener('click',()=>{
    window.location.reload();
})
let finalIndex = -1;
// console.log(eachOptionList);
eachOptionList.forEach((eachOption,idx)=>{
    eachOption.addEventListener('click',function(e){
        console.log(e);
        if(e.target.className==="each-option" || e.target.nodeName==="IMG" || e.target.nodeName==="H4"){
            eachOptionList.forEach((element,i)=>{
                if(idx===i){
                    eachOptionList[i].style.color="white";
                    eachOptionList[i].style.backgroundColor="#8FBC8F";
                }else{
                    eachOptionList[i].style.color="black";
                    eachOptionList[i].style.backgroundColor="white";
                } 
            })
        }
        finalIndex = idx;
        // console.log(finalIndex); 
    })
});

sendBtn.addEventListener('click',function(){
    if(finalIndex!==-1){
        feedbackContainer.style.display="none";
        outputContainer.style.display="flex";
        let outputHtmlCode = `
            <h4>Thank You !</h4>
            <h4 id="option-output">Feedback: ${eachOptionList[finalIndex].innerText}</h4>
            <p>We'll use your feedback to improve our customer support.</p>
        `;
        outputContainer.innerHTML = outputHtmlCode;
    }
})