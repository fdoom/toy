const generateBtn = document.querySelector('#generateBtn');
const gridContainer = document.querySelector('#gridContainer');

generateBtn.addEventListener('click', ()=>{
    if(gridContainer.children.length >= 30) {
        const confirmed = confirm("모든 사진을 지우겠습니까?");
        if(confirmed) {
            gridContainer.innerHTML = "";
        }
    }
    else {
        const randomNuber = Math.floor(Math.random() * 1000) + 1;
        const imgUrl = `https://picsum.photos/500?random=${randomNuber}`;

        const img = document.createElement('img');
        img.src = imgUrl;

        gridContainer.appendChild(img);
    }
})