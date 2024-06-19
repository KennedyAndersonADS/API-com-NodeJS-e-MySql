'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Atendimentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pacienteId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'paciente'
          },
          key: 'id',
          onUpdate: 'RESTRICT',
          onDelete: 'RESTRICT'
        },
        allowNull: false
      },
      medicoId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'medico'
          },
          key: 'id',
          onUpdate: 'RESTRICT',
          onDelete: 'RESTRICT'
        },
        allowNull: false
      },
      data_atendimento: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Atendimentos');
  }
};