// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// var requestOptions = {
//   method: "get",
//   headers: myHeaders,
//   redirect: "follow",
// };

// fetch(
//   "https://v1.nocodeapi.com/sumanrana/spotify/LbFrzMbaIPdGTikO/search?q=Arijit Sing",
//   requestOptions
// )
//   .then((response) => response.json())
//   .then((result) => {
//     const albumsDiv = document.getElementById("albums");
//     let albumsHTML = "";

//     result.albums.items.forEach((e) => {
//       albumsHTML += `
//             <a href="#" class="btn">
//               <div class="card" style="width: 18rem;">
//                 <img src="${e.images[0].url}" class="card-img-top" alt="..." width="${e.images[0].width}" height="250px">
//                 <div class="card-body">
//                   <h5 class="card-title">${e.name}</h5>
//                   <p class="card-text">${e.artists[0].name}, ${e.release_date}</p>
//                 </div>
//               </div>
//             </a>`;
//     });

//     albumsDiv.innerHTML = albumsHTML;
//   })
//   .catch((error) => console.log("error", error));

const artists = [
  "Sonu Nigam",
  "Udit Narayan",
  "Shreya Ghoshal",
  "Kumar Sanu",
  "Kishore Kumar",
  "Lata Mangeshkar",

  "Jubin Nautiyal",

  "Armaan Malik",
  "KK",
  "Neha Kakkar",
];

// var myHeaders1 = new Headers1();
// myHeaders1.append("Content-Type", "application/json");
// var requestOptions1 = {
//   method: "get",
//   headers: myHeaders1,
//   redirect: "follow",
// };

// artists.map((e) => {
//   fetch(
//     "https://v1.nocodeapi.com/sumanrana/spotify/LbFrzMbaIPdGTikO/search?q=e",
//     requestOptions1
//   )
//     .then((response) => response.json())
//     .then((result) => {
//       const albumsDiv = document.getElementById("albums");
//       let albumsHTML = "";

//       result.albums.items.forEach((e) => {
//         albumsHTML += `
//                   <a href="#" class="btn">
//                     <div class="card" style="width: 18rem;">
//                       <img src="${e.images[0].url}" class="card-img-top" alt="..." width="${e.images[0].width}" height="250px">
//                       <div class="card-body">
//                         <h5 class="card-title">${e.name}</h5>
//                         <p class="card-text">${e.artists[0].name}, ${e.release_date}</p>
//                       </div>
//                     </div>
//                   </a>`;
//       });

//       albumsDiv.innerHTML = albumsHTML;
//     })
//     .catch((error) => console.log("error", error));
// });
// const query = document.getElementById("searchInput").value;
// if (query) {
//   fetch(
//     `https://itunes.apple.com/search?term=${encodeURIComponent(
//       query
//     )}&entity=song`
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       const musicDiv = document.getElementById("musicData");
//       musicDiv.innerHTML = ""; // Clear previous results
//       data.results.forEach((track) => {
//         const trackElement = document.createElement("div");
//         trackElement.classList.add("track");
//         trackElement.innerHTML = `
//                 <img src="${track.artworkUrl100}" alt="${track.trackName}">
//                 <p><strong>${track.trackName}</strong> by ${track.artistName}</p>
//                 <p>Album: ${track.collectionName}</p>
//                 <audio controls>
//                   <source src="${track.previewUrl}" type="audio/mpeg">
//                   Your browser does not support the audio element.
//                 </audio>
//               `;
//         musicDiv.appendChild(trackElement);
//       });
//     })
//     .catch((error) => console.error("Error fetching music data:", error));

// const CLIENT_ID="";
// const REDIRECT_URL="h"
// const AUTH_ENDPOINT="https://accounts.spotify.com/authorize"
// const RESPONSE_TYPE="token"

// const apiKey = "c4ebb427c0333ddb6502c1a138b4aee3";

//     (async () => {
//       try {
//         const response = await fetch(
//           `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${apiKey}&format=json`
//         );
//         const data = await response.json();

