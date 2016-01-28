// You are given a JSON object representing (a small part of) your record collection. Each album is identified by a unique id number and has several properties. Not all albums have complete information.
// Write a function which takes an id, a property (prop), and a value.
// For the given id in collection:
// If value is non-blank (value !== "") and prop is not "tracks" then update or set the value for the prop.
// If the prop is "tracks" and value is non-blank, push the value onto the end of the tracks array.
// If value is blank, delete that prop.
// Always return the entire collection object.
// Note: Don't forget to use bracket notation when accessing object properties with variables.

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
  if ((value !== "") && (prop !== "tracks")){
    collectionCopy[id][prop] = value;
  } else if ((value !== "") && (prop === "tracks")) {
    collectionCopy[id][prop].push(value);
  } else if (value === ""){
    delete collectionCopy[id][prop];
  }
  return collection;
}

// Alter values below to test your code
update(5439, "artist", "ABBA");




(function (){
  console.log("Hello IFFE");

})();
