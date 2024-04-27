
document.addEventListener("DOMContentLoaded", function () {
    // Select the big image and all the small images in the grid
    const bigImage = document.querySelector(".BigImage img");
    const smallImages = document.querySelectorAll(".grid-container img");

    // Function to handle image click
    function handleImageClick(event) {
        // Prevent default link behavior
        event.preventDefault();

        // Remove border from previously selected image
        smallImages.forEach(img => {
            img.classList.remove('selected'); // Remove 'selected' class
        });

        // Set border around the clicked image
        this.classList.add('selected'); // Add 'selected' class

        // Update big image source to the clicked image source
        bigImage.src = this.src;
    }

    // Attach click event listener to each small image
    smallImages.forEach(img => {
        img.addEventListener("click", handleImageClick);
    });
});



// buttons
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.grid-container img');
    const prevBtn = document.querySelector('#prev-btn');
    const nextBtn = document.querySelector('#next-btn');
    const pageCounter = document.querySelector('.page-counter');
    const bigImage = document.querySelector('.BigImage img');
    let currentPageIndex = 0;

    function updatePageCounter() {
        pageCounter.textContent = `${currentPageIndex + 1} of ${images.length}`;
    }

    function showPage(pageIndex) {
        currentPageIndex = pageIndex;
        bigImage.src = images[currentPageIndex].src; // Update big image source
        updatePageCounter();
    }

    prevBtn.addEventListener('click', () => {
        currentPageIndex = (currentPageIndex - 1 + images.length) % images.length; // Move to previous image
        showPage(currentPageIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentPageIndex = (currentPageIndex + 1) % images.length; // Move to next image
        showPage(currentPageIndex);
    });

    // Add event listeners to each image to handle manual selection
    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            showPage(index);
        });
    });

    showPage(currentPageIndex);
});

// clothing details
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.grid-container img');
    const prevBtn = document.querySelector('#prev-btn');
    const nextBtn = document.querySelector('#next-btn');
    const pageCounter = document.querySelector('.page-counter');
    const bigImage = document.querySelector('.BigImage img');
    const clothingLinks = document.querySelector('.clothing-links');
    const clothingTexts = [
        ["Satin Hoodie Track Jacket", "Cargo Short", ""], // Texts for image 1
        ["Satin Hoodie Track Jacket", "Cargo Short", ""],
        ["Satin Hoodie Track Jacket", "Cargo Short", ""],
        ["Big Logo Chenille Varsity Jacket", "Distressed Loose Fit Selvedge Jean", "Futura New Era"],
        ["Supreme/Nike SB Darwin Low", "Futura Fishtail Parka", "Contrast Arc Sweater", "Cargo Pant"],
        ["Supreme/Nike SB Darwin Low", "Futura Fishtail Parka", "Contrast Arc Sweater", "Cargo Pant"],
        ["Faux Fur Jacket", "Regular Jean", "Tag Beanie"],
        ["2-in-1 MA-1 + Vest", "Double Knee Painter Pant",],
        ["Brushed Argyle Zip Up Vest", "Shadow Tee", "Rigid Baggy Selvedge"],
        ["Gem Studded Leather Jacket", "Immortal Hooded Sweatshirt", "Warm Up Pant"],
        ["Gem Studded Leather Jacket", "Immortal Hooded Sweatshirt", "Warm Up Pant"],
        ["Supreme/Nike Air Max DN", "Cotten Utility Anorak", "Tag Sweatpant"],
        ["Realtree Reversible Quilted Work Jacket", "Wrapped Sweatpant"],
        ["GORE-TEX Taped Seam Shell Jacket", "Distressed Loose Fit Selvedge Jean", "Tag Beanie"],
        ["GORE-TEX Taped Seam Shell Jacket", "Distressed Loose Fit Selvedge Jean", "Tag Beanie"],
        ["S/S Rugby"],
        ["Denim Chore Trucker Jacket", "Denim Painter Pant", "Futura Lightweight Balaclava"],
        ["GORE-TEX Anorak", "Ultrasuade Mesh Short"],
        ["Wave Varsity Jacket", "Plaid Baggy Short"],
        ["Wave Varsity Jacket", "Plaid Baggy Short"],
        ["Reversible Down Puffer Jacket", "S/S Pocket Tee", "S Logo Loose Fit Jean"],
        ["Supreme/Schott Hooded Leather Bomber Jacket", "Satin Track Pant"],
        ["Stars Sweater", "Satin Track Pant"],
        ["Supreme/Toy Machine Hooded Sweatshirt", "Arc Denim Coaches Jacket", "Regular Jean"],
        ["AOI Hooded Work Jacket", "Faux Fur Short"],
        ["AOI Hooded Work Jacket", "Faux Fur Short"],
        ["Supreme/Hanes Tagless Tank Tops (3 Pack)", "Tray Jacquard S/S Shirt", "Cargo Short"],
        ["Supreme/Toy Machine Zip Up Hooded Sweater", "Nylon Cargo Pant"],
        ["Supreme/nike Air Max DN", "S Logo Denim Trucker Jacket", "Contact S/S Top, Slogo Loose Fit Jean"],
        ["Supreme/nike Air Max DN", "S Logo Denim Trucker Jacket", "Contact S/S Top, Slogo Loose Fit Jean"],
        ["Muppet Fleece Jacket", "Immortal Hooded Sweatshirt", "S Logo Loose Fit Jean"],
        ["Futura Box Logo Tee", "Sharpie Box Logo New Era"],

    ];
    let currentPageIndex = 0;

    function updatePageCounter() {
        pageCounter.textContent = `${currentPageIndex + 1} of ${images.length}`;
    }

    function updateClothingLinks() {
        const textArray = clothingTexts[currentPageIndex];
        const links = clothingLinks.querySelectorAll('a');
        links.forEach((link, index) => {
            link.textContent = textArray[index];
        });
    }

    function showPage(pageIndex) {
        currentPageIndex = pageIndex;
        bigImage.src = images[currentPageIndex].src; // Update big image source
        updatePageCounter();
        updateClothingLinks(); // Update clothing links

        // Remove border from previously selected image
        images.forEach((image) => {
            image.classList.remove('selected');
        });

        // Add border to currently selected image
        images[currentPageIndex].classList.add('selected');
    }

    prevBtn.addEventListener('click', () => {
        currentPageIndex = (currentPageIndex - 1 + images.length) % images.length; // Move to previous image
        showPage(currentPageIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentPageIndex = (currentPageIndex + 1) % images.length; // Move to next image
        showPage(currentPageIndex);
    });

    // Add event listeners to each image to handle manual selection
    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            showPage(index);
        });
    });

    showPage(currentPageIndex);
});




