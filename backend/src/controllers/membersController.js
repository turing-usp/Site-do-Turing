const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { name, role, linkedIn, github, email, photoLink } = request.body;
        await connection('members').insert({
            name,
            role,
            linkedIn,
            github,
            email,
            photoLink
        });
        return response.json({
             "name":name,
             "status":"created"
        });
    },
    async index(request, response){
        const members = await connection('members').select('*');
        return response.json(members)
    }
}