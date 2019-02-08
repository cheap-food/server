const axios = require('axios')

module.exports = {
    getVideos(req, res) {
        axios
            .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${req.query.search}&key=${process.env.YOUTUBE_KEY}&type=video&maxResult=3`)
            .then(({data}) => {
                let result = data.items.map(item => {
                    return item.id.videoId
                })
                res.status(200).json({result})
            })
            .catch(err => {
                res.status(500).json({
                    msg: 'internal server error',
                    err: err
                })
            })
    }
}