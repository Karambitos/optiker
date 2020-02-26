'use strict';

document.addEventListener('DOMContentLoaded', () => {
   
        const BtBrillengläser = document.querySelector('.Brillengläser');
        const DropDownBrillengläser = document.querySelector('.Brillengläser-nav__drop');
        const BtBrillenfassungen = document.querySelector('.Brillenfassungen');
        const DropDownBrillenfassungen = document.querySelector('.Brillenfassungen-nav__drop');
        const BtKontaktlinsen = document.querySelector('.Kontaktlinsen');
        const DropDownKontaktlinsen = document.querySelector('.Kontaktlinsen-nav__drop');

        BtBrillengläser.addEventListener("mouseenter", (event) => {
            event.preventDefault();
            DropDownBrillengläser.classList.add("modal__show");
         });

        BtBrillengläser.addEventListener("mouseleave", (event) => {
            event.preventDefault();
            DropDownBrillengläser.classList.remove("modal__show");
         });

         BtBrillenfassungen.addEventListener("mouseenter", (event) => {
            event.preventDefault();
            DropDownBrillenfassungen.classList.add("modal__show");
         });

         BtBrillenfassungen.addEventListener("mouseleave", (event) => {
            event.preventDefault();
            DropDownBrillenfassungen.classList.remove("modal__show");
         });

         BtKontaktlinsen.addEventListener("mouseenter", (event) => {
            event.preventDefault();
            DropDownKontaktlinsen.classList.add("modal__show");
         });

         BtKontaktlinsen.addEventListener("mouseleave", (event) => {
            event.preventDefault();
            DropDownKontaktlinsen.classList.remove("modal__show");
         });


         const spinner = document.querySelector('.spinner');
         const spinnerButton = document.querySelectorAll('.spinner-line');
       
         // ФУНКЦИЯ отображает и добавляет класс спинеру
         const spinnerClassToggle = () => {
               // spinerMenu.classList.toggle("modal-show");
               spinnerButton.forEach(elem => {
               elem.classList.toggle("active")  
               });    
            };
        // ============================================ 

        // Боковое меню (работа спинера)
        spinner.addEventListener('click', (event) => {
           console.log("click")
         event.preventDefault();
         spinnerClassToggle();
      });

});