function toggleMessage(box) {
  const front = box.querySelector(".box-front");
  const back = box.querySelector(".box-back");

  if (box.style.transform === "rotateY(180deg)") {
    box.style.transform = "rotateY(0deg)";
  } else {
    box.style.transform = "rotateY(180deg)";
  }
}
