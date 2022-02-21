class UserMedia {

    static getUserMedia() {
        return new Promise((resolve, reject) => {
            navigator.getUserMedia(
                { video: true }, 
                (stream) =>  {
                    resolve(stream);
                },
                (err) =>  {
                    alert('Erro ao ligar a camera');
                }
            )
        });
    }
}