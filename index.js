const ctime = document.getElementById('ctime')
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
const time = `Current Time : ${hours}:${minutes}:${seconds}`
ctime.innerHTML = `<p>${time}</p>`


