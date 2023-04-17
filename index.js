const express=require("express");

const AdminEspecie=require("./AdminEspecie")
class VeterinariaAPI{
    constructor(){

        this.puerto=3000;

        this.app=express();

        this.adminEspecie= new AdminEspecie();

        this.app.use(this.configurarCORS);
        this.app.use(express.json());

        this.app.post("/crear_especie", (req, res)=> {this.adminEspecie.crearEspecie(req, res);});
        this.app.get("/listar_especie", (req, res)=>{this.adminEspecie.listarEspecie(req, res);});
        
        
    }
    configurarCORS(req, res , next){
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods","GET, POST");
        req.header("Access-Control-Allow-Headers","Content-Type");
        next();

    }
    //Error!! to Do no estoy gestionando excepciones
    iniciarServidor(){
        this.app. listen(this.puerto, ()=>{
            console.log(`servidor ejecuntandose en el puerto ${this.puerto}`);
        });

    }

}
const veterinariaAPI= new VeterinariaAPI();
veterinariaAPI.iniciarServidor();