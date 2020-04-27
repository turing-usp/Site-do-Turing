const connection = require('../database/connection');
const config = require('../config.js')
const mailjet = require('node-mailjet')
    .connect(config.secrets.MAILJET_PUBLIC_API_KEY, config.secrets.MAILJET_SECRET_API_KEY)

const sendEmail = function(name, email, entity, motivation, message){
    const TURING_EMAIL = ""
    const FROM_NAME = name
    const TO_NAME = "Grupo Turing"
    let request = mailjet
        .post('send',{'version':'v3.1'})
        .request({
            "Messages":[
                {
                    "From":{
                        "Email": TURING_EMAIL,
                        "Name": FROM_NAME
                    },
                    "To":[
                        {
                            "Email": TURING_EMAIL,
                            "Name": TO_NAME
                        }
                    ],
                    "Subject": `[CONTATO SITE] ${motivation}`,
                    "TextPart": `
                    Contact Email:${email}\n
                    Contact Name:${name}\n
                    Contact Entity:${entity}\n
                    ${message}
                    `
                }
            ]
        })
    request
        .then((results) =>{
            console.log(results.body)
        })
        .catch((err) => {
            console.log(err.statusCode)
        })
};

const getTodayDate = function(){
    let today = new Date()
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return today;
};

module.exports = {
    async create(request, response){
        let { contactName, email, entity, motivation, message } = request.body;
        let date = getTodayDate()
        await connection('externalContacts').insert({
            contactName,
            email,
            entity,
            motivation,
            message,
            date
        });
        sendEmail( contactName, email, entity, motivation, message );
        return response.json({
            "name":contactName,
            "status":"created"
        });

    },
    async index(request, response){
        const forms = await connection('externalContacts').select('*');
        return response.json(forms)
    }
}
