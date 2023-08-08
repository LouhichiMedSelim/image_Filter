$(".upImg").click(function () {
    $('img').attr('src', $('#imgI').val())
});

$('#filter').css("display", "none");
$('#rot').css("display", "none");
$('#wh').css("display", "none");
$('#txt').css("display", "none");

function ChangeGrayScale() {
    Image = document.getElementById("img");
    grayScale = document.getElementById("grayScale").value;
    Image.style.WebkitFilter = "grayscale(" + grayScale + "%)"
}

function ChangeBlur() {
    Image = document.getElementById("img");
    blur = document.getElementById("blur").value;
    Image.style.WebkitFilter = "blur(" + blur + "px)"
}

function ChangeBrightness() {
    Image = document.getElementById("img");
    brightness = document.getElementById("brightness").value;
    Image.style.WebkitFilter = "brightness(" + brightness + "%)"
}

function ChangeContrast() {
    Image = document.getElementById("img");
    contrast = document.getElementById("contrast").value;
    Image.style.WebkitFilter = "contrast(" + contrast + "%)"
}

function ChangeDropShadow() {
    Image = document.getElementById("img");
    dropShadow = document.getElementById("dropShadow").value;
    Image.style.WebkitFilter = "dropShadow(" + dropShadow + "%)"
}

function ChangeInvert() {
    Image = document.getElementById("img");
    invert = document.getElementById("invert").value;
    Image.style.WebkitFilter = "invert(" + invert + "%)"
}

function ChangeOpacity() {
    Image = document.getElementById("img");
    opacity = document.getElementById("opacity").value;
    Image.style.WebkitFilter = "opacity(" + opacity + "%)"
}

function ChangeSaturation() {
    Image = document.getElementById("img");
    saturate = document.getElementById("saturate").value;
    Image.style.WebkitFilter = "saturate(" + saturate + "%)"
}

 function ChangeSepia() {
    Image = document.getElementById("img");
    sepia = document.getElementById("sepia").value;
    Image.style.WebkitFilter = "sepia(" + sepia + "%)"
}

function ChangeHueRotate() {
    Image = document.getElementById("img");
    hue_rotate = document.getElementById("hue_rotate").value;
    Image.style.WebkitFilter = "hue-rotate(" + hue_rotate + "deg)"
}

$('#rotate90').click(function () {
    document.querySelector("#img").style.transform = "rotate(90deg)";
});

$('#rotate-90').click(function () {
    document.querySelector("#img").style.transform = "rotate(-90deg)";
});

$('#rotate180').click(function () {
    document.querySelector("#img").style.transform = "rotate(180deg)";
});

$('#rotate-180').click(function () {
    document.querySelector("#img").style.transform = "rotate(-180deg)";
});

$('#rotate270').click(function () {
    document.querySelector("#img").style.transform = "rotate(270deg)";
});

$('#rotate-270').click(function () {
    document.querySelector("#img").style.transform = "rotate(-270deg)";
});

$('#rotate360').click(function () {
    document.querySelector("#img").style.transform = "rotate(360deg)";
});

$('#rotate-360').click(function () {
    document.querySelector("#img").style.transform = "rotate(360-deg)";
});

$("#width").click(function () {
    $('img').attr('width', $('#widthI').val())
});

$("#height").click(function () {
    $('img').attr('height', $('#heightI').val())
});

var value = 0;

var rotated = true;

$('#rotateMouse').click(function (e) {
    rotated = true
    $('#img').click(function () {
        if (rotated === true) {
            value += 90;
            document.querySelector("#img").style.transform = "rotate(" + value + "deg)";
        }
    })
})

$('#rotateMouseD').click(function () {
    rotated = false
    document.querySelector("#img").style.transform = "rotate(" + 0 + "deg)";
})

$("#bcentered").click(function () {
    var input = $('#iBC').val()
    $('.centered').append(input)
});

$("#bbl").click(function () {
    var input = $('#iBC').val()
    $('.bottom-left').append(input)
});

$("#btl").click(function () {
    var input = $('#iBC').val()
    $('.top-left').append(input)
});

$("#btr").click(function () {
    var input = $('#iBC').val()
    $('.top-right').append(input)
});

$("#bbr").click(function () {
    var input = $('#iBC').val()
    $('.bottom-right').append(input)
});


$('#fil').click(function () {
    if ($("#filter").css("display") === 'block') {
        $('#filter').css("display", "none")
    }
    else if ($("#filter").css("display") === 'none') {
        $('#filter').css("display", "block")
    }

})

$('#rott').click(function () {
    if ($("#rot").css("display") === 'block') {
        $('#rot').css("display", "none")
    }
    else if ($("#rot").css("display") === 'none') {
        $('#rot').css("display", "block")
    }

})


$('#hewi').click(function () {
    if ($("#wh").css("display") === 'block') {
        $('#wh').css("display", "none")
    }
    else if ($("#wh").css("display") === 'none') {
        $('#wh').css("display", "block")
    }
})

$('#texte').click(function () {
    if ($("#txt").css("display") === 'block') {
        $('#txt').css("display", "none")
    }
    else if ($("#txt").css("display") === 'none') {
        $('#txt').css("display", "block")
    }
})

$('#all').css("display", "none");

$('#first').click(function () {
    $('#all').css("display","block")
    $('#firs').css("display","none")
    var res=$('#finput').val()
    $('#fh').append('Welcome '+res)
    localStorage.setItem('name', res);
    $("#fh").delay(3000).slideUp("slow");
})

$('#tr').click(function () {
    $('.centered').empty();
    $('.bottom-left').empty();
    $('.top-left').empty();
    $('.top-right').empty();
    $('.bottom-right').empty();
})


