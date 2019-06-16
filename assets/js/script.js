// Upload image 
var fileTag = document.getElementById("filetag");
var preview = document.getElementById("preview");
var mycanvas = document.getElementById("mycanvas");


fileTag.addEventListener("change", function() {
    changeImage(this);
});

function changeImage(input) {
    var reader;

    if (input.files && input.files[0]) {
        reader = new FileReader();

        reader.onload = function(e) {
            preview.setAttribute('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
        mycanvas.classList.remove('none-upload');
    }
}

// END - upload image


// Download image

window.exportAsImage = function() {
    var target = document.getElementById("mycanvas");
    html2canvas(target, {
        onrendered: function(canvas) {
            var imgageData = canvas.toDataURL("image/png");
            var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
            var link = document.createElement("a");
            link.style.display = "none";
            link.setAttribute("download", "myImage.png");
            link.setAttribute("href", newData);
            document.body.appendChild(link);
            link.click();
            link.remove();
        }
    });
}

// END - Download image


// Color Picker
const pickr1 = new Pickr({
    el: '#color-picker-1',
    default: "303030",
    components: {
        preview: true,
        opacity: true,
        hue: true,

        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }
});
// END - Color Picker