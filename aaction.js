
document.addEventListener("DOMContentLoaded", function () {
    const containerTits = document.querySelectorAll(".container-titulos");

    const f1 = "formacion1";
    const f2 = "formacion2";
    const f3 = "formacion3";

    containerTits.forEach(function (containerTits) {
        containerTits.addEventListener("click", function () {
            const target = this.getAttribute("data-target");
            const containerCards = document.querySelector(`.container-cards[data-target="${target}"]`);

            if (containerCards.style.display === "none" || containerCards.style.display === "") {
                containerCards.style.display = "grid";
            } else {
                containerCards.style.display = "none";
            }

            switch(target) {
                case  f1:
                    var card2 = document.querySelector(`.container-cards[data-target="${f2}"]`);
                    card2.style.display = "none";
                    var card3 = document.querySelector(`.container-cards[data-target="${f3}"]`);
                    card3.style.display = "none";
                    break;
                case  f2:
                    var card1 = document.querySelector(`.container-cards[data-target="${f1}"]`);
                    card1.style.display = "none";
                    var card3 = document.querySelector(`.container-cards[data-target="${f3}"]`);
                    card3.style.display = "none";
                    break; 
                case  f3:
                    var card1 = document.querySelector(`.container-cards[data-target="${f1}"]`);
                    card1.style.display = "none";
                    var card2 = document.querySelector(`.container-cards[data-target="${f2}"]`);
                    card2.style.display = "none";
                    break; 
            }    
            containerCards.scrollIntoView({ behavior: "smooth" });
    
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const containerTits = document.querySelectorAll(".nav-link");

    const f1 = "formacion1";
    const f2 = "formacion2";
    const f3 = "formacion3";

    containerTits.forEach(function (containerTits) {
        containerTits.addEventListener("click", function () {
            const target = this.getAttribute("data-target");
            const containerCards = document.querySelector(`.container-cards[data-target="${target}"]`);

            if (containerCards.style.display === "none" || containerCards.style.display === "") {
                containerCards.style.display = "grid";
            } else {
                containerCards.style.display = "none";
            }
        
            switch(target) {
                case  f1:
                    var card2 = document.querySelector(`.container-cards[data-target="${f2}"]`);
                    card2.style.display = "none";
                    var card3 = document.querySelector(`.container-cards[data-target="${f3}"]`);
                    card3.style.display = "none";
                    break;
                case  f2:
                    var card1 = document.querySelector(`.container-cards[data-target="${f1}"]`);
                    card1.style.display = "none";
                    var card3 = document.querySelector(`.container-cards[data-target="${f3}"]`);
                    card3.style.display = "none";
                    break; 
                case  f3:
                    var card1 = document.querySelector(`.container-cards[data-target="${f1}"]`);
                    card1.style.display = "none";
                    var card2 = document.querySelector(`.container-cards[data-target="${f2}"]`);
                    card2.style.display = "none";
                    break; 
            }   
            containerCards.scrollIntoView({ behavior: "smooth" });
     
        });
    });
});
