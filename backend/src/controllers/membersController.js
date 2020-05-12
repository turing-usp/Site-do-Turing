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
        const {role = ''} = request.query;
        const members = await connection('members').where('role','like', `%${role}%`).select('*');
        return response.json(members)
    },

    async update(request, response){
        const {memberId} = request.query;
        const {name, role, linkedin, github, email, photoLink} = request.body;
        
        const events = await connection('members').where('memberId', memberId).limit(1).select('*').update({
            'name': name,
            'role': role,
            'linkedin': linkedin,
            'github': github,
            'email': email,
            'photoLink': photoLink
        });
        
        return response.json({
            "memberId": memberId,
            'status': 'Updated'
        })
    },

    async del(request, response){
        const {memberId} = request.query;

        const events = await connection('members').where('memberId', memberId).del();

        return response.json({
            'memberId': memberId,
            'status': 'Deleted'
        })
    }
}
