let menu_data = [
    {
        title:"Dịch vụ",
        link:"#dich-vu"
    },
    {
        title:"Bảng giá",
        link:"/bang-gia"
    },
    {
        title:"Ưu đãi",
        link:"#uu-dai"
    },
    {
        title:"Nhận tư vấn",
        link:"#nhan-tu-van"
    }
]
let str = '';
for (const key of menu_data) {
    console.log(key)
    str += `<li><a href="${path+key.link}">${key.title}</a></li>`;

}

str = `<ul>${str}<li class="d-lg-block d-none"><a href="tel:0966.949.839" class="phone"><i class="fa fa-phone"></i></a></li></ul>`;
$("#main-menu").html(str)

// image path
$("img").each(function(e){
    let src = $(this).attr('src');
    console.log(src)
    $(this).attr('src', path+src)
})