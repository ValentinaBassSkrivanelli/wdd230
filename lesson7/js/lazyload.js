const lazy = document.querySelectorAll("[data-src]");

function placeholderImage(img) {
    const srcImage = img.getAttribute("data-src");
    if (!srcImage) {
        return;
    }
    img.src = srcImage;
}

const setsImages = {};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            placeholderImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, setsImages); 

lazy.forEach(image => {
    imgObserver.observe(image);
});