//         const albumsDiv = document.getElementById("albums");
//         let albumsHTML = "";

//         data.artists.artist.forEach((e) => {
//           const imageUrl = e.image[2]['#text']; // Use index 2 for a large image
//           albumsHTML += `
//             <a href="#" class="btn" onclick="playPreview('${e.name}')">
//               <div class="card" style="width: 18rem;">
//                 <img src="${imageUrl}" class="card-img-top" alt="${e.name}" width="100%" height="250px">
//                 <div class="card-body">
//                   <h5 class="card-title">${e.name}</h5>
//                   <p class="card-text">${e.name}</p>
//                 </div>
//               </div>
//             </a>`;
//         });

//         albumsDiv.innerHTML = albumsHTML;
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     })();

//     function playPreview(artistName) {
//       // Placeholder function to search YouTube
//       const query = encodeURIComponent(artistName + ' song');
//       const youtubeUrl = `https://www.youtube.com/results?search_query=${query}`;
//       window.open(youtubeUrl, '_blank');
//     }

// const apiUrl = "https://api.deezer.com/chart";
// const corsProxy = "https://cors-anywhere.herokuapp.com/";

// async function fetchData() {
//   const data = await fetch(corsProxy + apiUrl);
//   const res = data.json();
//   console.log(res);
// }
// fetchData();

// const apiUrl = "https://api.deezer.com/chart";
// const corsProxy = "https://cors-anywhere.herokuapp.com/";

// (async () => {
//   try {
//     const response = await fetch(corsProxy + apiUrl);
//     const data = await response.json();

//     const tracksDiv = document.getElementById("albums");
//     let tracksHTML = "";

//     data.tracks.data.forEach((track) => {
//       const imageUrl = track.album.cover_medium;
//       const previewUrl = track.preview;
//       console.log(imageUrl);
//       console.log(previewUrl);
//       tracksHTML += `
//           <a href="#" class="btn" >
//           <div class="card" style="width: 18rem;">
//             <img src="${imageUrl}" class="card-img-top" alt="${track.title}" width="100%" height="250px">
//             <div class="card-body">
//               <h5 class="card-title">${track.title}</h5>
//               <p class="card-text">${track.artist.name}</p>
//               <audio controls>
//                 <source src="${previewUrl}" type="audio/ogg">
//                 <source src="${previewUrl}" type="audio/mpeg">
//                 Your browser does not support the audio tag.
//               </audio>
//             </div>
//           </div>
//           </a>
//         `;
//     });

//     tracksDiv.innerHTML = tracksHTML;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// })();

// function playPreview(previewUrl) {
//   const audioPlayer = document.getElementById("audio-player");
//   audioPlayer.src = previewUrl;
//   audioPlayer.style.display = "block";
//   audioPlayer.play();
// }

