let movieData = require("./data");
let $ = require("jquery");

function renderMovie(data){
  ui.title.text(data.title);
  ui.review.text(data.review);
  ui.poster.attr("src", data.imgUrl);

  ui.actors.empty();
  for(let i=0; i<data.actors.length; i++){
    ui.actors.append("<li>" + data.actors[i] + "</li>");
  }
}

function changeStarRating(rating){
  $(".filled").removeClass("filled");
  for(let i=1; i<=rating; i++){
    ui.stars[i-1].addClass("filled");
  }
}

let ui = {
  title: $(".infosection h1"),
  review: $(".infosection p"),
  poster: $(".poster"),
  actors: $(".infosection ul"),
  rating: $(".stars"),
  stars: [
    $("[data-rating-id='1']"),
    $("[data-rating-id='2']"),
    $("[data-rating-id='3']"),
    $("[data-rating-id='4']"),
    $("[data-rating-id='5']")
  ]
};

ui.rating.on("click", "span", function(e){
  let star = $(e.target);
  let rating = parseInt(star.attr("data-rating-id"));
  changeStarRating(rating);
});

renderMovie(movieData);
