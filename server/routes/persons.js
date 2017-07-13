module.exports = app => {
    const PersonsController = app.controllers.persons;

    app.post('/v1/person',PersonsController.create);
    app.get('/v1/person', PersonsController.retrieve);
    app.get('/v1/person/:id', PersonsController.getOne);
}
