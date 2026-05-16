const audio = new Audio();

let favorites = [];
let recent = [];
let totalPlays = 0;

const albums = [
{
  name:"Thriller",
  cover:"PICS/thriller album.jpg",
  songs:[
    { title:"Billie Jean", file:"MUSIC/BILLIE JEAN.weba", artist:"Michael Jackson", album: "Thriller", genre: "Pop",}, 
    { title:"Thriller", file:"MUSIC/Thriller.mp3", artist:"Michael Jackson", album: "Thriller", genre: "Pop"},
    { title:"Wanna Be Startin' Somethin", file:"MUSIC/Wanna Be Startin' Somethin'.mp3", artist:"Michael Jackson", album: "Thriller", genre: "Pop" },
    { title:"The Lady in My Life", file:"MUSIC/The Lady in My Life.mp3", artist:"Michael Jackson", album: "Thriller", genre: "Pop" },
    { title:"The Girl Is Mine", file:"MUSIC/The Girl Is Mine.mp3", artist:"Michael Jackson", album: "Thriller", genre: "Pop"},
    { title:"Human Nature", file:"MUSIC/Human Nature.mp3", artist:"Michael Jackson", album: "Thriller", genre: "Pop"},
    { title:"Baby Be Mine", file:"MUSIC/Baby Be Mine.mp3", artist:"Michael Jackson", album: "Thriller", genre: "Pop"}, 
    { title:"Beat It", file:"MUSIC/Beat It.mp3", artist:"Michael Jackson", album: "Thriller", genre: "Pop" }
  ]
},
{
  name:"After Hours",
  cover:"PICS/The Weeknd.jfif",
  songs:[
    { title:"The Morning", file:"MUSIC/The Morning.mp3", artist:"The Weeknd", album: "After Hours", genre: "R&B"}, 
    { title:"The Hills", file:"MUSIC/The Hills.mp3", artist:"The Weeknd", album: "After Hours", genre: "R&B"},
    { title:"Sao Paulo", file:"MUSIC/sao.mp3", artist:"The Weeknd", album: "After Hours", genre: "R&B" },
    { title:"I Was Never There", file:"MUSIC/I Was Never There.mp3", artist:"The Weeknd", album: "After Hours", genre: "R&B" },
    { title:"What You Need", file:"MUSIC/What You Need.mp3", artist:"The Weeknd", album: "After Hours", genre: "R&B"}
  ]
},
{
  name:"Chicken n Beer",
  cover:"PICS/chicken.jfif",
  songs:[
     { title:"Act A Fool", file:"MUSIC/Act A Fool luda.mp3", artist:"Ludacris", album: "Chicken n Beer", genre: "Hip Hop"}, 
    { title:"Move Bitch", file:"MUSIC/Move Bitch 2.mp3", artist:"Ludacris", album: "Chicken n Beer", genre: "Hip Hop"},
    { title:"Stand Up", file:"MUSIC/Stand Up luda.mp3", artist:"Ludacris", album: "Chicken n Beer", genre: "Hip Hop" },
    { title:"Hard Times", file:"MUSIC/Hard Times luda.mp3", artist:"Ludacris", album: "Chicken n Beer", genre: "Hip Hop" },
    { title:"Blow It Out", file:"MUSIC/Blow It Out luda.mp3", artist:"Ludacris", album: "Chicken n Beer", genre: "Hip Hop"}
  ]
},
{
  name:"Bully",
  cover:"PICS/bully.jfif",
  songs:[
     { title:"THIS A MUST", file:"MUSIC/THIS A MUST.mp3", artist:"Kanye West", album: "Bully", genre: "Hip Hop"}, 
    { title:"PREACHER MAN", file:"MUSIC/PREACHER MAN.mp3", artist:"Kanye West", album: "Bully", genre: "Hip Hop"}, 
    { title:"LAST BREATH", file:"MUSIC/LAST BREATH (feat. Peso Pluma).mp3", artist:"Kanye West", album: "Bully", genre: "Hip Hop"}, 
    { title:"FATHER", file:"MUSIC/FATHER (feat. Travis Scott).mp3", artist:"Kanye West", album: "Bully", genre: "Hip Hop"}
  ]
},
{
  name:"Tupac Greatest Hits",
  cover:"PICS/pac2.jfif",
  songs:[
     { title:"Hit 'Em Up", file:"MUSIC/Hit 'Em Up.mp3", artist:"Tupac", album: "Greatest Hits", genre: "Hip Hop"}, 
    { title:"2 Of Amerikaz Most Wanted", file:"MUSIC/2 Of Amerikaz Most Wanted.mp3", artist:"Tupac", album: "Greatest Hits", genre: "Hip Hop"},
    { title:"California Love", file:"MUSIC/California Love.mp3", artist:"Tupac", album: "Greatest Hits", genre: "Hip Hop" },
    { title:"Dear Mama", file:"MUSIC/Dear Mama.mp3", artist:"Tupac", album: "Greatest Hits", genre: "Hip Hop" }
  ]
},
{
  name:"An Evening With Silk Sonic",
  cover:"PICS/bruno2.png",
  songs:[ 
    { title:"After Last Night", file:"MUSIC/After Last Night.mp3", artist:"Bruno Mars, Anderson .Paak, Thundercat", album: "An Evening With Silk Sonic", genre: "Funk" },
    { title:"Leave The Door Open", file:"MUSIC/Leave The Door Open.mp3", artist:"Bruno Mars, Anderson .Paak, Thundercat", album: "An Evening With Silk Sonic", genre: "Funk" },
    { title:"Smokin Out The Window", file:"MUSIC/Smokin Out The Window.mp3", artist:"Bruno Mars, Anderson .Paak, Thundercat", album: "An Evening With Silk Sonic", genre: "Funk" },
    { title:"Skate", file:"MUSIC/Skate.mp3", artist:"Bruno Mars, Anderson .Paak, Thundercat", album: "An Evening With Silk Sonic", genre: "Funk" },
    { title:"Love's Train", file:"MUSIC/Love's Train.mp3", artist:"Bruno Mars, Anderson .Paak, Thundercat", album: "An Evening With Silk Sonic", genre: "Funk" }
  ]
},
{
  name:"OK Computer",
  cover:"PICS/ok.png",
  songs:[ 
    { title:"Exit Music", file:"MUSIC/Exit Music.mp3", artist:"Radiohead", album: "OK Computer", genre: "Alternative" },
    { title:"Let Down", file:"MUSIC/Let Down.mp3", artist:"Radiohead", album: "OK Computer", genre: "Alternative" },
    { title:"Karma Police", file:"MUSIC/Karma Police.mp3", artist:"Radiohead", album: "OK Computer", genre: "Alternative" },
    { title:"No Surprises", file:"MUSIC/No Surprises.mp3", artist:"Radiohead", album: "OK Computer", genre: "Alternative" },
    { title:"Lucky", file:"MUSIC/Lucky.mp3", artist:"Radiohead", album: "OK Computer", genre: "Alternative" }
  ]
},
{
  name:"Sabrina Carpenter",
  cover:"PICS/Sab.png",
  songs:[ 
    { title:"Manchild", file:"MUSIC/Manchild.mp3", artist:"Sabrina Carpenter", album: "Sabrina Carpenter", genre: "Pop" },
    { title:"Tears", file:"MUSIC/Tears.mp3", artist:"Sabrina Carpenter", album: "Sabrina Carpenter", genre: "Pop" },
    { title:"My Man on Willpower", file:"MUSIC/My Man on Willpower.mp3", artist:"Sabrina Carpenter", album: "Sabrina Carpenter", genre: "Pop" },
    { title:"Sugar Talking", file:"MUSIC/Sugar Talking.mp3", artist:"Sabrina Carpenter", album: "Sabrina Carpenter", genre: "Pop" },
    { title:"We Almost Broke Up Again Last Night", file:"MUSIC/We Almost Broke Up Again Last Night.mp3", artist:"Sabrina Carpenter", album: "Sabrina Carpenter", genre: "Pop" }
  ]
},
{
  name:"Silakbo",
  cover:"PICS/silakbo.png",
  songs:[ 
    { title:"Multo", file:"MUSIC/Multo.mp3", artist:"Cup of Joe", album: "Silakbo", genre: "Pop" },
    { title:"'Di Maaari", file:"MUSIC/di.mp3", artist:"Cup of Joe", album: "Silakbo", genre: "Pop" },
    { title:"Hinga", file:"MUSIC/Hinga.mp3", artist:"Cup of Joe", album: "Silakbo", genre: "Pop" },
    { title:"Silakbo", file:"MUSIC/Silakbo.mp3", artist:"Cup of Joe", album: "Silakbo", genre: "Pop" },
    { title:"Bagyo", file:"MUSIC/Bagyo.mp3", artist:"Cup of Joe", album: "Silakbo", genre: "Pop" }
  ]
},
{
  name:"Blond",
  cover:"PICS/Frank.png",
  songs:[ 
    { title:"Pink + White", file:"MUSIC/Pink + White.mp3", artist:"Frank Ocean", album: "Blond", genre: "R&B" },
    { title:"Nights", file:"MUSIC/Nights.mp3", artist:"Frank Ocean", album: "Blond", genre: "R&B" },
    { title:"White Ferrari", file:"MUSIC/White Ferrari.mp3", artist:"Frank Ocean", album: "Blond", genre: "R&B" },
    { title:"Seigfried", file:"MUSIC/Seigfried.mp3", artist:"Frank Ocean", album: "Blond", genre: "R&B" },
    { title:"Godspeed", file:"MUSIC/Godspeed.mp3", artist:"Frank Ocean", album: "Blond", genre: "R&B" }
  ]
},
{
  name:"Travis Scott",
  cover:"PICS/Trav.jpg",
  songs:[ 
    { title:"90210", file:"MUSIC/90210.mp3", artist:"Travis Scott", album: "Astroworld", genre: "Hip Hop" },
    { title:"FE!N", file:"MUSIC/FE!N.mp3", artist:"Travis Scott", album: "Astroworld", genre: "Hip Hop" },
    { title:"MY EYES", file:"MUSIC/MY EYES.mp3", artist:"Travis Scott", album: "Astroworld", genre: "Hip Hop" },
    { title:"sdp interlude", file:"MUSIC/sdp interlude.mp3", artist:"Travis Scott", album: "Astroworld", genre: "Hip-Hop" },
    { title:"goosebumps", file:"MUSIC/goosebumps.mp3", artist:"Travis Scott", album: "Astroworld", genre: "Hip Hop" }
  ]
},
{
  name:"Don Toliver",
  cover:"PICS/don.jfif",
  songs:[ 
    { title:"Tiramisu", file:"MUSIC/Tiramisu.mp3", artist:"Don Toliver", album: "Don Toliver", genre: "Pop" },
    { title:"E85", file:"MUSIC/E85.mp3", artist:"Don Toliver", album: "Don Toliver", genre: "Pop" },
    { title:"No Idea", file:"MUSIC/No Idea.mp3", artist:"Don Toliver", album: "Don Toliver", genre: "Pop" },
    { title:"No Pole", file:"MUSIC/No Pole.mp3", artist:"Don Toliver", album: "Don Toliver", genre: "Pop" },
    { title:"You", file:"MUSIC/You (feat. Travis Scott).mp3", artist:"Don Toliver", album: "Don Toliver", genre: "Pop" }
  ]
}
];

