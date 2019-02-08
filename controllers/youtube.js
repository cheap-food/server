const axios = require('axios')

module.exports = {
    getVideos(req, res) {
        axios
            .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${req.query.search}&key=${process.env.YOUTUBE_KEY}&type=video`)
            .then(({data}) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json({
                    msg: 'internal server error',
                    err: err
                })
            })
    }
}