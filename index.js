// Get the ul element where the shows will be displayed
const showList = document.querySelector(".showList");

// Fetch the data from the API using the Fetch API
fetch("http://127.0.0.1:5500/db.json")
  .then((response) => response.json())
  .then((data) => {
    // Loop through the data and create a list item for each show
    data.events.forEach((show) => {
      let div = document.createElement("div");
      div.classList.add("col-sm-6", "col-lg-4", "mb-4", "mb-lg-0", "item");

      let div2 = document.createElement("div");
      div2.classList.add(
        "bs_gallery_item",
        "bg-white",
        "card",
        "my-3",
        "shadow"
      );
      div.appendChild(div2);

      let image = document.createElement("img");
      image.src = show.concert.image;
      image.classList.add("img-fluid", "w-100", "rounded", "mb-2");
      div2.appendChild(image);

      let div3 = document.createElement("div");
      div3.classList.add("bs_info", "text-center", "p-2", "pb-3");
      div2.appendChild(div3);

      let text = document.createElement("h5");
      text.textContent = show.concert.name;
      text.classList.add("overflow-hidden", "bs_img_label");
      div3.appendChild(text);

      let p = document.createElement("p");
      p.classList.add("bs_img_description");
      p.textContent = show.concert.description;
      div3.appendChild(p);

      console.log(div);
      showList.appendChild(div);
    });
  });
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
// Dark mode button functionality start
const darkMode = document.querySelector("#dark-mode");

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

//Dark mode button functionality end

//Sign up form start
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const heading = document.querySelector("h1");
  heading.style.color = "red";
});
//Sign up form end