const data = [
  {
    image: "https://www.pagalworld.com.so/uploads/thumb/sft34/16799_4.jpg",
    song: "O Mahi O Mahi (Dunki)",
    name: ["Arijit Singh"],
    url: "./music/O Maahi_320(PagalWorld.com.so).mp3",
  },
  {
    image:
      "https://c.saavncdn.com/739/Kabhi-Shaam-Dhale-Hindi-2023-20231105053244-500x500.jpg",
    song: "Kabhi Shaam Dhale",
    name: ["Jaani", "Mohammad Faiz"],
    url: "./music/Kabhi Shaam Dhale(PagalWorld.com.so).mp3",
  },
  {
    image: "https://www.pagalworld.com.so/uploads/thumb/sft30/14824_4.jpg",
    song: "Heeriye ",
    name: ["Arijit Singh", "Jasleen Royal"],
    url: "./music/Heeriye(PagalWorld.com.so).mp3",
  },
  {
    image: "https://www.pagalworld.com.so/uploads/thumb/sft29/14401_4.jpg",
    song: "Phir Aur Kya Chahiye",
    name: ["Arijit Singh"],
    url: "./music/Tu Hai To Mujhe Phir Aur Kya Chahiye(PagalWorld.com.so).mp3",
  },
  {
    image: "https://www.pagalworld.com.so/uploads/thumb/sft45/22100_4.jpg",
    song: "Zor Ki Barsaat Hui",
    name: ["Jubin Nautiyal"],
    url: "./music/Zor Ki Barsaat Hui (Slowed Reverb)(PagalWorld.com.so).mp3",
  },
  {
    image: "https://www.pagalworld.com.so/uploads/thumb/sft31/15164_4.jpg",
    song: " Ki Dil Yaadan Rakhda Ae Sambh Sambh",
    name: ["Harnoor"],
    url: "./music/Ki Dil Yaadan Rakhda Ae Sambh Sambh Ke(PagalWorld.com.so).mp3",
  },
  {
    image: "https://www.pagalworld.com.so/uploads/thumb/sft16/7514_4.jpg",
    song: "Sath Tera Hume Har Kadam Chahiye",
    name: ["Payal Dev", "Jubin Nautiyal"],
    url: "./music/Sath Tera Hume Har Kadam Chahiye(PagalWorld.com.so).mp3",
  },
  {
    image: "https://www.pagalworld.com.so/uploads/thumb/sft42/20585_4.jpg",
    song: "Kisi Se Pyar Ho Jaye",
    name: ["Jubin Nautiyal"],
    url: "./music/Kisi Se Pyar Ho Jaye(PagalWorld.com.so).mp3",
  },
  {
    image: "https://www.pagalworld.com.so/uploads/thumb/sft17/8147_4.jpg",
    song: "Humko Sirf Tumse Pyar Hai",
    name: ["Pritishraj"],
    url: "./music/Humko Sirf Tumse Pyar Hai(PagalWorld.com.so).mp3",
  },
  {
    image: "https://www.pagalworld.com.so/uploads/thumb/sft34/16657_4.jpg",
    song: "Ek Mulaqaat",
    name: ["Vishal Mishra", "Shreya Ghoshal"],
    url: "./music/Ek Mulaqaat(PagalWorld.com.so).mp3",
  },
  {
    image: "https://www.pagalworld.com.so/uploads/thumb/sft33/16358_4.jpg",
    song: "Baarish Ke Aane Se",
    name: ["Shreya Ghoshal", "Tony Kakkar"],
    url: "./music/Baarish Ke Aane Se(PagalWorld.com.so).mp3",
  },
  {
    image:
      "https://c.saavncdn.com/719/Tauba-Tauba-From-Bad-Newz-Hindi-2024-20240702073742-500x500.jpg",
    song: "Husn Tera Tauba Tauba",
    name: ["Karan Aujla"],
    url: "./music/Husn Tera Tauba Tauba_64(PagalWorld.com.sb).mp3",
  },
  {
    image: "https://www.pagalworld.com.sb/siteuploads/thumb/sft135/67064_4.jpg",
    song: "Guli Mata",
    name: ["Saad Lamjarred", "Shreya Ghoshal"],
    url: "./music/Guli Mata_192(PagalWorld.com.sb).mp3",
  },
  {
    image:
      "https://c.saavncdn.com/690/O-Mere-Humnava-Hindi-2024-20240322160338-500x500.jpg",
    song: "O Mere Humnava",
    name: ["Sonu Nigam"],
    url: "./music/O Mere Humnava(PagalWorld.com.sb).mp3",
  },
  {
    image:
      "https://c.saavncdn.com/001/Rocky-Aur-Rani-Kii-Prem-Kahaani-Hindi-2024-20240515173546-500x500.jpg",
    song: "Rocky Aur Rani Kii Prem Kahaani (2023)",
    name: ["Sonu Nigam", "Shilpa Rao"],
    url: "./music/Ro Lain De_64(PagalWorld.com.sb).mp3",
  },
  {
    image:
      "https://c.saavncdn.com/085/Krrish-Hindi-2006-20221201153524-500x500.jpg",
    song: "Chori Chori Chupke Chupke",
    name: ["Udit Narayan", "Shreya Ghoshal"],
    url: "./music/Chori Chori Chupke Chupke(PagalWorld.com.sb).mp3",
  },
  {
    image:
      "https://c.saavncdn.com/307/Qayamat-Se-Qayamat-Tak-Hindi-1988-20221210131805-500x500.jpg",
    song: "Papa Kehte Hain ",
    name: ["Udit Narayan"],
    url: "./music/Papa Kehte Hain(PagalWorld.com.sb).mp3",
  },
  {
    image: "https://www.pagalworld.com.so/uploads/thumb/sft42/20780_4.jpg",
    song: "Jannatein Kahan Bin Hue Fanaa",
    name: ["KK"],
    url: "./music/Jannatein Kahan Bin Hue Fanaa(PagalWorld.com.so).mp3",
  },
  {
    image:
      "https://c.saavncdn.com/235/60-Minute-Date-with-Emraan-Hashmi-Hindi-2015-500x500.jpg",
    song: "Haan Tu Hain",
    name: ["KK"],
    url: "./music/Haan Tu Hain KK(PagalWorld.com.so).mp3",
  },
  {
    image:
      "https://c.saavncdn.com/316/Tum-Mile-Hindi-2009-20190617160526-500x500.jpg",
    song: "Dil Ibadat ",
    name: ["KK"],
    url: "./music/Dil Ibadat(PagalWorld.com.so).mp3",
  },
  {
    image:
      "https://c.saavncdn.com/082/Chale-Aana-From-De-De-Pyaar-De-Hindi-2019-20231017141606-500x500.jpg",
    song: "Juda Hum Ho Gaye Mana",
    name: ["Armaan Malik"],
    url: "./music/Juda Hum Ho Gaye Mana(PagalWorld.com.so).mp3",
  },
  {
    image:
      "https://c.saavncdn.com/461/Dil-Mein-Ho-Tum-From-Why-Cheat-India--Hindi-2018-20190112104012-500x500.jpg",
    song: "Dil Mein Ho Tum",
    name: ["Armaan Malik"],
    url: "./music/Dil Mein Ho Tum(PagalWorld.com.so).mp3",
  },
  {
    image: "https://www.pagalworld.com.so/uploads/thumb/sft31/15357_4.jpg",
    song: "Hamari Kami Tumko Mehsoos Hogi",
    name: ["Armaan Malik"],
    url: "./music/Hamari Kami Tumko Mehsoos Hogi(PagalWorld.com.so).mp3",
  },
  {
    image:
      "https://c.saavncdn.com/880/Dil-Hai-Ke-Manta-Nahin-Hindi-1991-20221124143208-500x500.jpg",
    song: "Tu Pyar Hai Kisi Aur Ka",
    name: ["Anuradha Paudwal", "Kumar Sanu"],
    url: "./music/Tu Pyar Hai Kisi Aur Ka(PagalWorld.com.so).mp3",
  },
  {
    image: "https://www.pagalworld.com.so/uploads/thumb/sft45/22287_4.jpg",
    song: "Kahin Pyaar Na Ho Jaaye",
    name: ["Alka Yagnik", "Kumar Sanu"],
    url: "./music/Kahin Pyaar Na Ho Jaaye(PagalWorld.com.so).mp3",
  },
  {
    image:
      "https://c.saavncdn.com/964/MasterWorks-Kishore-Kumar-Hindi-2016-500x500.jpg",
    song: "Neele Neele Ambar Par",
    name: ["Kishore Kumar"],
    url: "./music/Neele Neele Ambar Par Kishore Kumar(PagalWorld.com.so).mp3",
  },
  {
    image:
      "https://c.saavncdn.com/710/Muqaddar-Ka-Sikandar-Hindi-1978-20190417133222-500x500.jpg",
    song: "O Saathi Re",
    name: ["Kishore Kumar"],
    url: "./music/O Saathi Re(PagalWorld.com.so).mp3",
  },
  {
    image:
      "https://c.saavncdn.com/149/Bhiga-Bhiga-Samaa-Hindi-2023-20240720123435-500x500.jpg",
    song: "Bheega Bheega Hai Sama",
    name: ["Lata Mangeshkar"],
    url: "./music/Bheega Bheega Hai Sama(PagalWorld.com.so).mp3",
  },
  {
    image:
      "https://c.saavncdn.com/018/Halka-Halka-Unplugged-Hindi-2018-20180816-500x500.jpg",
    song: "Halka Halka Suroor Hai",
    name: ["Neha Kakkar"],
    url: "./music/Halka Halka Suroor Hai(PagalWorld.com.so).mp3",
  },
  {
    image:
      "https://c.saavncdn.com/293/Dilbar-Ishare-Tere-Tere-Te-From-T-Series-Mixtape-Season-2-Hindi-2019-20240530191332-500x500.jpg",
    song: "Jis Din Tere Hoye Ye Jamana Dekhuga",
    name: ["Neha Kakkar"],
    url: "./music/Jis Din Tere Hoye Ye Jamana Dekhuga(PagalWorld.com.so).mp3",
  },
];

