var welcome_control_btn = document.querySelector(
  ".section__welcome__video__control"
);

window.addEventListener("load", (event) => {});

document.addEventListener("DOMContentLoaded", (event) => {});

// Tạo một thể hiện của IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  let time = 100;
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Nếu phần tử được quan sát hiện tại nằm trong viewport
      // Thực hiện các hành động mong muốn, chẳng hạn như hiển thị nội dung hoặc thực hiện một hiệu ứng động.
      setTimeout(() => {
        entry.target.classList.add("animate-downtop");
      }, time);
      time += 100;
      // Ngừng quan sát phần tử này để tối ưu hiệu suất
      observer.unobserve(entry.target);
    }
  });
});

const observerTitle = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Nếu phần tử được quan sát hiện tại nằm trong viewport
      // Thực hiện các hành động mong muốn, chẳng hạn như hiển thị nội dung hoặc thực hiện một hiệu ứng động.
      entry.target.classList.add("animate-downtop");
      // Ngừng quan sát phần tử này để tối ưu hiệu suất
      observerTitle.unobserve(entry.target);
    }
  });
});

// Chọn phần tử bạn muốn quan sát
const img_label = document.querySelector(".section__image__label");
const img_item = document.querySelectorAll(".image__item");
const disc_label = document.querySelector(".section__discovery__heading");
const ipad_item = document.querySelectorAll(".ipad__item");
const info_box = document.querySelectorAll(
  ".section__discovery__infor .info__box"
);
const perfect_label = document.querySelector(".section__perfect__heading");
const accessory_item = document.querySelectorAll(".section__accessory__box");
const why_box = document.querySelectorAll(".why__box");
const accessory_label = document.querySelector(".section__accessory__heading");
const why_label = document.querySelector(".section__why__heading");
const perfect_content = document.querySelector(".section__perfect__content");
// Gọi phương thức observe() của đối tượng IntersectionObserver để bắt đầu giám sát
observerTitle.observe(img_label);
observerTitle.observe(disc_label);
observerTitle.observe(accessory_label);
observerTitle.observe(why_label);
observerTitle.observe(perfect_label);
observerTitle.observe(perfect_content);
// Animation slight down to top
img_item.forEach((e) => {
  observer.observe(e);
});
ipad_item.forEach((e) => {
  observer.observe(e);
});
info_box.forEach((e) => {
  observer.observe(e);
});
accessory_item.forEach((e) => {
  observer.observe(e);
});
why_box.forEach((e) => {
  observer.observe(e);
});

// dieu khien video o Home
welcome_control_btn.addEventListener("click", (e) => {
  let video = document.querySelector(".section__welcome__video");
  let pause_icon = document.querySelector(".control-icon-pause");
  let play_icon = document.querySelector(".control-icon-play");
  if (video.paused) {
    video.play();
    pause_icon.classList.add("show");
    pause_icon.classList.remove("hide");
    play_icon.classList.add("hide");
    play_icon.classList.remove("show");
  } else {
    video.pause();
    pause_icon.classList.add("hide");
    pause_icon.classList.remove("show");
    play_icon.classList.add("show");
    play_icon.classList.remove("hide");
  }
});

//Khi click vao image
document.querySelector(".section__image").addEventListener("click", (e) => {
  const imgList = document.querySelectorAll(".image__item");
  const selectedImg = e.target.closest(".image__item");
  let imgIndex;
  imgList.forEach((img, i) => {
    if (img === selectedImg) {
      imgIndex = i + 1;
    }
    return;
  });

  document
    .querySelector(`.image__overlay${imgIndex}`)
    .classList.remove("hidden");

  document.body.classList.add("stop-scrolling");
});

//Thoat khoi overlay image
document
  .querySelector(".section__image__overlay")
  .addEventListener("click", (e) => {
    const overlay = e.target.closest(".image__overlay");
    if (e.target.classList.contains("image__overlay")) {
      document.body.classList.remove("stop-scrolling");
      overlay.classList.add("hidden");
    }

    if (e.target.closest(".close-btn")) {
      document.body.classList.remove("stop-scrolling");
      overlay.classList.add("hidden");
    }

    return;
  });

