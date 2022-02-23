const AWS = require('aws-sdk');
const ses = new AWS.SES();
const axios = require('axios');

const message = `SES is working!!`;
const messageError = `The github API is not working!!`;
const fromEmail = ' '
const toEmail = ' '
const params = [{
        Destination:{
            ToAddresses : [toEmail]
        },
        Message : {
            Body : {
                Text : { Data : message }
            },
            Subject : { Data : "reminder email"}
        },
        Source : fromEmail
    },
    {
        Destination:{
            ToAddresses : [toEmail]
        },
        Message : {
            Body : {
                Text : { Data : messageError }
            },
            Subject : { Data : "reminder email"}
        },
        Source : fromEmail
    }
    ]
    
const sendMail = async () =>{
        return await ses.sendEmail(params[0]).promise()
        // .then(console.log('mail Sent'))
        .catch(err=>console.error(err));
};

const sendMailError = async () =>{
    return await ses.sendEmail(params[1]).promise()
        // .then(console.log('mail Sent'))
        .catch(err=>console.error(err));
};

const serverCheck = async () =>{
   return axios.get('https://api.github.com/users')
    .then(response => {
        if (response.status ===200){
            console.log(response.status)
            return sendMail();
        }else{return sendMailError()}
    })
    .catch(err=>console.error(err))
};

exports.handler = async (event) => {
    return serverCheck();
};