const songs = {
songin () {
$(document).ready(() => {

  // Use jQuery to get a reference to `load-songs`
  const loadSongContainer = $("#load-songs");
  

  // Use jQuery to get a reference to `song-list`
  const songListContainer = $("#song-list");


  /*
      Attach a click handler to the button with jQuery. When
      the button is clicked, use $.ajax() to load `songs.json`
      from the file system
  */
 loadSongContainer.click(function(){
  $.ajax({url: "http://localhost:8088/songs", success: (result) => {
    // console.log(result);
  }})
  .then(songs => {
    songs.forEach(element => {
      console.log(element);
      
      
    });
  })
});

  /*
      Chain a `.then()` method to the ajax call, and when
      it is complete build a DOM component for each song with
      the following structure. Use the jQuery append() method
      to put an HTML representation of each song the DOM as a
      child component of the .

          <section class="song">
              <h1 class="song__title">{Title of song}</h1>
              <section class="song__description">
                  Performed by {artist} on the album {album}
              </section>
          </section>
  */
  })
 }
};

export default songs