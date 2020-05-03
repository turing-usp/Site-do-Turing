const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const {name, date, link, img, realizado} = request.body;
        await connection('events').insert({
            name, date, link, img, realizado
        });

        return response.json({
            "name": name,
            "status": "created"
        });
    },

    async index(request, response){
            const {realizado = 'nao'} = request.query;
            const events = await connection('events').where('realizado', realizado).select('*');
            return response.json(events)
    },

}
