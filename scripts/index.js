import indexData from "../data/index.json" assert { type: "json" };
console.log(indexData);

const textslider = [
  {
    id: 0,
    text: "WELCOME TO BLUEFLY: Luxury brands at discounted prices",
  },
  {
    id: 1,
    text: "FREE SHIPPING On Order Over $999",
  },
];

// text Slider

const renderTextslider = () => {
  let container = document.getElementById("welcome_textslider");
  let i = 0;
  container.style.width = `${textslider.length * 100}%`;
  textslider.map((elem) => {
    let p = document.createElement("p");
    p.innerText = elem.text;
    container.append(p);
  });

  const slideShow = () => {
    if (textslider.length > i) {
      container.style.transform = `translateX(${
        -i * (100 / textslider.length)
      }%)`;
      i++;
    } else {
      i = 0;
    }
  };

  setInterval(() => {
    slideShow();
  }, 2500);
};

renderTextslider();

// threeimages

const renderTreeImages = () => {
  let threeimages = document.getElementById("threeimages");
  let div = document.createElement("div");
  div.classList.add("three_div");
  indexData.threeimages.map((el) => {
    // console.log(el);
    let div = document.createElement("div");
    div.classList.add("each_image");
    let img = document.createElement("img");
    img.src = el.imgUrl;
    img.classList.add("render_img");
    let div2 = document.createElement("div");
    let h4_1 = document.createElement("h4");
    h4_1.textContent = el.title;
    h4_1.classList.add("h4_1");
    let h1 = document.createElement("h1");
    h1.textContent = el.desc;
    let h4_2 = document.createElement("h4");
    h4_2.textContent = el.feature;
    let btn = document.createElement("button");
    btn.innerHTML = el.btnText;
    div2.append(h4_1, h1, h4_2, btn);
    div.append(img, div2);
    threeimages.append(div);
  });
};

renderTreeImages();

// shop by category

// console.log(indexData.shopByCategory);

const renderShopByCtg = () => {
  let renderCategory = document.getElementById("render_by_cat");
  indexData.shopByCategory.map((el) => {
    // console.log(el);
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.imgUrl;
    let h5 = document.createElement("h5");
    h5.textContent = el.title;
    div.append(img, h5);
    renderCategory.append(div);
    div.addEventListener("click", () => {
      if (el.title === "DRESSES") {
        window.location = "#";
      }
    });
  });
};

renderShopByCtg();

// New Arrivals

// console.log(indexData.newArrivals);

const renderingNewrrivals = () => {
  let renderNewArrivals = document.getElementById("render_New_arrivals");
  indexData.newArrivals.map((el) => {
    renderElementTrendandArrivals(renderNewArrivals, el);
  });
};

renderingNewrrivals();
// Trending Now

const renderTrending = () => {
  let trendingNow = document.getElementById("trending_Now");
  indexData.trendingNow.map((el) => {
    renderElementTrendandArrivals(trendingNow, el);
  });
};

renderTrending();

function renderElementTrendandArrivals(trendingNow, el) {
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = el.img1;
  let p1 = document.createElement("p");
  p1.textContent = el.title;
  let span1 = document.createElement("span");
  span1.textContent = el.strPrice;
  span1.classList.add("sp1");
  let span2 = document.createElement("span");
  span2.textContent = el.price;
  span2.classList.add("sp2");
  let span3 = document.createElement("span");
  span3.textContent = el.discount;
  span3.classList.add("sp3");
  let btn = document.createElement("button");
  btn.textContent = "Quick View";
  btn.classList.add("quick_view");
  div.append(img, p1, span1, span2, span3, btn);
  trendingNow.append(div);
}

// render Left Right ClickSlider

const renderLeftRightClickSlider = () => {
  let container = document.getElementById("renderLeftRightImages");

  indexData.slideLeftRightImages.map((el) => {
    // console.log(el);
    let main_div = document.createElement("div");
    let img_div = document.createElement("div");
    let main_img = document.createElement("img");
    main_img.classList.add("main_img");
    main_img.src = el.imgUrl;
    let img2 = document.createElement("img");
    img2.classList.add("small_logo_img");
    img2.src =
      "https://media.tagembed.com/post/46588/57802/87415/profile/87415.jpg";
    img2.classList.add("small_logo_img");
    let p_div = document.createElement("div");
    p_div.classList.add("p_div");
    let p = document.createElement("p");
    p.textContent = el.desc;
    img_div.append(main_img);
    p_div.append(p);
    main_div.append(img_div, img2, p_div);
    container.append(main_div);
  });

  let clickCalc = 0;
  function reRender() {
    if (clickCalc > Math.floor(indexData.slideLeftRightImages.length / 2)) {
      clickCalc = Math.floor(indexData.slideLeftRightImages.length / 2);
      return;
    } else if (clickCalc < 0) {
      clickCalc = 0;
      return;
    }
    changeimage.style.transform = `translateX(${-12.5 * clickCalc}%)`;
  }
  let nextImg = document.querySelector(".clickLeft");
  let prevImg = document.querySelector(".clickRight");
  let changeimage = document.querySelector(".checkProduct");
  nextImg.addEventListener("click", () => {
    clickCalc++;
    reRender();
  });
  prevImg.addEventListener("click", () => {
    clickCalc--;
    reRender();
  });
};

renderLeftRightClickSlider();

//  render Footer three Image.

const renderFooterImage = () => {
  console.log(indexData.bottomThreeImages);
  let footerImgContainer = document.getElementById("footer_three_img");
  indexData.bottomThreeImages.map((el) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.imgUrl;
    let h4 = document.createElement("h4");
    h4.innerText = el.title;
    let p = document.createElement("p");
    p.innerText = el.desc;
    let btn = document.createElement("button");
    btn.textContent = el.btnText;
    div.append(img, h4, p, btn);
    footerImgContainer.append(div)
  });
};

renderFooterImage();
