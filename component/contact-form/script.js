$(".btn").click(async function () {

    // console.log(await sessionStorage.getItem("token"))
    let token_default = await sessionStorage.getItem("token") || ""
    console.log("token_default ", token_default)
    $.ajax({
        url: "http://127.0.0.1:8001/api-v1/auth",
        type: "POST",
        // headers: {
        //     'Content-Type': 'application/json',
        //     'Authorization': 'Bearer ',
        // },
        data: {
            token: token_default
        }
    })
        .then(function (e) {
            console.log(e)
            let temp = e.payload.token
            if (temp) {
                sessionStorage.setItem("token", e.payload.token);
            }
        })
        .then(async function () {
            let token_key = await sessionStorage.getItem("token")
            console.log(token_key)
            $.ajax({
                url: "http://127.0.0.1:8001/api-v1/contact",
                type: "POST",
                // headers: {
                //     'Content-Type': 'application/json',
                //     'Authorization': 'Bearer ',
                // },
                data: {
                    token: token_key,
                    data: "abc"
                }
            })
        })
})