let currentList = albums[0].songs;
let currentIndex = 0;

const playBtn =
document.getElementById("playBtn");

const progressBar =
document.getElementById("progressBar");

/* ================= PAGE NAVIGATION ================= */

document.querySelectorAll(".nav-btn")
.forEach(btn=>{

  btn.onclick = ()=>{

    document.querySelectorAll(".page")
    .forEach(page=>{
      page.classList.remove("active-page");
    });

    document.querySelectorAll(".nav-btn")
    .forEach(nav=>{
      nav.classList.remove("active-nav");
    });

    document.getElementById(btn.dataset.view)
    .classList.add("active-page");

    btn.classList.add("active-nav");

    //THIS MAKES MINI PLAYER SHOW/HIDE PROPERLY
    toggleMini();

  };

});

/* ================= PLAY SONG ================= */

async function playSong(){

  const song =
  currentList[currentIndex];

  if(!song) return;

  audio.src = song.file;

  await audio.play();

  playBtn.textContent = "⏸";

  totalPlays++;

  updateProfileStats();

  updateNowPlaying(song);

  addRecent(song);

  renderQueue();

  animateWave();
}

/* ================= NOW PLAYING ================= */

function updateNowPlaying(song){

  document.getElementById("songTitle")
  .textContent = song.title;

  document.getElementById("songArtist")
  .textContent = song.artist;

  document.getElementById("songArtist")
  .textContent = song.artist;

  const album =
  albums.find(a =>
    a.songs.includes(song)
  );

  document.querySelector(".now-cover")
  .src = album.cover;
}

