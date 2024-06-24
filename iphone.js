
// Sự kiện nút dừng và phát
var video = document.getElementById('video1');
var Btn = document.getElementById('playPause');
var Icon = document.getElementById('playPauseIcon');

Btn.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        Icon.name = "pause-outline";
    } else {
        video.pause();
        Icon.name = "play-outline";
    }
});

// Sự kiện nổi ảnh lên
$(document).ready(function(){
    $('.box2anh-nho').hover(
        function() {
            $(this).addClass('hover');
        }, function() {
            $(this).removeClass('hover');
        }
    );
});

// Sự kiện chuyển ảnh box2
$(document).ready(function() {
    $('#trai').click(function() {
        let currentLeft = $('.box2anh').scrollLeft();
        $('.box2anh').animate({ scrollLeft: currentLeft - 400 }, 300);
    });

    $('#phai').click(function() {
        let currentLeft = $('.box2anh').scrollLeft();
        $('.box2anh').animate({ scrollLeft: currentLeft + 400 }, 300);
    });
});

// Sự kiện chuyển ảnh box3
$(document).ready(function() {
    $('#trai3').click(function() {
        let currentLeft = $('.box3anh').scrollLeft();
        $('.box3anh').animate({ scrollLeft: currentLeft - 400 }, 300);
    });

    $('#phai3').click(function() {
        let currentLeft = $('.box3anh').scrollLeft();
        $('.box3anh').animate({ scrollLeft: currentLeft + 400 }, 300);
    });
});

//hien box an
var anh = document.querySelectorAll('.box2anh-nho');
console.log(anh);
var popup = document.querySelectorAll('.box-an');
console.log(popup);
anh.forEach(function(box, index) {
    box.addEventListener('click', function() {
        popup[index].style.display = 'block';
    });
});

popup.forEach(function(popup) {
    var closeButton = popup.querySelector('#close');
    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});

window.addEventListener('click', function(event) {
    popup.forEach(function(popup) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});