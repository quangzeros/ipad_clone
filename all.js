// Video Element
document.addEventListener('DOMContentLoaded', (event) => {
    const videos = document.querySelectorAll('.videoElement');
    videos.forEach((video) => {
        const replayButton = video.nextElementSibling;
        video.play();
        video.onended = function() {
            replayButton.style.display = 'block';
        };
        replayButton.addEventListener('click', function() {
            video.play();
            replayButton.style.display = 'none';
        });
        video.addEventListener('click', function() {
            if (video.paused || video.ended) {
                video.play();
                replayButton.style.display = 'none';
            } else {
                video.pause();
            }
        });
    });
});

// <!--xử lý hiển thị screen-->

    document.querySelectorAll(".myDiv").forEach(div => {
        div.addEventListener("click", function() {
            this.nextElementSibling.style.display = "block";
        });
    });

    document.querySelectorAll(".close1, .close2").forEach(span => {
        span.addEventListener("click", function() {
            this.parentElement.style.display = "none";
        });
    });

    window.addEventListener("click", function(event) {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
        }
    });

// <!--quay về đầu trang-->

    $(document).ready(function(){
        $(window).scroll(function(){ 
            if($(this).scrollTop()){ 
                $(".button-top").fadeIn(); 
            }
            else{ 
                $(".button-top").fadeOut(); 
            } 
            $(".botton-top").click(function(){ 
                $("html,body").animate({scrollTop:0},2000); 
            }); 
        }); 
    });

// <!--dừng video-->

    function myFunction() {
        var myVideo = document.getElementById("myVideo");
        var myBtn = document.getElementById("myBtn");
        if (myVideo.paused) {
            myVideo.play();
            myBtn.name = "pause";
        } else {
            myVideo.pause();
            myBtn.name = "play";
        }
    }

