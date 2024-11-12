const myImage = document.querySelector(".Myimage");

if (myImage == null) {
  console.log("Nope")
}

var imageArray = ["image/city1.jpg", "image/city2.jpg", "image/city3.jpg"];
var imageIndex = 1;

function changeImageNext() {
  myImage.setAttribute("src", imageArray[imageIndex]);
  imageIndex++;
  if (imageIndex >= imageArray.length){
    imageIndex = 0;
  }
}

function changeImagePrev() {
  imageIndex--;
  if (imageIndex < 0){
    imageIndex = imageArray.length - 1;
  }
  myImage.setAttribute("src", imageArray[imageIndex]);
}