'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medico extends Model {
    static associate(models) {
        this.belongsTo(models.Atendimento, {
          as:'medico',
          foreignKey: 'id'
        })

        this.hasMany(models.Atendimento, {
          as: 'atendimento',
          foreignKey: 'medicoId'
        })
      }
    }

  Medico.init({
    nome: DataTypes.STRING,
    registro: DataTypes.STRING,
    cpf: DataTypes.STRING,
    telefone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Medico',
    tableName: 'medico'
  });
  return Medico;
};