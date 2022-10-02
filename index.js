// filter part
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

// team part
function pres(imagess) {

    mainimg.src = imagess.src;

    let h3 = document.getElementsByTagName('h3');

    for (let i = 0; i < h3.length; i++) {

        h3[i].style = " ";

    }

    if (imagess.id == "Rahmatulloh") {
        titleR.style = "transform: translateY(0) !important;"
    }if (imagess.id == "Mashrab") {
        titleM.style = "transform: translateY(0) !important;"
    }if (imagess.id == "John") {
        titleJ.style = "transform: translateY(0) !important;"
    }if (imagess.id == "Martin") {
        titleMn.style = "transform: translateY(0) !important;"
    }

}
