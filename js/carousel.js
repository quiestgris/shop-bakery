"use strict"
const leftArrow = document.querySelector(".carousel-btn");
const rightArrow = document.querySelector(".carousel-btn.reverse");
const formatsItems = document.querySelectorAll(".formats-item");
const carouselCircles = document.querySelectorAll('.carousel-circle')
const carouselInner = document.querySelector('.formats-list');
const addedFormatsItems = document.querySelectorAll("#added-formats-item");
const widthOfFormatsItems = formatsItems[0].offsetWidth;
let positioningOne = 3;
let positioningTwo = 30;



// for (let i = 3; i <= formatsItems.length - 1; i++) {
//         formatsItems[i].style.width = widthOfFormatsItems + "px";
//         formatsItems[i].style.left = (widthOfFormatsItems * positioningOne) + positioningTwo + 'px';
//         positioningOne += 1;
//         positioningTwo += 10;
//     console.log(widthOfFormatsItems)
// }

let count = 0;
let countOfAddedItems = 1;
let swipePosition = widthOfFormatsItems + 10;
let rightButtonPressed = true;
let deletedItems = false;



function rightSwipe() {
    if (!rightButtonPressed) {swipePosition += widthOfFormatsItems + 10;}
    carouselCircles[count].style.backgroundColor = "var(--secondary-dark-color)";
    count++;
    if (count >= 0) {
        if (countOfAddedItems == 4) {
            deletedItems = true;
            countOfAddedItems = 1; console.log("worked");
            document.querySelectorAll(".formats-item:first-child,.formats-item:nth-child(2), .formats-item:nth-child(3)").forEach((e) => e.remove());
            swipePosition -= 10;
        }
        else {
            let item = document.querySelector(`.formats-item:nth-child(${countOfAddedItems})`).cloneNode(true);
            // document.querySelector(".formats-item").remove();
            carouselInner.appendChild(item);
            countOfAddedItems++;
        }
    }
    carouselInner.scrollTo({
            top: 0,
            left: swipePosition,
            behavior: "smooth",
    })
    if (deletedItems) {
        deletedItems = false;
        carouselInner.scrollTo({
            top: 0,
            left: swipePosition,
            behavior: "smooth",
        });
    }
    rightButtonPressed = true;
    swipePosition += widthOfFormatsItems + 10;
    if (count == 6) { count = 0;};
    carouselCircles[count].style.backgroundColor = "var(--brand-light-color)";
}

function leftSwipe() {
    swipePosition -= widthOfFormatsItems + 10;
    if (rightButtonPressed) { swipePosition -= widthOfFormatsItems + 10; rightButtonPressed = false}
    carouselCircles[count].style.backgroundColor = "var(--secondary-dark-color)";
    carouselInner.scrollTo({
        top: 0,
        left: swipePosition,
        behavior: "smooth",
    })
    count--;
    if (count == -1) count = 5;
    carouselCircles[count].style.backgroundColor = "var(--brand-light-color)";
}


rightArrow.addEventListener("click", rightSwipe);
leftArrow.addEventListener('click', leftSwipe);