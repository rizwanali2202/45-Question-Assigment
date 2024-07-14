// define the make_albums function
function make_albums(artist_name : string, album_title : string, tracks? : number){
    let album : {artist: string, title : string, tracks? : number} = {
        artist : artist_name,
        title : album_title,
        };

    if (tracks !== undefined){
        album.tracks = tracks
    }
    return album;
}

// calling three functions and creating 3  variable with different values

let album1 = make_albums("rizwan","artist album rizwan");
let album2 = make_albums("Faizan","artist album Faizan");

// calling a function of make_album with 3rd paramater
let album3 = make_albums("noman","artist album noman", 15);

// take out by using variable
console.log(album1);
console.log(album2);
console.log(album3);
