let href = window.location.href.split("/"); //====
let host = window.location.host.split(":"); //====
let path = window.location.protocol + "//" + host[0] + ":" + host[1]; //dev
// let path = window.location.protocol + "//" + host[0] // deploy

// let path = 'https://thuantruong00.github.io/nhakhoahoakimcuong-ui' //git
// console.log(path)

let click_out = true


$(window).on("scroll", function(){
    let page_y_offset = window.scrollY
    
    // console.log(page_y_offset)
    if(page_y_offset>400){
        $(".header").addClass("sticky-menu")
    }
    if(page_y_offset<200){
        $(".header").removeClass("sticky-menu")
    }
})


let countdown = 1800;
let interval_func = setInterval(function(){
    countdown-=1;
    // console.log(countdown)
    let temp_minutes = Math.floor(countdown / 60);
    let temp_seconds = countdown % 60;
    // console.log(temp_minutes, temp_seconds)
    $('#countdown').html(`<p>${temp_minutes} phút ${temp_seconds} giây</p>`)
    if(countdown<=0){
        clearInterval(interval_func);
    }
}, 1000);

$('.navbar').click(function(){
    openMenu2();
})

function openMenu2(){
    click_out=false
    $('#menu-2').toggleClass('move-in')
    setTimeout(() => {
        
        click_out=true
    }, 1000);
}

$(window).click(function(){
    if(click_out){
        $('#menu-2').removeClass('move-in')
    }
})