const localArtist = [
  { singer: "Arijit Singh", img: "./image/Arijit.jpg" },
  {
    singer: "Sonu Nigam",
    img: "https://a10.gaanacdn.com/gn_img/artists/kGxbn03y4r/Gxbn1keMWy/size_m_1717412376.jpg",
  },
  { singer: "Udit Narayan", img: "./image/udit.jpg" },
  { singer: "Shreya Ghoshal", img: "./image/Shreya Ghoshal.jpg" },
  { singer: "Jubin Nautiyal", img: "./image/Jubin Nautiyal.jpg" },
  { singer: "Armaan Malik", img: "./image/Armaan Malik.jpg" },
  { singer: "KK", img: "./image/KK.jpg" },
  { singer: "Neha Kakkar", img: "./image/Neha Kakkar.jpg" },
  {
    singer: "Tulsi Kumar",
    img: "https://a10.gaanacdn.com/gn_img/artists/81l3Me3rMx/81l3Me3rMx/size_m_1720178097.jpg",
  },
  {
    singer: "Darshan Raval",
    img: "https://a10.gaanacdn.com/gn_img/artists/zLp36v3rGe/Lp36BL5v3r/size_m_1720183611.jpg",
  },
  {
    singer: "Sachet Tandon",
    img: "https://a10.gaanacdn.com/gn_img/artists/10q3Z1K52r/0q3Z5LloK5/size_l_1720177664.webp",
  },
  {
    singer: "Guru Randhawa",
    img: "https://a10.gaanacdn.com/gn_img/artists/z8k3y13rxo/8k3yDjnnKr/size_m_1716895027.jpg",
  },
  {
    singer: "Rahat Fateh Ali Khan",
    img: "https://i.scdn.co/image/ab6761610000e5ebac45eaf028dc58810df0f382",
  },
  { singer: "Kumar Sanu", img: "./image/Kumar Sanu.jpg" },
  { singer: "Kishore Kumar", img: "./image/Kishore Kumar.jpg" },
  { singer: "Lata Mangeshkar", img: "./image/Lata Mangeshkar.jpg" },
];

