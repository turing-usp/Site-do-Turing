const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const {name, date} = request.body;
        await connection('events').insert({
            name, date
        });

        return response.json({
            "name": name,
            "status": "created"
        });
    },

    async index(request, response){
            const events = await connection('events').select('  *');
            return response.json(events)
    }
}