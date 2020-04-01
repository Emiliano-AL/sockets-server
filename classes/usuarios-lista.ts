import { Usuario } from "./usuario";

export class UsuariosLista{
    private lista: Usuario[] = [];

    constructor(){

    }

    public agregar(usuario:Usuario){
        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
    }

    public actualizarNombre(id:string, nombre:string){
        for(let usuario of this.lista){
            if(usuario.id === id){
                usuario.nombre = nombre;
                break;
            }
        }
    }

    //obtener lista de usuarios
    public getLista(){
        return this.lista;
    }

    //regresar usuario
    public getUsuario(id:string){
        return this.lista.find( user => user.id === id);
    }

    //Obteber usuarios de una sala en partiular
    public getUsuariosEnSala(sala:string){
        return this.lista.filter(user => user.sala === sala);
    }

    //Elimianr un usuario
    public borrarUsuario(id:string){
        const tempUsr = this.getUsuario(id);
        this.lista = this.lista.filter(usur => usur.id !== id);
        return tempUsr;
    }

}