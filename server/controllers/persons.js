function responseCallback(err, result, res) {
  if(err) return res.status(500).json({ 'error message': err })
  res.status(200).json(result);
}

module.exports = app => {
  const Persons = app.models.persons;

  const PersonsController = {
    create: (req, res) => {
      Persons.create(req.body, (err, result) => { responseCallback(err, result, res) });
    },

    retrieve: (req, res) => {
      Persons.find({}, (err, result) => { responseCallback(err, result, res) });
    },

    getOne: (req, res) => {
      Persons.findOne({ _id: req.params.id }, (err, result) => { responseCallback(err, result, res) });
    },

    update: (req, res) => {
      Persons.update({ _id: req.params.id }, { $set: req.body }, (err, result) => {
        responseCallback(err, result, res);
      })
    },

    delete: (req, res) => {
      Persons.remove({ _id: req.params.id }, (err, result) => { responseCallback(err, result, res) });
    }
  }

  return PersonsController;
}
