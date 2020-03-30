import express from 'express';
import { SERVER_PORT } from '../global/emvironment';

export default class server{

    public app:express.Application;
    public port:number;

    constructor(){
        this.app = express();
        this.port = SERVER_PORT;
    }

    // start(callback:Function){
    start(callback:any){
        this.app.listen(this.port, callback) ;
    }
}