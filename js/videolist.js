const videoBox = document.getElementById("video-box");
const online = false;
const url = "http://localhost:8080";

const Http = new XMLHttpRequest();
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  if(Http.readyState === XMLHttpRequest.DONE){
    const status = Http.status;
    console.log(status);
    if(status >= 200 && status < 400){
      console.log("http request succeeded");
      jsonToHTML(JSON.parse(Http.responseText));
    }
    else{
      console.log("Something went wrong, status code: " + status + "falling back to offline version");
      $.getJSON("js/duck.json", function (json){
        jsonToHTML(json);
      });
    }
  }
}

function jsonToHTML(json){
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
}