localStorage.setItem("artist", JSON.stringify(localArtist));
localStorage.setItem("music", JSON.stringify(data));

function artistData() {
  const localArtData = JSON.parse(localStorage.getItem("artist"));
  let artistHTML = "";
  localArtData.forEach((e) => {
    artistHTML += `
      <a class="col text-decoration-none" href="./search.html?query=${e.singer}" >
        <div style="width: 12rem; position: relative;">
          <img src="${e.img}" class="card-img-top rounded-circle" alt="..." style="width: 200px; height: 200px; object-fit: cover;box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;">
          <button type="button" class="z-1 position-absolute" style="top: 60%; left: 95%; transform: translate(-50%, -50%); background: transparent; border: none;">
            <img src="./image/play-button (2).png" style="height: 50px; width: auto;">
          </button>
          <div class="card-body d-flex align-items-center flex-column mt-2">
            <h5 class="card-title" style="color: white;">${e.singer}</h5>
            <p class="card-text" style="color: white;">Artist</p>
          </div>
        </div>
      </a>
    `;
  });
  document.getElementById("artists").innerHTML = artistHTML;
}

function fetchLocal() {
  const local = JSON.parse(localStorage.getItem("music"));
  let albumsHTML = "";

  local.forEach((e) => {
    albumsHTML += `
      <div class="card bg-dark" style="width: 18rem; position: relative; margin: 10px; box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px;">
        <img src="${e.image}" class="card-img-top" alt="${e.name}" width="100%" height="250px">
        
        <!-- Button trigger modal -->
        <button type="button" class="btn z-1 position-absolute" style="top: 10%; left:90%; transform: translate(-50%, -50%);">
          <img src="./image/like.png" style="height: 30px; width: auto;">
        </button>
        <button type="button" class="btn z-1 position-absolute play-button" style="top: 50%; left:80%; transform: translate(-50%, -50%);" data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-image="${e.image}" data-title="${e.song}" data-name="${e.name}" data-url="${e.url}">
          <img src="./image/play-button (2).png" style="height: 50px; width: auto;">
        </button>
        
        <div class="card-body" style="color:white">
          <h5 class="card-title">${e.song}</h5>
          <p class="card-text">${e.name}</p>
        </div>
      </div>
    `;
  });
  document.getElementById("albums").innerHTML = albumsHTML;

  attachModalEventListeners();
}

