(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _songs = _interopRequireDefault(require("./songs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_songs.default.songin();

},{"./songs":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const songs = {
  songin() {
    $(document).ready(() => {
      // Use jQuery to get a reference to `load-songs`
      const loadSongContainer = $("#load-songs");
      $(loadSongContainer).text("Click for Song List"); // Use jQuery to get a reference to `song-list`

      const songListContainer = $("#song-list");
      /*
          Attach a click handler to the button with jQuery. When
          the button is clicked, use $.ajax() to load `songs.json`
          from the file system
      */

      loadSongContainer.click(function () {
        $.ajax({
          url: "http://localhost:8088/songs",
          success: result => {// console.log(result);
          }
        }).then(songs => {
          // console.log(songs)
          songs.forEach(element => {
            console.log(element.title);
            $(`<section class="song">
      <h1 class="song__title">${element.title}</h1><hr>
      <section class="song__description">
          Performed by ${element.artist} on the album ${element.album}
      </section>
      </section>`).appendTo(songListContainer);
          });
        });
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
    });
  }

};
var _default = songs;
exports.default = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL3NvbmdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUVBLGVBQU0sTUFBTjs7Ozs7Ozs7O0FDRkEsTUFBTSxLQUFLLEdBQUc7QUFDZCxFQUFBLE1BQU0sR0FBSTtBQUNWLElBQUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZLEtBQVosQ0FBa0IsTUFBTTtBQUV0QjtBQUNBLFlBQU0saUJBQWlCLEdBQUcsQ0FBQyxDQUFDLGFBQUQsQ0FBM0I7QUFDQSxNQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCLElBQXJCLENBQTBCLHFCQUExQixFQUpzQixDQU90Qjs7QUFDQSxZQUFNLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxZQUFELENBQTNCO0FBR0E7Ozs7OztBQUtELE1BQUEsaUJBQWlCLENBQUMsS0FBbEIsQ0FBd0IsWUFBVTtBQUNqQyxRQUFBLENBQUMsQ0FBQyxJQUFGLENBQU87QUFBQyxVQUFBLEdBQUcsRUFBRSw2QkFBTjtBQUFxQyxVQUFBLE9BQU8sRUFBRyxNQUFELElBQVksQ0FDL0Q7QUFDRDtBQUZNLFNBQVAsRUFHQyxJQUhELENBR00sS0FBSyxJQUFJO0FBQ2I7QUFDQSxVQUFBLEtBQUssQ0FBQyxPQUFOLENBQWMsT0FBTyxJQUFJO0FBQ3ZCLFlBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxPQUFPLENBQUMsS0FBcEI7QUFDQSxZQUFBLENBQUMsQ0FBRTtnQ0FDdUIsT0FBTyxDQUFDLEtBQU07O3lCQUVyQixPQUFPLENBQUMsTUFBTyxpQkFBZ0IsT0FBTyxDQUFDLEtBQU07O2lCQUgvRCxDQUFELENBS2EsUUFMYixDQUtzQixpQkFMdEI7QUFNRCxXQVJEO0FBVUQsU0FmRDtBQWdCRCxPQWpCQTtBQW1CQzs7Ozs7Ozs7Ozs7OztBQWNDLEtBakRIO0FBa0RFOztBQXBEWSxDQUFkO2VBdURlLEsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgc29uZ3MgZnJvbSBcIi4vc29uZ3NcIlxuXG5zb25ncy5zb25naW4oKTsiLCJjb25zdCBzb25ncyA9IHtcbnNvbmdpbiAoKSB7XG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG5cbiAgLy8gVXNlIGpRdWVyeSB0byBnZXQgYSByZWZlcmVuY2UgdG8gYGxvYWQtc29uZ3NgXG4gIGNvbnN0IGxvYWRTb25nQ29udGFpbmVyID0gJChcIiNsb2FkLXNvbmdzXCIpO1xuICAkKGxvYWRTb25nQ29udGFpbmVyKS50ZXh0KFwiQ2xpY2sgZm9yIFNvbmcgTGlzdFwiKTtcbiAgXG5cbiAgLy8gVXNlIGpRdWVyeSB0byBnZXQgYSByZWZlcmVuY2UgdG8gYHNvbmctbGlzdGBcbiAgY29uc3Qgc29uZ0xpc3RDb250YWluZXIgPSAkKFwiI3NvbmctbGlzdFwiKTtcblxuXG4gIC8qXG4gICAgICBBdHRhY2ggYSBjbGljayBoYW5kbGVyIHRvIHRoZSBidXR0b24gd2l0aCBqUXVlcnkuIFdoZW5cbiAgICAgIHRoZSBidXR0b24gaXMgY2xpY2tlZCwgdXNlICQuYWpheCgpIHRvIGxvYWQgYHNvbmdzLmpzb25gXG4gICAgICBmcm9tIHRoZSBmaWxlIHN5c3RlbVxuICAqL1xuIGxvYWRTb25nQ29udGFpbmVyLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICQuYWpheCh7dXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9zb25nc1wiLCBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcbiAgfX0pXG4gIC50aGVuKHNvbmdzID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhzb25ncylcbiAgICBzb25ncy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgY29uc29sZS5sb2coZWxlbWVudC50aXRsZSk7XG4gICAgICAkKGA8c2VjdGlvbiBjbGFzcz1cInNvbmdcIj5cbiAgICAgIDxoMSBjbGFzcz1cInNvbmdfX3RpdGxlXCI+JHtlbGVtZW50LnRpdGxlfTwvaDE+PGhyPlxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzb25nX19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgIFBlcmZvcm1lZCBieSAke2VsZW1lbnQuYXJ0aXN0fSBvbiB0aGUgYWxidW0gJHtlbGVtZW50LmFsYnVtfVxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9zZWN0aW9uPmApLmFwcGVuZFRvKHNvbmdMaXN0Q29udGFpbmVyKTtcbiAgICB9KTtcblxuICB9KVxufSk7XG5cbiAgLypcbiAgICAgIENoYWluIGEgYC50aGVuKClgIG1ldGhvZCB0byB0aGUgYWpheCBjYWxsLCBhbmQgd2hlblxuICAgICAgaXQgaXMgY29tcGxldGUgYnVpbGQgYSBET00gY29tcG9uZW50IGZvciBlYWNoIHNvbmcgd2l0aFxuICAgICAgdGhlIGZvbGxvd2luZyBzdHJ1Y3R1cmUuIFVzZSB0aGUgalF1ZXJ5IGFwcGVuZCgpIG1ldGhvZFxuICAgICAgdG8gcHV0IGFuIEhUTUwgcmVwcmVzZW50YXRpb24gb2YgZWFjaCBzb25nIHRoZSBET00gYXMgYVxuICAgICAgY2hpbGQgY29tcG9uZW50IG9mIHRoZSAuXG5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInNvbmdcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzPVwic29uZ19fdGl0bGVcIj57VGl0bGUgb2Ygc29uZ308L2gxPlxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInNvbmdfX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICBQZXJmb3JtZWQgYnkge2FydGlzdH0gb24gdGhlIGFsYnVtIHthbGJ1bX1cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgKi9cbiAgfSlcbiB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzb25ncyJdfQ==
