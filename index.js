const audio = new Audio();

let favorites = [];
let recent = [];
let totalPlays = 0;

const albums = [
{
  name:"Thriller",
  cover:"PICS/thriller album.jpg",
  songs:[
    { title:"Billie Jean", file:"music/BILLIE JEAN.weba", artist:"Michael Jackson"}, 
    { title:"Thriller", file:"music/thriller.mp3", artist:"Michael Jackson"},
    { title:"Wanna Be Startin' Somethin", file:"music/Wanna Be Startin' Somethin'.mp3", artist:"Michael Jackson" },
    { title:"The Lady In My Life", file:"music/The Lady In My Life.mp3", artist:"Michael Jackson" },
    { title:"The Girl Is Mine", file:"music/The Girl Is Mine.mp3", artist:"Michael Jackson"},
    { title:"Human Nature", file:"music/Human Nature.mp3", artist:"Michael Jackson"},
    { title:"Baby Be Mine", file:"music/Baby Be Mine.mp3", artist:"Michael Jackson"}, 
    { title:"Beat It", file:"music/Beat It.mp3", artist:"Michael Jackson" }
  ]
},
{
  name:"After Hours",
  cover:"PICS/The Weeknd.jfif",
  songs:[
    { title:"The Morning", file:"music/The Morning.mp3", artist:"The Weeknd"}, 
    { title:"The Hills", file:"music/The Hills.mp3", artist:"The Weeknd"},
    { title:"Sao Paulo", file:"music/sao.mp3", artist:"The Weeknd" },
    { title:"I Was Never There", file:"music/I Was Never There.mp3", artist:"The Weeknd" },
    { title:"What You Need", file:"music/What You Need.mp3", artist:"The Weeknd"}
  ]
},
{
  name:"Chicken n Beer",
  cover:"PICS/chicken.jfif",
  songs:[
     { title:"Act A Fool", file:"music/Act A Fool luda.mp3", artist:"Ludacris"}, 
    { title:"Move Bitch", file:"music/Move Bitch 2.mp3", artist:"Ludacris"},
    { title:"Stand Up", file:"music/Stand Up luda.mp3", artist:"Ludacris" },
    { title:"Hard Times", file:"music/Hard Times luda.mp3", artist:"Ludacris" },
    { title:"Blow It Out", file:"music/Blow It Out luda.mp3", artist:"Ludacris"}
  ]
},
{
  name:"Bully",
  cover:"PICS/bully.jfif",
  songs:[
     { title:"THIS A MUST", file:"music/THIS A MUST.mp3", artist:"Kanye West"}, 
    { title:"PREACHER MAN", file:"music/PREACHER MAN.mp3", artist:"Kanye West"}, 
    { title:"LAST BREATH", file:"music/LAST BREATH (feat. Peso Pluma).mp3", artist:"Kanye West"}, 
    { title:"FATHER", file:"music/FATHER (feat. Travis Scott).mp3", artist:"Kanye West"}
  ]
},
{
  name:"Tupac Greatest Hits",
  cover:"PICS/pac2.jfif",
  songs:[
     { title:"Hit 'Em Up", file:"music/Hit 'Em Up.mp3", artist:"Tupac"}, 
    { title:"2 Of Amerikaz Most Wanted", file:"music/2 Of Amerikaz Most Wanted.mp3", artist:"Tupac"},
    { title:"California Love", file:"music/California Love.mp3", artist:"Tupac" },
    { title:"Dear Mama", file:"music/Dear Mama.mp3", artist:"Tupac" }
  ]
},
{
  name:"An Evening With Silk Sonic",
  cover:"PICS/bruno2.png",
  songs:[ 
    { title:"After Last Night", file:"music/After Last Night.mp3", artist:"Bruno Mars, Anderson .Paak, Thundercat"},
    { title:"Leave The Door Open", file:"music/Leave The Door Open.mp3", artist:"Bruno Mars, Anderson .Paak, Thundercat"},
    { title:"Smokin Out The Window", file:"music/Smokin Out The Window.mp3", artist:"Bruno Mars, Anderson .Paak, Thundercat" },
    { title:"Skate", file:"music/Skate.mp3", artist:"Bruno Mars, Anderson .Paak, Thundercat"},
    { title:"Love's Train", file:"music/Love's Train.mp3", artist:"Bruno Mars, Anderson .Paak, Thundercat"}
  ]
},
{
  name:"OK Computer",
  cover:"PICS/ok.png",
  songs:[ 
    { title:"Exit Music", file:"music/Exit Music.mp3", artist:"Radiohead"},
    { title:"Let Down", file:"music/Let Down.mp3", artist:"Radiohead"},
    { title:"Karma Police", file:"music/Karma Police.mp3", artist:"Radiohead" },
    { title:"No Surprises", file:"music/No Surprises.mp3", artist:"Radiohead"},
    { title:"Lucky", file:"music/Lucky.mp3", artist:"Radiohead"}
  ]
},
{
  name:"Sabrina Carpenter",
  cover:"PICS/Sab.png",
  songs:[ 
    { title:"Manchild", file:"music/Manchild.mp3", artist:"Sabrina Carpenter"},
    { title:"Tears", file:"music/Tears.mp3", artist:"Sabrina Carpenter"},
    { title:"My Man on Willpower", file:"music/My Man on Willpower.mp3", artist:"Sabrina Carpenter" },
    { title:"Sugar Talking", file:"music/Sugar Talking.mp3", artist:"Sabrina Carpenter"},
    { title:"We Almost Broke Up Again Last Night", file:"music/We Almost Broke Up Again Last Night.mp3", artist:"Sabrina Carpenter"}
  ]
},
{
  name:"Silakbo",
  cover:"PICS/silakbo.png",
  songs:[ 
    { title:"Multo", file:"music/Multo.mp3", artist:"Cup of Joe"},
    { title:"'Di Maaari", file:"music/di.mp3", artist:"Cup of Joe"},
    { title:"Hinga", file:"music/Hinga.mp3", artist:"Cup of Joe" },
    { title:"Silakbo", file:"music/Silakbo.mp3", artist:"Cup of Joe"},
    { title:"Bagyo", file:"music/Bagyo.mp3", artist:"Cup of Joe"}
  ]
},
{
  name:"Blond",
  cover:"PICS/Frank.png",
  songs:[ 
    { title:"Pink + White", file:"music/Pink + White.mp3", artist:"Frank Ocean"},
    { title:"Nights", file:"music/Nights.mp3", artist:"Frank Ocean"},
    { title:"White Ferarri", file:"music/White Ferarri.mp3", artist:"Frank Ocean" },
    { title:"Seigfried", file:"music/Seigfried.mp3", artist:"Frank Ocean"},
    { title:"Godspeed", file:"music/Godspeed.mp3", artist:"Frank Ocean"}
  ]
},
{
  name:"Travis Scott",
  cover:"PICS/Trav.jpg",
  songs:[ 
    { title:"90210", file:"music/90210.mp3", artist:"Travis Scott"},
    { title:"FE!N", file:"music/FE!N.mp3", artist:"Travis Scott"},
    { title:"MY EYES", file:"music/MY EYES.mp3", artist:"Travis Scott" },
    { title:"sdp interlude", file:"music/sdp interlude.mp3", artist:"Travis Scott"},
    { title:"goosebumps", file:"music/goosebumps.mp3", artist:"Travis Scott"}
  ]
},
{
  name:"Don Toliver",
  cover:"PICS/don.jfif",
  songs:[ 
    { title:"Tiramisu", file:"music/Tiramisu.mp3", artist:"Don Toliver"},
    { title:"E85", file:"music/E85.mp3", artist:"Don Toliver"},
    { title:"No Idea", file:"music/No Idea.mp3", artist:"Don Toliver" },
    { title:"No Pole", file:"music/No Pole.mp3", artist:"Don Toliver"},
    { title:"You", file:"music/You (feat. Travis Scott).mp3", artist:"Don Toliver"}
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

playBtn.onclick = ()=>{

  if(audio.paused){

    audio.play();

    playBtn.textContent = "⏸";

    animateWave();
  }

  else{

    audio.pause();

    playBtn.textContent = "▶";
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

  recent = recent.slice(0,10);

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

function animateWave(){

  const bars =
  document.querySelectorAll(".wave span");

  if(audio.paused){

    bars.forEach(bar=>{

      bar.style.height = "5px";
    });

    return;
  }

  bars.forEach(bar=>{

    bar.style.height =
    Math.random() * 30 + 5 + "px";

  });

  requestAnimationFrame(animateWave);
};


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
    <div class="mini-left">
        <img id="miniCover" src="" />
        <div>
            <p id="miniTitle">Not Playing</p>
            <small id="miniArtist">---</small>
        </div>
    </div>

    <div class="mini-controls">
        <button id="miniPrev">⏮</button>
        <button id="miniPlay">▶</button>
        <button id="miniNext">⏭</button>
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
  } else {
    audio.pause();
    miniPlay.textContent = "▶";
    playBtn.textContent = "▶";
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
