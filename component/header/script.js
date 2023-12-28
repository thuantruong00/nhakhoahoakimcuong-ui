let menu_data = [
    {
        title:"Dịch vụ",
        link:"#dich-vu"
    },
    {
        title:"Thẩm mỹ <br>răng sứ",
        link:"#"
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
let child_rangsu = [
    {
        category:"Răng sứ toàn phần cao cấp",
        data:[
            {
                title:"Răng sứ Orodent",
                link:"rang-su-orodent"
            },
            {
                title:"Răng sứ Lava",
                link:"rang-su-lava"
            },
            {
                title:"Răng sứ Cercon",
                link:"rang-su-cercon"
            }
        ]
    },
    {
        category:"Răng sứ toàn phần",
        data:[
            {
                title:"Răng sứ HT Smile",
                link:"rang-su-ht-smile"
            },
            {
                title:"Răng sứ DDBIO",
                link:"rang-su-ddbio"
            },
            {
                title:"Răng sứ Zirconia",
                link:"rang-su-zirconia"
            }
        ]
    },
    {
        category:"Mặt dán sứ Veneer Laminate",
        data:[
            {
                title:"Dán sứ Veneer 3D Max",
                link:"dan-su-veneer-3d-max"
            },
            {
                title:"Dán sứ Veneer Ultrathin",
                link:"dan-su-veneer-ultrathin"
            },
            {
                title:"Dán sứ Veneer EMax",
                link:"dan-su-veneer-emax"
            }
        ]
    },
]
let str = '';
let sub_menu = '';
let str_2 = '';
let sub_menu_2 = '';
for (let item of child_rangsu) {
    // console.log(item.category)
    sub_menu +=`<div class="wrap-col"><div class="category-name">${item.category}</div><div class="wrap-list"><ul>`;
    for (let item_1 of item.data) {
        // console.log(item_1)
        sub_menu +=`<li><a href="${item_1.link}" class="">${item_1.title}</a></li>`;
    }
    sub_menu +=`</ul></div></div>`;
}
sub_menu = `<div class="wrap-sub-menu"><div class="sub-menu">${sub_menu}</div></div>`
for (let key in menu_data) {
    // console.log(key)
    if(key==1){
        str += `<li><a href="javascript:openMenu2()">${menu_data[key].title}</a>${sub_menu}</li>`;
    }
    else{
        str += `<li><a href="${path+menu_data[key].link}">${menu_data[key].title}</a></li>`;
    }
}
for (let item of child_rangsu) {
    // console.log(item.category)
    sub_menu_2 +=`<h5>${item.category}</h5><ul>`;
    for (let item_1 of item.data) {
        // console.log(item_1)
        sub_menu_2 +=`<li><a href="${item_1.link}" class="">${item_1.title}</a></li>`;
    }
    sub_menu_2 +=`</ul>`;
}

str = `<ul>${str}<li class="d-lg-block d-none"><a href="tel:0966.949.839" class="phone"><i class="fa fa-phone"></i></a></li></ul>`;
$("#main-menu").html($(str))
str_2 = `<div class="sub-menu-2"><h4 class="text-center">Thẩm mỹ răng sứ</h4>${sub_menu_2}</div>`
$("#menu-2").html($(str_2))
// image path
$("img").each(function(e){
    let src = $(this).attr('src');
    // console.log(src)
    $(this).attr('src', path+src)
})