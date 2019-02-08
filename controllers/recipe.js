const axios = require('axios')

module.exports = {
  search: function(req, res) {
    // search nama menu recipe
    // console.log(process.env.FOOD2FORK_KEY)
    req.params.page = req.params.page || 1
    // console.log(req.body.search)
    req.body.search = req.body.search || ''
    // jika error hapus "req.params.page" pada query get
    axios.get(`https://www.food2fork.com/api/search?key=${process.env.FOOD2FORK_KEY}&q=${req.body.search}`)
      .then( function(response) {
        res
          .status(200)
          .json(response.data)
      })
      .catch( function(err) {
        res
          .status(500)
          .json({ msg : `internal server error`, err : err.message })
      })
  },

  getRecipeDetail: function(req, res) {
    // console.log(req.params.id)
    axios.get(`https://www.food2fork.com/api/get?key=${process.env.FOOD2FORK_KEY}&rId=${req.params.rId}`)
      .then( function(response) {
        res
          .status(200)
          .json(response.data)
      })
      .catch( function(err) {
        res
          .status(500)
          .json({ msg : `internal server error`, err : err.message })
      })
  }
}