const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const {description, githubRepo, squad, tags} = request.body;
        await connection('projects').insert({
            description,
            githubRepo,
            squad,
            tags
        });

        return response.json({
            "description": description,
            "status": "created"
        });
    },

    async index(request, response){
            const projects = await connection('projects').select('*');
            return response.json(projects)
    }
}