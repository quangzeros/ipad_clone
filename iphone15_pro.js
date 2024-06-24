var divs = ['div1', 'div2', 'div3'];
var buttons = ['button1', 'button2', 'button3'];

buttons.forEach(function(buttonId, index) {
    document.getElementById(buttonId).addEventListener('click', function() {
        divs.forEach(function(divId) {
            var div = document.getElementById(divId);
            div.style.display = 'none';
            div.style.justifyContent = 'center'; 
            div.style.alignItems = 'center';
        });

        document.getElementById(divs[index]).style.display = 'flex';
        document.getElementById(buttonId).classList.add('active');
    });
});


//box3
var divss = ['div4', 'div5', 'div6', 'div7', 'div8'];
var buttonss = ['button4', 'button5', 'button6', 'button7', 'button8'];

buttonss.forEach(function(buttonId, index) {
    document.getElementById(buttonId).addEventListener('click', function() {
        divss.forEach(function(divId) {
            var div = document.getElementById(divId);
            div.style.display = 'none';
            div.style.justifyContent = 'center';
            div.style.alignItems = 'center';
        });

        document.getElementById(divss[index]).style.display = 'flex';
        document.getElementById(buttonId).classList.add('active');
    });
});

//box7
var images = document.querySelectorAll('.box7anh-nho');
var i = 0;
images[i].style.display = 'block';
var left = document.getElementById('trai7');
var right = document.getElementById('phai7');
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