async function getResults() {
    const res = await fetch("https://picsum.photos/v2/list")
        .then(result => {
            return result.json();
        })
    const data = await getPics(res)

}

function getPics(arr) {
    for (let i = 0; i < arr.length; i++) {
        let pic = document.querySelector(".left");
        let img = document.createElement("img");
        img.setAttribute("class", "styling")
        img.src = arr[i].download_url;
        pic.appendChild(img)

        img.addEventListener("click", function () {
            let right = document.querySelector("#rightpic");
            let rightImg = document.querySelector("#main");
            rightImg.src = arr[i].download_url;
            right.style.display = "block";
            let info = document.querySelector("h3");
            info.textContent = `Author: ${arr[i].author}, Width: ${arr[i].width}, Height: ${arr[i].height}`;

        })
    }

}

getResults();

