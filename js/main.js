function GetData()  {
    var XMLReq = new XMLHttpRequest();
  
    XMLReq.open( "GET", "https://www.youtube.com/c/OfficialDuckStudios/videos/", true)
  
  
    XMLReq.onreadystatechange = function() {
    // 4 = done, 200 = done
      if(XMLReq.readyState == 4 && XMLReq.status == 200) {
        alert(XMLReq.responseText);
      }
    }
  
    XMLReq.send();
  }

GetData();