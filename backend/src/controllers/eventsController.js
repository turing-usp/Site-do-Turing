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
        const {limit = 'all'} = request.query;
        const {realizado = 'nao'} = request.query;
        const events = await connection('events').where('realizado', realizado).limit(limit).select('*');
        return response.json(events)
    },

    async update(request, response){
        const {eventId} = request.query;
        const {name, date, link, img, realizado} = request.body;
        
        const events = await connection('events').where('eventId', eventId).limit(1).select('*').update({
            'name': name,
            'date': date,
            'link': link,
            'img': img,
            'realizado': realizado
        });
        return response.json({
            "EventId": eventId,
            'Status': 'Updated'
        })
    },

    async del(request, response){
        const {eventId} = request.query;

        const events = await connection('events').where('eventId', eventId).del();

        return response.json({
            'EventId': eventId,
            'Status': 'Deleted'
        })
    }

}
