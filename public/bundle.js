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
          success: result => {// console.log(result);
          }
        }).then(songs => {
          songs.forEach(element => {
            console.log(element);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL3NvbmdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUVBLGVBQU0sTUFBTjs7Ozs7Ozs7O0FDRkEsTUFBTSxLQUFLLEdBQUc7QUFDZCxFQUFBLE1BQU0sR0FBSTtBQUNWLElBQUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZLEtBQVosQ0FBa0IsTUFBTTtBQUV0QjtBQUNBLFlBQU0saUJBQWlCLEdBQUcsQ0FBQyxDQUFDLGFBQUQsQ0FBM0IsQ0FIc0IsQ0FNdEI7O0FBQ0EsWUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUMsWUFBRCxDQUEzQjtBQUdBOzs7Ozs7QUFLRCxNQUFBLGlCQUFpQixDQUFDLEtBQWxCLENBQXdCLFlBQVU7QUFDakMsUUFBQSxDQUFDLENBQUMsSUFBRixDQUFPO0FBQUMsVUFBQSxHQUFHLEVBQUUsNkJBQU47QUFBcUMsVUFBQSxPQUFPLEVBQUcsTUFBRCxJQUFZLENBQy9EO0FBQ0Q7QUFGTSxTQUFQLEVBR0MsSUFIRCxDQUdNLEtBQUssSUFBSTtBQUNiLFVBQUEsS0FBSyxDQUFDLE9BQU4sQ0FBYyxPQUFPLElBQUk7QUFDdkIsWUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLE9BQVo7QUFHRCxXQUpEO0FBS0QsU0FURDtBQVVELE9BWEE7QUFhQzs7Ozs7Ozs7Ozs7OztBQWNDLEtBMUNIO0FBMkNFOztBQTdDWSxDQUFkO2VBZ0RlLEsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgc29uZ3MgZnJvbSBcIi4vc29uZ3NcIlxuXG5zb25ncy5zb25naW4oKTsiLCJjb25zdCBzb25ncyA9IHtcbnNvbmdpbiAoKSB7XG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG5cbiAgLy8gVXNlIGpRdWVyeSB0byBnZXQgYSByZWZlcmVuY2UgdG8gYGxvYWQtc29uZ3NgXG4gIGNvbnN0IGxvYWRTb25nQ29udGFpbmVyID0gJChcIiNsb2FkLXNvbmdzXCIpO1xuICBcblxuICAvLyBVc2UgalF1ZXJ5IHRvIGdldCBhIHJlZmVyZW5jZSB0byBgc29uZy1saXN0YFxuICBjb25zdCBzb25nTGlzdENvbnRhaW5lciA9ICQoXCIjc29uZy1saXN0XCIpO1xuXG5cbiAgLypcbiAgICAgIEF0dGFjaCBhIGNsaWNrIGhhbmRsZXIgdG8gdGhlIGJ1dHRvbiB3aXRoIGpRdWVyeS4gV2hlblxuICAgICAgdGhlIGJ1dHRvbiBpcyBjbGlja2VkLCB1c2UgJC5hamF4KCkgdG8gbG9hZCBgc29uZ3MuanNvbmBcbiAgICAgIGZyb20gdGhlIGZpbGUgc3lzdGVtXG4gICovXG4gbG9hZFNvbmdDb250YWluZXIuY2xpY2soZnVuY3Rpb24oKXtcbiAgJC5hamF4KHt1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L3NvbmdzXCIsIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICB9fSlcbiAgLnRoZW4oc29uZ3MgPT4ge1xuICAgIHNvbmdzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgICAgIFxuICAgICAgXG4gICAgfSk7XG4gIH0pXG59KTtcblxuICAvKlxuICAgICAgQ2hhaW4gYSBgLnRoZW4oKWAgbWV0aG9kIHRvIHRoZSBhamF4IGNhbGwsIGFuZCB3aGVuXG4gICAgICBpdCBpcyBjb21wbGV0ZSBidWlsZCBhIERPTSBjb21wb25lbnQgZm9yIGVhY2ggc29uZyB3aXRoXG4gICAgICB0aGUgZm9sbG93aW5nIHN0cnVjdHVyZS4gVXNlIHRoZSBqUXVlcnkgYXBwZW5kKCkgbWV0aG9kXG4gICAgICB0byBwdXQgYW4gSFRNTCByZXByZXNlbnRhdGlvbiBvZiBlYWNoIHNvbmcgdGhlIERPTSBhcyBhXG4gICAgICBjaGlsZCBjb21wb25lbnQgb2YgdGhlIC5cblxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwic29uZ1wiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJzb25nX190aXRsZVwiPntUaXRsZSBvZiBzb25nfTwvaDE+XG4gICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwic29uZ19fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgIFBlcmZvcm1lZCBieSB7YXJ0aXN0fSBvbiB0aGUgYWxidW0ge2FsYnVtfVxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAqL1xuICB9KVxuIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNvbmdzIl19
