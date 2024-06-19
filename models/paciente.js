'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Paciente extends Model {
    static associate(models) {
      this.belongsTo(models.Atendimento, {
        as:'paciente',
        foreignKey: 'id'
      })
      
      this.hasMany(models.Atendimento, {
        as: 'atendimento',
        foreignKey: 'pacienteId'
      })
    }
  }
  Paciente.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    nascimento: DataTypes.DATEONLY,
    telefone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Paciente',
    tableName: 'paciente'
  });
  return Paciente;
};