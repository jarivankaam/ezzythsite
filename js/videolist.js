const videoBox = document.getElementById("video-box");
let data;
$.getJSON("js/duck.json", function (json){
  json.forEach((val) =>{
    const div = document.createElement("div");
    const a = document.createElement("a");
    div.setAttribute("class", "video-div clickable-background")
    a.setAttribute("href", val['link']);
    a.setAttribute("class", "reset");
    a.innerHTML = val['title'];
    div.appendChild(a);
    videoBox.appendChild(div);
  });
});
