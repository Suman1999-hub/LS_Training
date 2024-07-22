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
  "Sankar Mahadevan",
  "Mohammed Rafi",
  "Jubin Nautiyal",
  "Asha Bhosle",
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
    name: "Arijit Singh",
    url: "./music/O Maahi_320(PagalWorld.com.so).mp3",
  },
  {
    image:
      "https://c.saavncdn.com/739/Kabhi-Shaam-Dhale-Hindi-2023-20231105053244-500x500.jpg",
    song: "Kabhi Shaam Dhale",
    name: "Jaani,Mohammad Faiz",
    url: "./music/Kabhi Shaam Dhale(PagalWorld.com.so).mp3",
  },
  {
    image: "https://www.pagalworld.com.so/uploads/thumb/sft30/14824_4.jpg",
    song: "Heeriye ",
    name: "Arijit Singh,Jasleen Royal",
    url: "./music/Heeriye(PagalWorld.com.so).mp3",
  },
  {
    image: "https://www.pagalworld.com.so/uploads/thumb/sft29/14401_4.jpg",
    song: "Tu Hai To Mujhe Phir Aur Kya Chahiye",
    name: "Arijit Singh",
    url: "./music/Tu Hai To Mujhe Phir Aur Kya Chahiye(PagalWorld.com.so).mp3",
  },
  {
    image: "https://www.pagalworld.com.so/uploads/thumb/sft45/22100_4.jpg",
    song: "Zor Ki Barsaat Hui",
    name: "Jubin Nautiyal",
    url: "./music/Zor Ki Barsaat Hui (Slowed Reverb)(PagalWorld.com.so).mp3",
  },
  {
    image: "https://www.pagalworld.com.so/uploads/thumb/sft31/15164_4.jpg",
    song: " Ki Dil Yaadan Rakhda Ae Sambh Sambh",
    name: "Harnoor",
    url: "./music/Ki Dil Yaadan Rakhda Ae Sambh Sambh Ke(PagalWorld.com.so).mp3",
  },
  {
    image: "https://www.pagalworld.com.so/uploads/thumb/sft16/7514_4.jpg",
    song: " Sath Tera Hume Har Kadam Chahiye ",
    name: "Payal Dev, Jubin Nautiyal",
    url: "./music/Sath Tera Hume Har Kadam Chahiye(PagalWorld.com.so).mp3",
  },
  {
    image: "https://www.pagalworld.com.so/uploads/thumb/sft42/20585_4.jpg",
    song: "Kisi Se Pyar Ho Jaye",
    name: "Jubin Nautiyal",
    url: "./music/Kisi Se Pyar Ho Jaye(PagalWorld.com.so).mp3",
  },
  {
    image: "https://www.pagalworld.com.so/uploads/thumb/sft17/8147_4.jpg",
    song: "Humko Sirf Tumse Pyar Hai",
    name: "Pritishraj",
    url: "./music/Humko Sirf Tumse Pyar Hai(PagalWorld.com.so).mp3",
  },
  {
    image: "https://www.pagalworld.com.so/uploads/thumb/sft34/16657_4.jpg",
    song: "Ek Mulaqaat",
    name: "Vishal Mishra,Shreya Ghoshal",
    url: "./music/Ek Mulaqaat(PagalWorld.com.so).mp3",
  },
  {
    image: "https://www.pagalworld.com.so/uploads/thumb/sft33/16358_4.jpg",
    song: "Baarish Ke Aane Se",
    name: "Shreya Ghoshal,Tony Kakkar",
    url: "./music/Baarish Ke Aane Se(PagalWorld.com.so).mp3",
  },
];
localStorage.setItem("music", JSON.stringify(data));

function fetchLocal() {
  const local = JSON.parse(localStorage.getItem("music"));
  //console.log(local);
  let albumsHTML = "";

  local.forEach((e) => {
    console.log(e.image);
    albumsHTML += `
    <a href="#" class="btn text-decoration-none">
      <div class="card" style="width: 18rem;">
          <img src="${e.image}" class="card-img-top" alt="${e.name}" width="100%" height="250px">
              <div class="card-body">
                <h5 class="card-title">${e.song}</h5>
                <p class="card-text">${e.name}</p>
                <audio controls style="max-width: 250px">
                  <source src="${e.url}">
                  <source src="${e.url}" type="audio/mpeg">
                  Your browser does not support the audio tag.
                </audio>
                
              </div>
      </div>
    </a>`;
    albums.innerHTML = albumsHTML;
  });
  const audioElements = document.querySelectorAll("audio");
  audioElements.forEach((audio) => {
    audio.addEventListener("play", () => {
      audioElements.forEach((otherAudio) => {
        if (otherAudio !== audio) {
          otherAudio.pause();
        }
      });
    });
  });
}

fetchLocal();
