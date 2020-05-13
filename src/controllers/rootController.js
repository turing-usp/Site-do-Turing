module.exports = {
    async index(request, response){
        return response.json({
            "api-content":"Grupo Turing",
            "version":"0.0.1"
        });
    }
}
