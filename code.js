function renderMovie(data){
    document.querySelector(".infosection h1").textContent = data.title;
    document.querySelector(".infosection p").textContent = data.review;
    document.querySelector(".poster").setAttribute("src", data.imgUrl);
  
    let actorList = "";
    for(let i=0; i<data.actors.length; i++){
      actorList += "<li>" + data.actors[i] + "</li>";
    }
    document.querySelector(".infosection ul").innerHTML = actorList;
  }
  
  function changeStarRating(rating){
    for(let i=1; i<=5; i++){
      let star = document.getElementById("star" + i);
      if (i <= rating){
        star.classList.add("filled");
      } else {
        star.classList.remove("filled");
      }
    }
  }
  
  for(let i=1; i<=5; i++){
    let star = document.getElementById("star" + i);
    star.addEventListener("click", function(){
      changeStarRating(i);
    });
  }
  
  renderMovie(movieData);