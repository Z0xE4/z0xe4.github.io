
var nums = document.getElementsByClassName('num'),
number1Top = nums[0].getBoundingClientRect().top,
start1 = +nums[0].innerHTML, end1 = +nums[0].dataset.max,
number2Top = nums[1].getBoundingClientRect().top,
start2 = +nums[1].innerHTML, end2 = +nums[1].dataset.max,
number3Top = nums[2].getBoundingClientRect().top,
start3 = +nums[2].innerHTML, end3 = +nums[2].dataset.max;

nums[0].classList.add('active');
nums[1].classList.add('active');
nums[2].classList.add('active');


var interval1 = setInterval(function() {
    nums[0].innerHTML = ++start1;
    if(start1 == end1) {
        clearInterval(interval1);
    }
});
var interval2 = setInterval(function() {
    nums[1].innerHTML = ++start2;
    if(start2 == end2) {
        clearInterval(interval2);
    }
});
var interval3 = setInterval(function() {
    nums[2].innerHTML = ++start3;
    if(start3 == end3) {
        clearInterval(interval3);
    }
});

new WOW().init();

if (screen.width > 1366) {
    $(document).ready(function(){
        VK.Widgets.Group("vk_groups", {mode: 4, width: "325", height: "425", color1: '2D2F32', color2: 'FFFFFF', color3: 'FFE279'}, 205134472);
        let vk = document.getElementsByClassName('vk')[0].classList;
        vk.add('active');
        vk.add('animate__animated');
        vk.add('animate__fadeInRight');
    });   
}