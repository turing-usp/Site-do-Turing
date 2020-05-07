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
    },

    async update(request, response){
        const {projectId} = request.query;
        const {description, githubRepo, squad, tags} = request.body;
        
        const events = await connection('projects').where('projectId', projectId).limit(1).select('*').update({
            'description': description,
            'githubRepo': githubRepo,
            'squad': squad,
            'tags': tags
        });
        
        return response.json({
            "projectId": projectId,
            'status': 'Updated'
        })
    },

    async del(request, response){
        const {projectId} = request.query;

        const events = await connection('projects').where('projectId', projectId).del();

        return response.json({
            'projectId': projectId,
            'status': 'Deleted'
        })
    }
}
