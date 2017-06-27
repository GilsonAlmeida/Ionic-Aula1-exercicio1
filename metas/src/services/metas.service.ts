import { Meta } from "../data/metas.interface";

export class MetasService {
    
    private metasSelecionadas: Meta[] = [];

     texto= '';

    selecionaMeta(meta: Meta) {
        this.metasSelecionadas.push(meta);
    }

    removeSelecaoMeta(metaParam: Meta) {
        const index = this.metasSelecionadas.findIndex((meta: Meta) => {
            return meta.id == metaParam.id;
        });
        this.metasSelecionadas.splice(index, 1);
    }

    getMetasSelecionadas() {
        console.log("META SELECIONADA..."+this.metasSelecionadas.slice().length)
        return this.metasSelecionadas.slice();
    }

    setTexto(t){
        this.texto = t;
    }

    getTexto(){
        return this.texto;
    }
    

}