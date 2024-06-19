'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Atendimento extends Model {
    static associate(models) {
      this.belongsTo(models.Paciente, {
        as:'paciente',
        foreignKey: 'pacienteId'
      })
      this.belongsTo(models.Medico, {
        as:'medico',
        foreignKey: 'medicoId'
      })
    }
  }
  Atendimento.init({
    pacienteId: DataTypes.INTEGER,
    medicoId: DataTypes.INTEGER,
    data_atendimento: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Atendimento',
  });
  return Atendimento;
};