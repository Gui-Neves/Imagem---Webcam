class PhotosView{

    constructor(tag, player){
        this.tag = tag;
        this.player = player;
    }
    update(){ 
        let canvas = document.createElement("canvas")
        canvas.classList.add("photos__photos__collection__canvas");
        canvas.getContext('2d').drawImage(this.player, 0, 0, 1000, 1000, 0, 0, 300, 300);      
        this.tag.appendChild(canvas);
    }
}