const ctx = document.getElementById("chart");

function rand(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* ================= METRICS ================= */

function updateMetrics(){

  document.getElementById("visitors").textContent = rand(1200, 5000);
  document.getElementById("projects").textContent = rand(10, 80);
  document.getElementById("followers").textContent = rand(1000, 20000);
  document.getElementById("engagement").textContent = rand(40, 99) + "%";
}

setInterval(updateMetrics, 2000);
updateMetrics();

/* ================= CHART ================= */

const chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    datasets: [{
      label: "Activity",
      data: [20,35,15,40,60,30,70],
      borderColor: "#1db954",
      backgroundColor: "rgba(29,185,84,0.15)",
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive:true,
    animation:false,
    plugins:{ legend:{ display:false } },
    scales:{
      x:{ ticks:{ color:"#aaa" } },
      y:{ ticks:{ color:"#aaa" } }
    }
  }
});

/* REAL TIME CHART UPDATE */

setInterval(() => {

  chart.data.datasets[0].data =
  chart.data.datasets[0].data.map(() =>
    rand(10, 80)
  );

  chart.update();

}, 2000);