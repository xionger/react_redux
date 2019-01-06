import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Apologize', duration: '4:10' },
        { title: 'All Star', duration: '3:20' },
        { title: 'Crazy', duration: '2:45' },
        { title: 'Poker Face', duration: '4:05' }
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
      return action.payload;
    }
  
    return selectedSong;
  };

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
  });