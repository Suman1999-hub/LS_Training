(function fetchNewData() {
  let getLink = window.location.href;
  let data = getLink.split("?query=");
  let updateData = data[1].replace("%20", " ");
  const local = JSON.parse(localStorage.getItem("music"));
  const localArtData = JSON.parse(localStorage.getItem("artist"));
  let localData = "";
  console.log("updateData >>", updateData);
  local.forEach((music) => {
    if (music.name.includes(updateData)) {
      console.log(music.url);
      localData += `
              <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="card bg-dark text-white h-100 w-75">
            <img src="${music.image}" class="card-img-top" alt="${music.song}"  width="auto">
            <div class="card-body text-center">
              <h5 class="card-title">${music.song}</h5>
              <h5 class="card-title">${music.name}</h5>
              <audio controls style="max-width: 100%;">
                <source src="${music.url}" type="audio/ogg">
                <source src="${music.url}" type="audio/mpeg">
                Your browser does not support the audio tag.
              </audio>
              </div>
            </div>
          </div>
        </div>
              
        `;
    }
  });
  document.getElementById("artists").innerHTML = localData;
})();
