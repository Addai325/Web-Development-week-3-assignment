/* 
     Name: Ransford Addai
     Training ID: 32524 
     Week Three(3) Assignment

*/





document.addEventListener('DOMContentLoaded', function () {
  // Geting all accordion headers
  var accordionHeaders = document.querySelectorAll('.accordion-header');

  // Adding click event listeners to each header
  accordionHeaders.forEach(function (header) {
    header.addEventListener('click', function () {
      // Get the parent accordion section
      var accordionSection = this.parentNode;

      // Checking if the clicked section is already active
      var isActive = accordionSection.classList.contains('active');

      // Removing 'active' class from all sections
      var allSections = document.querySelectorAll('.accordion-section');
      allSections.forEach(function (section) {
        section.classList.remove('active');
      });

      // Adding 'active' class if not already active
      if (!isActive) {
        accordionSection.classList.add('active');
      }
    });
  });
});
