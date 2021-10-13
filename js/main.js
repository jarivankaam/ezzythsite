function myFunction() {
  // Declare variables
  let input, filter, videoGrid, videoDiv, a, i, txtValue, randomIndex;
  input = document.getElementById('searchbar');
  filter = input.value.toUpperCase();
  videoGrid = document.getElementsByClassName("video-grid");
  videoGrid = videoGrid[0];
  videoDiv = videoGrid.getElementsByClassName('video-div');
  if(filter == "%RANDOM%"){
    randomIndex = Math.floor(Math.random() * (videoDiv.length + 1));
  }

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < videoDiv.length; i++) {
    a = videoDiv[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1 || i == randomIndex) {
      videoDiv[i].style.display = "";
    } else {
      videoDiv[i].style.display = "none";
    }
  }
}
