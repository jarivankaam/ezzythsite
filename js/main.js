function myFunction() {
  // Declare variables
  let input, filter, videoGrid, videoDiv, a, i, txtValue;
  input = document.getElementById('searchbar');
  filter = input.value.toUpperCase();
  videoGrid = document.getElementsByClassName("video-grid");
  videoGrid = videoGrid[0];
  videoDiv = videoGrid.getElementsByClassName('video-div');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < videoDiv.length; i++) {
    a = videoDiv[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      videoDiv[i].style.display = "";
    } else {
      videoDiv[i].style.display = "none";
    }
  }
}
