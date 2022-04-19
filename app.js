const accordionItems = document.querySelectorAll('.accordionItem');

const closeAllItems = () => {
  accordionItems.forEach((accordion) => {
    accordion.classList.remove('active');
  });
};

accordionItems.forEach((accordion) => {
  accordion.addEventListener('click', function () {
    let wasItOpen = accordion.classList.contains('active');
    closeAllItems();
    if (wasItOpen === false) {
      accordion.classList.add('active');
    }
  });
});



// My solution - it just switch between opening the items but does not close them when I click on the same item twice
// ==================================================================================================================


/*const accordionItems = document.getElementsByClassName('accordionItem');

function openAccordionItem(openedItem) {
  for (i=0; i < accordionItems.length; i++) {
    if (accordionItems[i]===openedItem) {
      accordionItems[i].classList.add("active");
      accordionItems[i].ariaChecked=true;
    } else {
      accordionItems[i].classList.remove("active");
      accordionItems[i].ariaChecked=false;
    }
  }
}

for (i=0; i < accordionItems.length; i++) {
  accordionItems[i].addEventListener('click', function () {
    openAccordionItem(this);
  })
}*/