// Nut dieu khien Slider Image
var current__image = 0;
document.querySelector(".section__control").addEventListener("click", (e) => {
  const imageSection = document.querySelector(".section__image");

  const back_btn = e.target
    .closest(".section__control")
    .querySelector(".control__back");
  const next_btn = e.target
    .closest(".section__control")
    .querySelector(".control__next");
  // Khi click vao button back
  if (e.target.closest(".control__back")) {
    if (current__image == 0) {
      return;
    }
    current__image -= 1;
    imageSection.scrollTo({
      // top: 100,
      left: 420 * current__image,
      behavior: "smooth",
    });
  }
  // Khi click vao button next
  if (e.target.closest(".control__next")) {
    if (current__image == 3) {
      return;
    }
    current__image += 1;

    imageSection.scrollTo({
      // top: 100,
      left: 420 * current__image,
      behavior: "smooth",
    });
  }

  if (current__image == 3) {
    next_btn.classList.add("disable");
    next_btn.classList.remove("enable");
  } else {
    next_btn.classList.add("enable");
    next_btn.classList.remove("disable");
  }
  if (current__image == 0) {
    back_btn.classList.add("disable");
    back_btn.classList.remove("enable");
  } else {
    back_btn.classList.add("enable");
    back_btn.classList.remove("disable");
  }
});

//Nut dieu khien Slider why__box
var current__box = 0;
document
  .querySelector(".section__why__control")
  .addEventListener("click", (e) => {
    const boxSection = document.querySelector(".section__why__content");

    const back_btn = e.target
      .closest(".section__why__control")
      .querySelector(".control__back");
    const next_btn = e.target
      .closest(".section__why__control")
      .querySelector(".control__next");
    // Khi click vao button back
    if (e.target.closest(".control__back")) {
      if (current__box == 0) {
        return;
      }
      current__box -= 1;
      boxSection.scrollTo({
        // top: 100,
        left: 405 * current__box,
        behavior: "smooth",
      });
    }
    // Khi click vao button next
    if (e.target.closest(".control__next")) {
      if (current__box == 3) {
        return;
      }
      current__box += 1;

      boxSection.scrollTo({
        // top: 100,
        left: 420 * current__box,
        behavior: "smooth",
      });
    }

    if (current__box == 3) {
      next_btn.classList.add("disable");
      next_btn.classList.remove("enable");
    } else {
      next_btn.classList.add("enable");
      next_btn.classList.remove("disable");
    }
    if (current__box == 0) {
      back_btn.classList.add("disable");
      back_btn.classList.remove("enable");
    } else {
      back_btn.classList.add("enable");
      back_btn.classList.remove("disable");
    }
  });

//Khi click vao why_box
document
  .querySelector(".section__why__content")
  .addEventListener("click", (e) => {
    console.log(e);
    const whyList = document.querySelectorAll(".why__box");
    const selectedBox = e.target.closest(".why__box");
    let boxIndex;
    whyList.forEach((box, i) => {
      if (box === selectedBox) {
        boxIndex = i + 1;
      }
      return;
    });
    document
      .querySelector(`.why__overlay${boxIndex}`)
      .classList.remove("hidden");

    document.body.classList.add("stop-scrolling");
  });

//Thoat khoi overlay image
document
  .querySelector(".section__why__overlay")
  .addEventListener("click", (e) => {
    const overlay = e.target.closest(".why__overlay");
    if (e.target.classList.contains("why__overlay")) {
      document.body.classList.remove("stop-scrolling");
      overlay.classList.add("hidden");
    }

    if (e.target.closest(".close-btn")) {
      document.body.classList.remove("stop-scrolling");
      overlay.classList.add("hidden");
    }

    return;
  });

//Khi click vao click perfect box

document
  .querySelector(".perfect__content__left")
  .addEventListener("click", (e) => {
    const box1 = document.querySelector(".perfect__content__left .box1");
    const box2 = document.querySelector(".perfect__content__left .box2");
    const icon_top1 = box1.querySelector(".icon-top");
    const icon_down1 = box1.querySelector(".icon-down");
    const icon_top2 = box2.querySelector(".icon-top");
    const icon_down2 = box2.querySelector(".icon-down");
    const p1 = box1.querySelector("p");
    const p2 = box2.querySelector("p");
    const img1 = document
      .querySelector(".perfect__content__right")
      .querySelector(".img1");
    const img2 = document
      .querySelector(".perfect__content__right")
      .querySelector(".img2");

    //Click vao btn o box1
    if (e.target.closest(".icon") && e.target.closest(".box1")) {
      icon_top1.classList.toggle("hidden");
      icon_down1.classList.toggle("hidden");
      icon_top2.classList.toggle("hidden");
      icon_down2.classList.toggle("hidden");
      p1.classList.toggle("hidden");
      p2.classList.toggle("hidden");
      img1.classList.toggle("hidden");
      img2.classList.toggle("hidden");
    }
    //Click vao btn o box2
    if (e.target.closest(".icon") && e.target.closest(".box2")) {
      icon_top1.classList.toggle("hidden");
      icon_down1.classList.toggle("hidden");
      icon_top2.classList.toggle("hidden");
      icon_down2.classList.toggle("hidden");
      p2.classList.toggle("hidden");
      p1.classList.toggle("hidden");
      img1.classList.toggle("hidden");
      img2.classList.toggle("hidden");
    }
  });
