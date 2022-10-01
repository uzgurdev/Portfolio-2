
$(document).ready(function () {

    $(".all").click(function () {

        $("#userinter").css({

            "display": "block",

        })

        $("#userinter2").css({

            "display": "block",

        })

        $("#printtempl").css({

            "display": "block",

        })

        $("#printtempl2").css({

            "display": "block",

        })

        $("#mockup").css({

            "display": "block",

        })

        $("#mockup2").css({

            "display": "block",

        })

        $("#webtempl").css({

            "display": "block",

        })

        $("#webtempl2").css({

            "display": "block",

        })


    })

    $(".prt").click(function () {

        $("#userinter").css({

            "display": "none",

        })

        $("#userinter2").css({

            "display": "none",

        })

        $("#mockup").css({

            "display": "block",
            "display": "none"

        })

        $("#mockup2").css({

            "display": "none",

        })

        $("#webtempl").css({

            "display": "none",

        })

        $("#webtempl2").css({

            "display": "none",

        })


    })

    $(".wbt").click(function () {

        $("#userinter").css({

            "display": "none",

        })

        $("#userinter2").css({

            "display": "none",

        })

        $("#printtempl").css({

            "display": "none",

        })

        $("#printtempl2").css({

            "display": "none",

        })

        $("#mockup").css({

            "display": "none",

        })

        $("#mockup2").css({

            "display": "none",

        })

    })

    $(".uri").click(function () {

        $("#printtempl").css({

            "display": "none",

        })

        $("#printtempl2").css({

            "display": "none",

        })

        $("#mockup").css({

            "display": "none",

        })

        $("#mockup2").css({

            "display": "none",

        })

        $("#webtempl").css({

            "display": "none",

        })

        $("#webtempl2").css({

            "display": "none",

        })


    })

    $(".mkp").click(function () {

        $("#userinter").css({

            "display": "none",

        })

        $("#userinter2").css({

            "display": "none",

        })

        $("#printtempl").css({

            "display": "none",

        })

        $("#printtempl2").css({

            "display": "none",

        })

        $("#webtempl").css({

            "display": "none",

        })

        $("#webtempl2").css({

            "display": "none",

        })


    })

})

function pres(imagess) {

    mainimg.src = imagess.src;

    let membernames = document.getElementsByTagName('h3');

    // for (let i = 0; i < h3.length; i++) {

    //     h3[i].style = " ";

    // }

    // h3.style = "top: 177px;width: 197px;height: 37px;color: #fff;line - height: 2.2;position: absolute;text - align: center;font - family: sans - serif;transition: all 5s;transform: translateY(400px);background: rgba(0, 0, 0, 0.7); ";

    membernames.classList.add("active-member")

}
