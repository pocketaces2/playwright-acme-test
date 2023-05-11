import {Given} from "@cucumber/cucumber";
import dotenv from 'dotenv';
dotenv.config();

//Example case to demonstrate getting an env var
Given('I have established a connection to the API', async function () {
    const API_KEY = process.env.TEST_KEY;
    console.log(API_KEY);
});