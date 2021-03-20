function songs(songsList) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let n = songsList.shift();
    let songs = [];

    for (let i = 0; i < n; i++) {
        let currentSong = songsList.shift();
        let [typeList, name, time] = currentSong.split('_');
        let firstSong = new Song(typeList, name, time);
        songs.push(firstSong);
    }

    let wantedList = songsList.shift();

    for (const song of songs) {
        if (song.typeList === wantedList || wantedList === 'all') {
            console.log(song.name);
        }
    }
}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    
)