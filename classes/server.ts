import express from 'express';
import { SERVER_PORT } from '../global/emvironment';
import socketIO from 'socket.io';
import http from 'http';
import * as socket from '../sockets/socket';

export default class Server{

    public app:express.Application;
    public port:number;
    private static _instance:Server;

    public io: SocketIO.Server;
    private httpServer: http.Server;

    private constructor(){
        this.app = express();
        this.port = SERVER_PORT;
        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);

        this.escucharSockets();
    }

    public static get instance(){
        return this._instance || (this._instance = new this());
    }

    private escucharSockets(){
        console.log('Escuchando...');
        this.io.on('connection', cliente => {
            // console.log('Cliente conectado.');

            //Conecatr cliente
            socket.conectarCliente(cliente, this.io);

            //Configurar usuario
            socket.configUser(cliente, this.io);

             //Obtnber usuarios activos
             socket.obtenerUsuarios(cliente, this.io);

            //Mensaje
            socket.mensaje(cliente, this.io);

            //Desconectar
            socket.desconectar(cliente, this.io);
            
        });
    }

    // start(callback:Function){
    start(callback:any){
        this.httpServer.listen(this.port, callback) ;
    }
}