/* ================= ALBUM CLICK ================= */

document.addEventListener("click", (e) => {

  const item = e.target.closest(".album-item");
  if (!item) return;

  const index = Number(item.dataset.index);

  console.log("album clicked:", index);

  if (isNaN(index) || !albums[index]) {
    console.log("Invalid album index");
    return;
  }

  currentList = albums[index].songs;
  currentIndex = 0;

  playSong();
});
    
document.querySelectorAll(".album-card")
.forEach((card, index) => {

  card.onclick = () => {

    if (!albums[index]) {
      console.log("No album found at index:", index);
      return;
    }

    currentList = albums[index].songs;
    currentIndex = 0;

    playSong();
  };

});

/* ================= ARTIST CLICK ================= */

document.querySelectorAll(".artist-card")
.forEach(card=>{

  card.onclick = ()=>{

    const artist =
    card.dataset.artist;

    currentList = [];

    albums.forEach(album=>{

      album.songs.forEach(song=>{

        if(song.artist === artist){

          currentList.push(song);
        }

      });

    });

    currentIndex = 0;

    playSong();
  };

});

/* ================= CONTROLS ================= */

playBtn.onclick = () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸";
    startWave(); // ✅ FIX
  } else {
    audio.pause();
    playBtn.textContent = "▶";
    stopWave(); // ✅ FIX
  }
};

