document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.products_container');
    const slideItems = document.getElementsByClassName('product_item');
    let position = 0; // Initial position at the start of the slider

    document.querySelector('.prev_button').addEventListener('click', function () {
        if (position > 0) {
            position -= (slideItems[0].offsetWidth + (container.offsetWidth * 0.03)); // Move back including the gap
            container.scrollLeft = position;
        }
    });

    document.querySelector('.next_button').addEventListener('click', function () {
        const totalWidth = slideItems[0].offsetWidth * slideItems.length + (container.offsetWidth * 0.03 * (slideItems.length - 1)); // Total width including gaps
        if (position < totalWidth - container.offsetWidth) {
            position += (slideItems[0].offsetWidth + (container.offsetWidth * 0.03)); // Move forward including the gap
            container.scrollLeft = position;
        }
    });
});
