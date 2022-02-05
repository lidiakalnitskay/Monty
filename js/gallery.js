const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', function(event) {
    const thumbnail = event.target.closest('a');

    if (!thumbnail) return;
    showThumbnail(thumbnail.href);
    event.preventDefault();
})

function showThumbnail(href) {
    largeImg.src = href;
}