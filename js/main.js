const regions = document.querySelectorAll('.region');
const popupBg = document.querySelector('.map_popup');
const popup = document.querySelector('.popup_info');
regions.forEach(region => {
    region.addEventListener('click', function(){
        popup.querySelector('.info_photo').setAttribute('src', this.dataset.photo);
        popup.querySelector('.info_title').innerText = this.dataset.title;
        popup.querySelector('.info_text').innerText = this.dataset.description;
        popupBg.classList.add('active');
    });
});

document.addEventListener('click', (e)=>{
    if(e.target === popupBg){
        popupBg.classList.remove('active');
    };
});

const horizontalScroll = document.querySelector('.last_news_text');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

rightBtn.addEventListener("click", ()=>{
    horizontalScroll.style.scrollBehavior = "smooth";
    horizontalScroll.scrollLeft += 1692;
});
leftBtn.addEventListener("click", ()=>{
    horizontalScroll.style.scrollBehavior = "smooth";
    horizontalScroll.scrollLeft -= 1692;
});
