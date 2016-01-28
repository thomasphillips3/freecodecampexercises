// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function update(id, prop, value) {
  this.id = id;
  this.prop = prop;
  this.value = value;

  // If value field isn't empty, and prop isn't "tracks",
  // this means we're adding an artist or album name
  if ((value !== "") && (prop !== "tracks"){

  }
  return collection;
}

// Alter values below to test your code
update(5439, "artist", "ABBA");




(function (){
  console.log("Hello IFFE");

})();
