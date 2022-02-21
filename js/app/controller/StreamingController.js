class StreamingController {
 
    static getElements(){
        return {
            player : document.querySelector(".web-cam__player__video"),
            tag : document.querySelector(".photos__photos-collection")
        }
    }
    static initView(){
        const {player, tag} = this.getElements();
        this.photosView = new PhotosView(tag, player)
    }
    static async startVideo() {
        const {player} = this.getElements();
        this.stream = await UserMedia.getUserMedia();
        this.userMediaDao = new UserMediaDao(this.stream);
        this.userMediaDao.startVideo(player);
    }
    static async stopVideo() {
        this.userMediaDao.stopVideo();
    }
    static capturePhoto() {
        this.photosView.update(); 
    }
}