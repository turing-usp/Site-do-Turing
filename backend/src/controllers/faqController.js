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
    },

    async update(request, response){
        const {questionId} = request.query;
        const {question, answer} = request.body;
        
        const events = await connection('faq').where('questionId', questionId).limit(1).select('*').update({
            'question': question,
            'answer': answer
        });
        return response.json({
            "questionId": questionId,
            'Status': 'Updated'
        })
    },

    async del(request, response){
        const {questionId} = request.query;

        const events = await connection('faq').where('questionId', questionId).del();

        return response.json({
            'questionId': questionId,
            'Status': 'Deleted'
        })
    }
}