document.getElementById("nextBtn")
.onclick = ()=>{

  currentIndex =
  (currentIndex + 1)
  % currentList.length;

  playSong();
};

document.getElementById("prevBtn")
.onclick = ()=>{

  currentIndex =
  (currentIndex - 1 + currentList.length)
  % currentList.length;

  playSong();
};

/*SPACE PAUSE*/

document.addEventListener("keydown", (e) => {
  if (e.code !== "Space") return;

  const tag = document.activeElement.tagName.toLowerCase();
  if (tag === "input" || tag === "textarea") return;

  if (!audio.src) return;

  e.preventDefault();

  const isPlaying = !audio.paused;

  if (isPlaying) {
    audio.pause();
    playBtn.textContent = "▶";

    if (typeof miniPlay !== "undefined") {
      miniPlay.textContent = "▶";
    }
  } else {
    audio.play();
    playBtn.textContent = "⏸";

    if (typeof miniPlay !== "undefined") {
      miniPlay.textContent = "⏸";
    }
  }
});

/* ================= PROGRESS ================= */

audio.addEventListener("timeupdate", ()=>{

  if(!audio.duration) return;

  progressBar.value =
  (audio.currentTime / audio.duration)
  * 100;

  document.getElementById("currentTime")
  .textContent =
  format(audio.currentTime);

  document.getElementById("duration")
  .textContent =
  format(audio.duration);

});

