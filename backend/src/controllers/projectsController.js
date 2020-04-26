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
            const {tags = ''} = request.query;
            const projects = await connection('projects').where('tags', 'like', `%${tags}%`).select('*');
            return response.json(projects);
    }
}