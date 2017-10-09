window.addEventListener("load", function() {

    //--------------------------------------------------------------------------------
    //CONSTANT
    //--------------------------------------------------------------------------------
    var DEFAULT_IMG_WIDTH = 100;
    var DEFAULT_IMG_HEIGHT = 100;

    var DEFAULT_MARGIN_W = 5;
    var DEFAULT_MARGIN_H = 5;
    //--------------------------------------------------------------------------------
    //VARIABLE
    //--------------------------------------------------------------------------------

    //이미지 너비, 높이
    var imgWidth = DEFAULT_IMG_WIDTH;
    var imgHeight = DEFAULT_IMG_HEIGHT;

    //마진 
    var marginW = DEFAULT_MARGIN_W;
    var marginH = DEFAULT_MARGIN_H;

    //겔러리 공간 너비, 높이
    var areaWidth = 0;
    var areaHeight = 0;

    //Element 부속품
    var i, n;
    var jsonObj;
    var imgs;
    var galleryArea;
    var windowWidth = 0;
    var row = 0;
    var col = 0;
    var areaWidth = 0;
    var areaHeight = 0;

    //ajax 변수
    var httpRequest;
    var url = "/src/assets/data/data.json";

    if (window.XMLHttpRequest) { // Mozilla, safari...
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE
        try {
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }

    if (!httpRequest) {
        alert("Fiving up :( Connect create an XMLHTTP instance");
        return false;
    }
    httpRequest.onreadystatechange = function() {
        try {
            if (this.readyState == 4) {
                if (this.status == 200) {

                    jsonObj = JSON.parse(this.responseText);
                    imgs = jsonObj.imgs;
                    n = imgs.length;
                    galleryArea = document.getElementById("gallery");
                    windowWidth = window.innerWidth;
                    row = Math.floor(windowWidth / imgWidth);
                    col = Math.ceil(n / row);
                    areaWidth = ((row * (imgWidth + marginW)) - marginW);
                    areaHeight = ((col * (imgHeight + marginH)) - marginH);

                    galleryArea.style.width = areaWidth + "px";
                    galleryArea.style.height = areaHeight + "px";

                    console.log("row : " + row);
                    console.log("col : " + col);
                    console.log("area width : " + areaWidth);
                    console.log("area height : " + areaHeight);
                    console.log("imgWidth : " + imgWidth);
                    console.log("imgHeight : " + imgHeight);

                    for (i = 0; i < n; i++) {
                        var liTag = document.createElement("li");
                        var pTag = document.createElement("p");

                        liTag.style.width = imgWidth + "px";
                        liTag.style.height = imgHeight + "px";
                        pTag.style.width = "100%";
                        pTag.style.height = "100%";
                        pTag.style.backgroundImage = "url('" + imgs[i].src + "')";
                        pTag.style.backgroundRepeat = "no-repeat";
                        pTag.style.backgroundPosition = "center";
                        pTag.style.backgroundSize = "cover";

                        liTag.appendChild(pTag);

                        //console.log("src : " + imgs[i].src);
                        galleryArea.appendChild(liTag);
                    }


                    //상테 확인용
                    var status = document.getElementById("status");
                    status.textContent = "window W : " + windowWidth;


                } else {
                    alert("There was a problem whth the request.");
                }
            }
        } catch (e) {
            alert("Caught Exception : " + e.description);
        }
    };
    httpRequest.open("GET", url, true);
    httpRequest.send();

});

// window.addEventListener("resize", function() {
//     windowWidth = window.innerWidth;
//     row = Math.floor(windowWidth / imgWidth);
//     col = Math.ceil(n / row);
//     areaWidth = ((row * (imgWidth + marginW)) - marginW);
//     areaHeight = ((col * (imgHeight + marginH)) - marginH);

//     galleryArea.style.width = areaWidth + "px";
//     galleryArea.style.height = areaHeight + "px";
// });