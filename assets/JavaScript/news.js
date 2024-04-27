document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.carousel img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const pageCounter = document.querySelector('.page-counter'); // Select the page counter element
    let currentPageIndex = 0;
  
    function updateButtonVisibility() {
      prevBtn.style.display = currentPageIndex === 0 ? 'none' : 'block';
      nextBtn.style.display = currentPageIndex === images.length - 1 ? 'none' : 'block';
    }
  
    function updatePageCounter() {
      pageCounter.textContent = `${currentPageIndex + 1} of ${images.length}`; // Update page counter text
    }
  
    function showPage(pageIndex) {
      images.forEach((image, index) => {
        if (index === pageIndex) {
          image.style.display = 'block';
        } else {
          image.style.display = 'none';
        }
      });
      currentPageIndex = pageIndex;
      updateButtonVisibility();
      updatePageCounter(); // Update the page counter when showing a new page
    }
  
    prevBtn.addEventListener('click', () => {
      if (currentPageIndex > 0) {
        showPage(currentPageIndex - 1);
      }
    });
  
    nextBtn.addEventListener('click', () => {
      if (currentPageIndex < images.length - 1) {
        showPage(currentPageIndex + 1);
      }
    });
  
    showPage(currentPageIndex); // Show initial page
  });

  