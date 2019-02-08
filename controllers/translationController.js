const googleTranslate = require('google-translate')(process.env.GOOGLE_TRANSLATE_KEY);

class TranslationController {
    static translateToIndo(req, res) {
        googleTranslate.translate(req.body.words, req.body.lang, function(err, translation) {
            if (err) {
                res
                    .status(500)
                    .json({
                        msg: `Internal Server Error`,
                        err: err
                    })
            } else {
                res
                    .status(200)
                    .json(translation)
            }
        });
    }

    static getAllLangs(req, res) {
        googleTranslate.getSupportedLanguages('de', function(err, languageCodes) {
            if (err) {
                res
                    .status(500)
                    .json({
                        msg: `Internal Server Error`,
                        err: err
                    })                 
            } else {
                res
                    .status(200)
                    .json(languageCodes)
            }
        });
    }
}

module.exports = TranslationController