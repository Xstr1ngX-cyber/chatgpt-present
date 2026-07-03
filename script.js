const slide = document.getElementById("slide");

const next = document.getElementById("next");

const prev = document.getElementById("prev");

const progress = document.getElementById("progress");

let current = 0;

/* ========================= */

function renderSlide(){

    slide.classList.remove("fade");

    void slide.offsetWidth;

    slide.classList.add("fade");

    slide.innerHTML = `

        <div class="slide-title">

            ${slides[current].title}

        </div>

        <div class="slide-content">

            ${slides[current].content}

        </div>

    `;

    progress.innerHTML = `${current+1} / ${slides.length}`;

    prev.disabled = current===0;

    if(current===slides.length-1){

        next.innerHTML="Finish";

    }

    else{

        next.innerHTML="Next";

    }

}

/* ========================= */

next.onclick = ()=>{

    if(current<slides.length-1){

        current++;

        renderSlide();

    }

    else{

        alert("Thank you for reading.\n\n— ChatGPT");

    }

}

/* ========================= */

prev.onclick = ()=>{

    if(current>0){

        current--;

        renderSlide();

    }

}

/* ========================= */
/* Keyboard */

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        next.click();

    }

    if(e.key==="ArrowLeft"){

        prev.click();

    }

});

/* ========================= */
/* Swipe Mobile */

let startX=0;

let endX=0;

slide.addEventListener("touchstart",(e)=>{

    startX=e.touches[0].clientX;

});

slide.addEventListener("touchend",(e)=>{

    endX=e.changedTouches[0].clientX;

    if(startX-endX>60){

        next.click();

    }

    if(endX-startX>60){

        prev.click();

    }

});

/* ========================= */

renderSlide();

