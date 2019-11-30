const Quimico = require('../models/quimico.js')

const getQuimicos = function(req, res) {
  Quimico.find({}).then(function(quimicos) {
    res.send(quimicos)
  }).catch(function(error){
    res.status(500).send(error)
  })
}

const getQuimico = function(req, res) {
  _id = req.params.id
  Quimico.findById(_id).then(function(quimico) {
    return res.send(quimico)
  }).catch(function(error) {
    return res.status(404).send({})
  })
}

const createQuimico = function(req, res) {
  const quimico = new Quimico(req.body)
  quimico.save().then(function() {
    return res.send(quimico)
  }).catch(function(error) {
    return res.send(400).send(error)
  })
}

const updateQuimico = function(req, res) {
  const _id = req.params.id
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'hazards', 'firstAid']
  // revisa que los updates enviados sean permitidos, que no envie una key que no permitimos
  const isValidUpdate = updates.every((update) => allowedUpdates.includes(update))

  if( !isValidUpdate ) {
    return res.status(400).send({
      error: 'Invalid update, only allowed to update: ' + allowedUpdates
    })
  }
  Quimico.findByIdAndUpdate(_id, req.body ).then(function(quimico) {
    if (!quimico) {
      return res.status(404).send({})
    }
    return res.send(quimico)
  }).catch(function(error) {
    res.status(500).send(error)
  })
}


const deleteQuimico = function(req, res) {
  const _id = req.params.id
  Quimico.findByIdAndDelete(_id).then(function(quimico){
    if(!quimico) {
      return res.status(404).send({})
    }
    return res.send(quimico)
  }).catch(function(error) {
    res.status(505).send(error)
  })
}


module.exports = {
  getQuimicos,
  getQuimico,
  createQuimico,
  updateQuimico,
  deleteQuimico
}