progressBar.addEventListener("input", ()=>{

  audio.currentTime =
  (progressBar.value / 100)
  * audio.duration;

});

//AUTO PLA

audio.addEventListener("ended", () => {
  currentIndex = (currentIndex + 1) % currentList.length;
  playSong();
});

function format(time){

  const mins =
  Math.floor(time / 60);

  const secs =
  Math.floor(time % 60);

  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

/* ================= QUEUE ================= */

function renderQueue(){

  const panel =
  document.getElementById("queuePanel");

  panel.innerHTML = "<h3>Queue</h3>";

  currentList.forEach((song,index)=>{

    const div =
    document.createElement("div");

    div.className = "song-item";

    const isFav =
    favorites.some(f =>
      f.title === song.title
    );

    div.innerHTML = `
      <span>${song.title}</span>

      <button class="fav-btn">
        ${isFav ? "❤️" : "🤍"}
      </button>
    `;

    if(index === currentIndex){

      div.classList.add("active-song");
    }

    div.onclick = ()=>{

      currentIndex = index;

      playSong();
    };

    div.querySelector(".fav-btn")
    .onclick = (e)=>{

      e.stopPropagation();

      toggleFav(song);
    };

    panel.appendChild(div);

  });

}

/* ================= FAVORITES ================= */

function toggleFav(song){

  const index =
  favorites.findIndex(f =>
    f.title === song.title
  );

  if(index > -1){

    favorites.splice(index,1);
  }

  else{

    favorites.push(song);
  }

  renderFavorites();

  renderQueue();

  updateProfileStats();
}

function renderFavorites(){

  const panel =
  document.getElementById("favoritePanel");

  panel.innerHTML = "<h3>Favorites</h3>";

  favorites.forEach((song)=>{

    const div = document.createElement("div");
    div.className = "song-item";

    div.innerHTML = `<span>${song.title}</span>`;

    div.onclick = ()=>{ playFrom(favorites, favorites.indexOf(song)); };

    panel.appendChild(div);
  });

}

/* ================= RECENT ================= */

function addRecent(song){

  // REMOVE IF ALREADY EXISTS FIRST (prevents doubling)
  recent = recent.filter(s => s.title !== song.title);

  recent.unshift(song);

  recent = recent.slice(0,20);

  renderRecent();
  updateProfileStats();
}

function renderRecent(){

  const panel = document.getElementById("recentPanel");

  panel.innerHTML = "<h3>Recently Played</h3>";

  recent.forEach((song)=>{

    const div = document.createElement("div");
    div.className = "song-item";

    div.innerHTML = `<span>${song.title}</span>`;

    div.onclick = ()=>{ playFrom(recent, recent.indexOf(song));};

    panel.appendChild(div);
  });

}

/* ================= PROFILE ================= */

function updateProfileStats(){

  document.getElementById("totalPlays")
  .textContent = totalPlays;

  document.getElementById("totalFavorites")
  .textContent =
  favorites.length;

  document.getElementById("totalRecent")
  .textContent =
  recent.length;
}

/* ================= WAVE ================= */

let waveRunning = false;

function animateWave() {
  if (!waveRunning) return;

  const bars = document.querySelectorAll(".wave span");

  bars.forEach(bar => {
    bar.style.height = (Math.random() * 30 + 5) + "px";
  });

  requestAnimationFrame(animateWave);
}

function startWave() {
  if (waveRunning) return;
  waveRunning = true;
  animateWave();
}

function stopWave() {
  waveRunning = false;

  document.querySelectorAll(".wave span").forEach(bar => {
    bar.style.height = "5px";
  });
}


/* ================= FIX: LIBRARY PAGE (ALL SONGS LISTED + PLAYABLE) ================= */

function renderLibrary(){

  const container = document.getElementById("favoritesPageList");
  if(!container) return;

  container.innerHTML = "";

  const allSongs = albums.flatMap(a => a.songs);

  allSongs.forEach((song)=>{

    const div = document.createElement("div");
    div.className = "song-item";

    div.innerHTML = `
      <span>${song.title} - ${song.artist}</span>
    `;

    div.onclick = ()=>{

      // 🔥 THIS is the real fix
      const startIndex = allSongs.indexOf(song);

      currentList = allSongs;      // FULL LIBRARY
      currentIndex = startIndex;   // START FROM CLICKED SONG

      playSong(); // continue forward + loop
    };

    container.appendChild(div);
  });
}


/* ================= AUTO LOAD LIBRARY WHEN OPENED ================= */

document.querySelectorAll(".nav-btn").forEach(btn=>{

  btn.addEventListener("click", ()=>{

    if(btn.dataset.view === "favoritesPage"){
      renderLibrary();
    }

  });

});

function playFrom(list, index) {

  if (!list || list.length === 0) return;

  currentList = list;
  currentIndex = index;

  const song = currentList[currentIndex];
  if (!song) return;

  audio.src = song.file;
  audio.load();

  audio.play().then(() => {
    playBtn.textContent = "⏸";
  });

  updateNowPlaying(song);
  updateMiniPlayer(song);

  addRecent(song);
  renderQueue();
}

/* ================= INIT ================= */
renderLibrary();
renderQueue();
renderFavorites();
renderRecent();
updateProfileStats();

/* ================= MINI PLAYER (ADDON - DO NOT MODIFY CORE) ================= */

const miniPlayer = document.createElement("div");
miniPlayer.className = "mini-player";

miniPlayer.innerHTML = `
    <div class="mini-top">

        <div class="mini-left">
            <img id="miniCover" src="" />

            <div class="mini-info">
                <p id="miniTitle">Not Playing</p>
                <small id="miniArtist">---</small>
            </div>
        </div>

        <div class="mini-controls">
            <button id="miniPrev">⏮</button>
            <button id="miniPlay">▶</button>
            <button id="miniNext">⏭</button>
        </div>

    </div>

    <div class="mini-bottom">

        <span id="miniCurrent">0:00</span>

        <input
          type="range"
          id="miniProgress"
          min="0"
          max="100"
          value="0"
        >

        <span id="miniDuration">0:00</span>

    </div>
`;

document.body.appendChild(miniPlayer);

/* ================= MINI ELEMENTS ================= */
const miniTitle = document.getElementById("miniTitle");
const miniArtist = document.getElementById("miniArtist");
const miniCover = document.getElementById("miniCover");

const miniPlay = document.getElementById("miniPlay");
const miniNext = document.getElementById("miniNext");
const miniPrev = document.getElementById("miniPrev");

miniPlay.onclick = () => {
  if (!audio.src) return;

  if (audio.paused) {
    audio.play();
    miniPlay.textContent = "⏸";
    playBtn.textContent = "⏸";
    startWave(); // ✅ FIX
  } else {
    audio.pause();
    miniPlay.textContent = "▶";
    playBtn.textContent = "▶";
    stopWave(); // ✅ FIX
  }
};

/* ================= MINI PLAYER CONTROL ================= */

miniNext.onclick = () => {
  if (!currentList.length) return;

  currentIndex = (currentIndex + 1) % currentList.length;
  playSong();
};

miniPrev.onclick = () => {
  if (!currentList.length) return;

  currentIndex =
    (currentIndex - 1 + currentList.length) % currentList.length;

  playSong();
}; 


/* ================= SYNC MINI PLAYER ================= */

function updateMiniPlayer(song) {
    if (!song) return;

    miniTitle.textContent = song.title;
    miniArtist.textContent = song.artist;

    const album = albums.find(a => a.songs.includes(song));
    miniCover.src = album ? album.cover : "";
}

/* ================= OVERRIDE YOUR NOW PLAYING (SAFE EXTEND) ================= */

const oldPlaySong = playSong;

playSong = function () {
    oldPlaySong();

    const song = currentList[currentIndex];
    updateMiniPlayer(song);
    toggleMini();
};

// SAFE FIX: prevent crash if setPlaylist doesn't exist
let oldSetPlaylist = null;

if (typeof setPlaylist === "function") {
    oldSetPlaylist = setPlaylist;

    setPlaylist = function (list, index, source) {
        if (oldSetPlaylist) {
            oldSetPlaylist(list, index, source);
        }

        const song = currentList[currentIndex];
        updateMiniPlayer(song);
        toggleMini();
    };
}

/* ================= MINI VISIBILITY ================= */

function toggleMini() {
    const homePage = document.getElementById("homePage");

    if (homePage.classList.contains("active-page")) {
        miniPlayer.style.display = "none";
    } else {
        miniPlayer.style.display = "flex";
    }
}

/* ================= KEEP MINI SYNC ================= */

audio.addEventListener("play", () => {
    miniPlay.textContent = "⏸";
});

audio.addEventListener("pause", () => {
    miniPlay.textContent = "▶";
});

/* ================= AUTO SYNC ON INIT ================= */
setTimeout(() => {
    toggleMini();
}, 300);

//load
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loadingScreen");

  setTimeout(() => {
    if (loader) {
      loader.style.opacity = "0";
      loader.style.transition = "0.4s ease";

      setTimeout(() => {
        loader.style.display = "none";
      }, 400);
    }
  }, 600);
});

