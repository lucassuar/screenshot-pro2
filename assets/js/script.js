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

// END - Color Picker

// Horizontal padding slider

var slider = document.getElementById("horizontal-padding");
var mycanvas = document.getElementById("mycanvas");
mycanvas.style.padding = "50px";

slider.addEventListener('change', function() {
    mycanvas.style.padding = slider.value + "px";
});

// END - Horizontal padding slider


// Header switcher
    var switchHead = document.getElementById("customSwitches");
    var checkbox = document.querySelector('input[type="checkbox"]');
    var svg = document.getElementById('svg');


    switchHead.addEventListener('change', function() {
        if (this.checked == true) {
          // do this
          svg.style.display = 'none';
        } else {
          // do that
          svg.style.display = 'inline';
        }
      });
 

  // END - Header switcher