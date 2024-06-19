const { Medico } = require('../models')

module.exports = class medicoControllers {
    // novo
    static async createMedico(req, res) {
        try {
            await Medico.create({
                nome: req.body.nome,
                registro: req.body.registro,
                cpf: req.body.cpf,
                telefone: req.body.telefone
            });
            res.status(200).json({data: "Medico adicionado"});
        }catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async showMedicos(req, res) {
        try {
            const medicos = await Medico.findAll();
            res.status(200).json({medicos});
        }catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async showMedico(req, res) {
        try {
            const id = req.params.id
            const medico = await Medico.findByPk(id);
            res.status(200).json({medico});
        }catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async medicoAtendimentos(req, res) {
        try {
            const id = req.params.id
            const medico = await Medico.findByPk(id, {
                include:'atendimentos'
            });
            res.status(200).json({medico});
        }catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async updateMedico(req, res) {
        try {
            const id = req.params.id
            const medico = await Medico.findByPk(id);
            await medico.update({
                nome: req.body.nome,
                registro: req.body.registro,
                cpf: req.body.cpf,
                telefone: req.body.telefone
            });
            res.status(200).json({data: "Medico atualizado"});
        }catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async deleteMedico(req, res) {
        try {
            const id = req.params.id
            const medico = await Medico.findByPk(id);
            medico.destroy();
            res.status(200).json({data: "Medico excluído"});
        }catch(e) {
            res.status(500).json({error: e.message})
        }
    }
}