//search
let searchInput;
let searchResults;

document.addEventListener("DOMContentLoaded", () => {

  searchInput = document.getElementById("searchBar");
  searchResults = document.getElementById("searchResults");

  const allSongs = albums.flatMap(album => album.songs);

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();

    searchResults.innerHTML = "";

    if (!query) {
      searchResults.style.display = "none";
      return;
    }

    const matches = allSongs.filter(song =>
      song.title.toLowerCase().includes(query) ||
      song.artist.toLowerCase().includes(query)
    ).slice(0, 8);

    if (matches.length === 0) {
      searchResults.style.display = "none";
      return;
    }

    searchResults.style.display = "block";

    matches.forEach(song => {
      const div = document.createElement("div");
      div.className = "search-item";

      div.innerHTML = `
        <span>${song.title}</span>
        <small>${song.artist}</small>
      `;

      div.onclick = () => {
        const index = allSongs.indexOf(song);

        currentList = allSongs;
        currentIndex = index;

        playSong();

        searchResults.style.display = "none";
        searchInput.value = "";
      };

      searchResults.appendChild(div);
    });
  });

});

const volumeSlider = document.getElementById("volumeSlider");
const volumeValue = document.getElementById("volumeValue");

// set initial volume
audio.volume = 1;

volumeSlider.addEventListener("input", () => {
  const volume = volumeSlider.value / 100;
  audio.volume = volume;

  volumeValue.textContent = volumeSlider.value + "%";
});

/* ================= MINI PLAYER PROGRESS ================= */

const miniProgress = document.getElementById("miniProgress");
const miniCurrent = document.getElementById("miniCurrent");
const miniDuration = document.getElementById("miniDuration");

audio.addEventListener("timeupdate", () => {

  if (!audio.duration) return;

  // progress %
  const percent =
    (audio.currentTime / audio.duration) * 100;

  // FIX
  miniProgress.value = percent;

  // current time
  miniCurrent.textContent =
    format(audio.currentTime);

  // duration
  miniDuration.textContent =
    format(audio.duration);
});

/* SEEKING */
miniProgress.addEventListener("input", () => {

  audio.currentTime =
    (miniProgress.value / 100) * audio.duration;

});
