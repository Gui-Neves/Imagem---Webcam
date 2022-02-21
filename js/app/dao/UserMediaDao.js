class UserMediaDao{

    constructor(stream){
        this.stream = stream;
    }
    startVideo(player){
        console.log(player);
        (player).srcObject = this.stream;
        
    }
    stopVideo(){
        let myTracks = this.stream.getVideoTracks();
        myTracks[0].stop();
    }
}