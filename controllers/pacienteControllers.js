const { Paciente } = require('../models')

module.exports = class pacienteControllers {
    // novo
    static async createPaciente(req, res) {
        try {
            await Paciente.create({
                nome: req.body.nome,
                cpf:req.body.cpf,
                nascimento: new Date(req.body.nascimento),
                telefone: req.body.telefone
            });
            res.status(200).json({data: "Paciente adicionado"});
        }catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async showPacientes(req, res) {
        try {
            const pacientes = await Paciente.findAll();
            res.status(200).json({pacientes});
        }catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async showPaciente(req, res) {
        try {
            const id = req.params.id
            const paciente = await Paciente.findByPk(id);
            res.status(200).json({paciente});
        }catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async pacienteAtendimentos(req, res) {
        try {
            const id = req.params.id
            const paciente = await Paciente.findByPk(id, {
                include:'atendimento'
            });
            res.status(200).json({paciente});
        }catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async updatePaciente(req, res) {
        try {
            const id = req.params.id
            const paciente = await Paciente.findByPk(id);
            await Paciente.update({
                nome: req.body.nome,
                cpf:req.body.cpf,
                nascimento: new Date(req.body.nascimento),
                telefone: req.body.telefone
            });
            res.status(200).json({data: "Paciente atualizado"});
        }catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async deletePaciente(req, res) {
        try {
            const id = req.params.id
            const paciente = await Paciente.findByPk(id);
            paciente.destroy();
            res.status(200).json({data: "Paciente excluído"});
        }catch(e) {
            res.status(500).json({error: e.message})
        }
    }
}