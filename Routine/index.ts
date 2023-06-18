import * as Database from '../Database';
import 'dotenv/config';
import fetch, { Headers } from 'node-fetch';

Database.sequelizeInstance.authenticate().then(() => {
    console.log('Connected.');
}).catch(error => {
    console.log('Error: %s', error);
});

export const webhook = async (messageOptions: string) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    return await fetch("https://discord.com/api/webhooks/1119921109794562139/yJwdX3UsG8JThm4frjSbarTOI3Tve6mEq2Kq0wv6722fddg-naGfFkTTg5TCdSrIUEr2", {
        method: 'POST',
        headers: myHeaders,
        body: messageOptions,
        redirect: 'follow'
    }).catch(error => console.log('error', error));
}