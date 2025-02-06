const { KinopoiskApiClient } = require('../api');

module.exports = async (req, res) => {
    // todo: should return corret status code
    res.json(await KinopoiskApiClient.getMovies(req.query));
}