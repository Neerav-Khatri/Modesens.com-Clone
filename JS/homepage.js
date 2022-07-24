//  SLIDE IMAGES CODE

let slide = [
    "https://modesens.com/banner/12903/getimg/?img=%2Fbanner%2F20220722-modesens-HarveyNichols-1140x400-EN.jpg",
    "https://modesens.com/banner/12474/getimg/?img=%2Fbanner%2F20220719-modesens-SSENSE-1140x400-F-EN.jpg",
    "https://modesens.com/banner/12809/getimg/?img=%2Fbanner%2F20220716-modesens-NORDSTROM-1140x400-EN.jpg",
    "https://modesens.com/banner/12539/getimg/?img=%2Fbanner%2F20220711-modesens-Farfetch-1140x400-EN.jpg",
    "https://modesens.com/banner/11843/getimg/?img=%2Fbanner%2F20220713-modesens-Sale-1140x400-EN.jpg",
    "https://modesens.com/banner/12883/getimg/?img=%2Fbanner%2F20220720-modesens-RalphLauren-1140x400-EN.jpg",
    "https://modesens.com/banner/12889/getimg/?img=%2Fbanner%2F20220721-modesens-Giglio-1140x400-EN.jpg",
    "https://modesens.com/banner/12914/getimg/?img=%2Fbanner%2F20220724-modesens-Spinnaker-1140x400-EN.jpg",
    "https://modesens.com/banner/12912/getimg/?img=%2Fbanner%2F20220724-modesens-Renaisa-1140x400-EN.jpg",
    "https://modesens.com/banner/12871/getimg/?img=%2Fbanner%2F20220719-modesens-ScotchSoda-1140x400-EN.jpg",
    "https://modesens.com/banner/12876/getimg/?img=%2Fbanner%2F20220719-modesens-NewBalance-1140x400-EN.jpg",
    "https://modesens.com/banner/12858/getimg/?img=%2Fbanner%2F20220718-modesens-NEST-1140x400-EN.jpg",
    "https://modesens.com/banner/12850/getimg/?img=%2Fbanner%2F20220718-modesens-Hunter-1140x400-EN.jpg",
    "https://modesens.com/banner/12852/getimg/?img=%2Fbanner%2F20220718-modesens-Hestia-1140x400-EN.jpg",
    "https://modesens.com/banner/12899/getimg/?img=%2Fbanner%2F20220722-modesens-Harrods-1140x400-EN.jpg",
    "https://modesens.com/banner/12901/getimg/?img=%2Fbanner%2F20220722-modesens-24S-1140x400-EN.jpg",
];

let img = 0;
let image = document.querySelector("#slide-images>img");
let right = document.querySelector("#br").addEventListener("click", function() {
    img++;
    if (img===slide.length){
        img = 0;
    };
    image.src=slide[img];
});
let left = document.querySelector("#bl").addEventListener("click", function() {
    img--;
    if (img<0){
        img=slide.length-1
    };
    image.src=slide[img];
});

