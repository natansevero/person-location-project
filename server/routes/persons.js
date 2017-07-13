module.exports = app => {
    const PersonsController = app.controllers.persons;

    app.post('/api/v1/person', PersonsController.create);
    app.get('/api/v1/person', PersonsController.retrieve);
    app.get('/api/v1/person/:id', PersonsController.getOne);
    app.put('/api/v1/person/:id', PersonsController.update);
    app.delete('/api/v1/person/:id', PersonsController.delete);
}
