module.exports = (app, db) => {
    app.get("/mocks", (req, res) => db.MockData.findAll().then((result) => res.json(result)));

    // Would prefer findByPK, which exists in lib but isn't available here.
    app.get("/mock/:id", (req, res) => db.MockData.findOne({
        where: {id: req.params.id}
    }).then((result) => res.json(result)));

    app.post("/mock", (req, res) => db.MockData.create({
        id: req.body.id,
        email: req.body.email,
        message: req.body.message,
        foo: req.body.foo,
        bar: req.body.bar
    }).then((result) => res.json(result)));

    app.put("/mock/:id", (req, res) => db.MockData.update({
        id: req.body.id,
        email: req.body.email,
        message: req.body.message,
        foo: req.body.foo,
        bar: req.body.bar
    }, {
        where: {
            id: req.params.id
        }
    }).then((result) => res.json(result)));

    app.delete("/mock/:id", (req, res) => db.MockData.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => res.json(result)));
};