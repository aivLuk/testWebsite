async function getResults() {
    const res = await fetch("https://picsum.photos/v2/list")
        .then(result => {
            return result.json();
        })
        .catch(error => alert(error));
    getPics(res);
}

function getPics(arr) {
    for (let i = 0; i < arr.length; i++) {
        let leftPic = document.querySelector(".left_container");
        let img = document.createElement("img");
        img.setAttribute("class", "styling")
        img.src = arr[i].download_url;
        leftPic.appendChild(img);

        img.addEventListener("click", function () {
            let rightContainer = document.querySelector("#rightPicDiv");
            let rightImg = document.querySelector("#mainImg");
            rightImg.src = arr[i].download_url;
            rightContainer.style.display = "block";
            let info = document.querySelector("h3");
            info.textContent = `Author: ${arr[i].author}, Width: ${arr[i].width}, Height: ${arr[i].height}`;

        })
    }

}

getResults();

