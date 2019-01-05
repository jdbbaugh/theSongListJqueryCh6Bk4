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
      const loadSongContainer = $("#load-songs"); // Use jQuery to get a reference to `song-list`

      const songListContainer = $("#song-list");
      /*
          Attach a click handler to the button with jQuery. When
          the button is clicked, use $.ajax() to load `songs.json`
          from the file system
      */

      loadSongContainer.click(function () {
        $.ajax({
          url: "http://localhost:8088/songs",
          success: result => {
            console.log(result);
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL3NvbmdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUVBLGVBQU0sTUFBTjs7Ozs7Ozs7O0FDRkEsTUFBTSxLQUFLLEdBQUc7QUFDZCxFQUFBLE1BQU0sR0FBSTtBQUNWLElBQUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZLEtBQVosQ0FBa0IsTUFBTTtBQUV0QjtBQUNBLFlBQU0saUJBQWlCLEdBQUcsQ0FBQyxDQUFDLGFBQUQsQ0FBM0IsQ0FIc0IsQ0FNdEI7O0FBQ0EsWUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUMsWUFBRCxDQUEzQjtBQUdBOzs7Ozs7QUFLRCxNQUFBLGlCQUFpQixDQUFDLEtBQWxCLENBQXdCLFlBQVU7QUFDakMsUUFBQSxDQUFDLENBQUMsSUFBRixDQUFPO0FBQUMsVUFBQSxHQUFHLEVBQUUsNkJBQU47QUFBcUMsVUFBQSxPQUFPLEVBQUcsTUFBRCxJQUFZO0FBQy9ELFlBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0Q7QUFGTSxTQUFQO0FBR0QsT0FKQTtBQU1DOzs7Ozs7Ozs7Ozs7O0FBY0MsS0FuQ0g7QUFvQ0U7O0FBdENZLENBQWQ7ZUF5Q2UsSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBzb25ncyBmcm9tIFwiLi9zb25nc1wiXG5cbnNvbmdzLnNvbmdpbigpOyIsImNvbnN0IHNvbmdzID0ge1xuc29uZ2luICgpIHtcbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcblxuICAvLyBVc2UgalF1ZXJ5IHRvIGdldCBhIHJlZmVyZW5jZSB0byBgbG9hZC1zb25nc2BcbiAgY29uc3QgbG9hZFNvbmdDb250YWluZXIgPSAkKFwiI2xvYWQtc29uZ3NcIik7XG4gIFxuXG4gIC8vIFVzZSBqUXVlcnkgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIGBzb25nLWxpc3RgXG4gIGNvbnN0IHNvbmdMaXN0Q29udGFpbmVyID0gJChcIiNzb25nLWxpc3RcIik7XG5cblxuICAvKlxuICAgICAgQXR0YWNoIGEgY2xpY2sgaGFuZGxlciB0byB0aGUgYnV0dG9uIHdpdGggalF1ZXJ5LiBXaGVuXG4gICAgICB0aGUgYnV0dG9uIGlzIGNsaWNrZWQsIHVzZSAkLmFqYXgoKSB0byBsb2FkIGBzb25ncy5qc29uYFxuICAgICAgZnJvbSB0aGUgZmlsZSBzeXN0ZW1cbiAgKi9cbiBsb2FkU29uZ0NvbnRhaW5lci5jbGljayhmdW5jdGlvbigpe1xuICAkLmFqYXgoe3VybDogXCJodHRwOi8vbG9jYWxob3N0OjgwODgvc29uZ3NcIiwgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgfX0pO1xufSk7XG5cbiAgLypcbiAgICAgIENoYWluIGEgYC50aGVuKClgIG1ldGhvZCB0byB0aGUgYWpheCBjYWxsLCBhbmQgd2hlblxuICAgICAgaXQgaXMgY29tcGxldGUgYnVpbGQgYSBET00gY29tcG9uZW50IGZvciBlYWNoIHNvbmcgd2l0aFxuICAgICAgdGhlIGZvbGxvd2luZyBzdHJ1Y3R1cmUuIFVzZSB0aGUgalF1ZXJ5IGFwcGVuZCgpIG1ldGhvZFxuICAgICAgdG8gcHV0IGFuIEhUTUwgcmVwcmVzZW50YXRpb24gb2YgZWFjaCBzb25nIHRoZSBET00gYXMgYVxuICAgICAgY2hpbGQgY29tcG9uZW50IG9mIHRoZSAuXG5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInNvbmdcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzPVwic29uZ19fdGl0bGVcIj57VGl0bGUgb2Ygc29uZ308L2gxPlxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInNvbmdfX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICBQZXJmb3JtZWQgYnkge2FydGlzdH0gb24gdGhlIGFsYnVtIHthbGJ1bX1cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgKi9cbiAgfSlcbiB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzb25ncyJdfQ==
