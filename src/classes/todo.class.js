export class Todo{

    constructor( tarea ){

        this.tarea = tarea;

        this.id          = new Date().getTime(); //34543637657
        this.completado  = false;
        this.creado      = new Date();
    }

}