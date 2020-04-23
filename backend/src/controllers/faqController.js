const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const {question, answer} = request.body;
        await connection('faq').insert({
            question, answer
        });

        return response.json({
            "question": question,
            "status": "created"
        });
    },

    async index(request, response){
            const questions = await connection('faq').select('*');
            return response.json(questions)
    }
}