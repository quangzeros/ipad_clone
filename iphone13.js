var images = document.querySelectorAll('.box1anh-nho');
var i = 0;
images[i].style.display = 'block';
var left = document.getElementById('trai1');
var right = document.getElementById('phai1');
left.addEventListener('click', function() {
    images[i].style.display = 'none';
    i++;
    if (i >= images.length) {
        i = 0;
    }
    images[i].style.display = 'block';
});
right.addEventListener('click', function() {
    images[i].style.display = 'none';
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    images[i].style.display = 'block';
});

// Sự kiện chuyển ảnh box11
$(document).ready(function() {
    $('#trai11').click(function() {
        let currentLeft = $('.box11anh').scrollLeft();
        $('.box11anh').animate({ scrollLeft: currentLeft - 400 }, 300);
    });

    $('#phai11').click(function() {
        let currentLeft = $('.box11anh').scrollLeft();
        $('.box11anh').animate({ scrollLeft: currentLeft + 400 }, 300);
    });
});