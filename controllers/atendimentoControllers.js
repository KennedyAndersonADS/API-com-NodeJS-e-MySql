const { Atendimento } = require('../models')

module.exports = class atendimentoControllers {
    // novo
    static async createAtendimento(req, res) {
        try {
            await Atendimento.create({
                pacienteId:req.body.pacienteId,
                medicoId: req.body.medicoId,
                data_atendimento: new Date(req.body.data_atendimento)
            });
            res.status(200).json({data: "Atendimento adicionado"});
        }catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async showAtendimentos(req, res) {
        try {
            const atendimentos = await Atendimento.findAll();
            res.status(200).json({atendimentos});
        }catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async showAtendimento(req, res) {
        try {
            const id = req.params.id
            const atendimento = await Atendimento.findByPk(id, {
                include: ['paciente','medico']
            });
            res.status(200).json({atendimento});
        }catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async updateAtendimento(req, res) {
        try {
            const id = req.params.id
            const Atendimento = await Atendimento.findByPk(id);
            await Atendimento.update({
                
            });
            res.status(200).json({data: "Atendimento atualizado"});
        }catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async deleteAtendimento(req, res) {
        try {
            const id = req.params.id
            const atendimento = await Atendimento.findByPk(id);
            atendimento.destroy();
            res.status(200).json({data: "Atendimento excluído"});
        }catch(e) {
            res.status(500).json({error: e.message})
        }
    }
}