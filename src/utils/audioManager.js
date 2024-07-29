
class AudioManager {
    constructor() {
        this.audioBackground = new Audio("/music/bg_sound.mp3");
        this.audioFail = new Audio("/music/wrong.mp3");
    }

    setAudioBackground(src) {
        this.audioBackground.src = src;
    }

    setAudioFail(src) {
        this.audioFail.src = src;
    }

    playBackgroundSound() {
        this.audioBackground.play().catch(error => {
            console.error('Audio play failed:', error);
            console.log('Audio play failed:', error);
        });
    }

    playSoundGameOver() {
        this.audioFail.play().catch(error => {
            console.error('Audio play failed:', error);
        });
    }

    setBackgroundPlaybackRate(rate) {
        this.audioBackground.playbackRate = rate;
    }

    getAudioBackground() {
        return this.audioBackground;
    }

    getAudioFail() {
        return this.audioFail;
    }
}

const audioManager = new AudioManager();

export default audioManager;