function searchFun() {
  const localMusic = JSON.parse(localStorage.getItem("music"));
  const searchQuery = document.getElementById("search").value.toLowerCase();
  let filteredHTML = "";

  localMusic.forEach((e) => {
    if (searchQuery !== "") {
      if (
        e.song.toLowerCase().includes(searchQuery) ||
        e.name.some((name) => name.toLowerCase().includes(searchQuery))
      ) {
        filteredHTML += `
          <div class="card bg-dark" style="width: 18rem; position: relative; margin: 10px; box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px;">
            <img src="${e.image}" class="card-img-top" alt="${e.name.join(
          ", "
        )}" width="100%" height="250px">
            
            <!-- Button trigger modal -->
            <button type="button" class="btn z-1 position-absolute play-button" style="top: 50%; left:80%; transform: translate(-50%, -50%);" data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-image="${
              e.image
            }" data-title="${e.song}" data-name="${e.name.join(
          ", "
        )}" data-url="${e.url}">
              <img src="./image/play-button (2).png" style="height: 50px; width: auto;">
            </button>
            
            <div class="card-body">
              <h5 class="card-title">${e.song}</h5>
              <p class="card-text">${e.name.join(", ")}</p>
            </div>
          </div>
        `;
      }
    }
  });

  const searchResults = document.getElementById("search-results");
  searchResults.innerHTML = filteredHTML;

  if (searchQuery) {
    document.getElementById("inner-content").style.display = "none";
  } else {
    document.getElementById("inner-content").style.display = "block";
  }

  attachModalEventListeners();
}

function attachModalEventListeners() {
  const playButtons = document.querySelectorAll(".play-button");

  playButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const image = this.getAttribute("data-image");
      const title = this.getAttribute("data-title");
      const name = this.getAttribute("data-name");
      const url = this.getAttribute("data-url");

      const modalImage = document.getElementById("modal-image");
      const modalTitle = document.getElementById("modal-title");
      const modalText = document.getElementById("modal-text");
      const modalAudioSource = document.querySelector("#modal-audio source");

      modalImage.src = image;
      modalImage.alt = name;
      modalTitle.textContent = title;
      modalText.textContent = name;
      modalAudioSource.src = url;

      const modalAudio = document.getElementById("modal-audio");
      modalAudio.load();
    });
  });
}

fetchLocal();
artistData();
