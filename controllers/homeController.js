module.exports = {
    index: function (req, res) {
        res.render('index', {
            title: "Index"
        });
    },

    about: function (req, res) {
        res.render('alerts', {
            title: "Alerts"
        });
    }
};