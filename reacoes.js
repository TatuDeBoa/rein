class Reacoes {

    constructor() {
        this.nome = '';
        this.reagentes = [];
        this.produtos = [];
        this.tipo = 'irreversivel';
        this.kDireto = 0;
        this.kReverso = 0;
    }

    setNome(nome) {
        if(typeof(nome) == "string") {
            this.nome = nome.trim();
        }
        return this;
    }

    setVelEsp(direta, reversa = 0) {
        if(typeof(direta) == 'number' && typeof(reversa) == 'number') {
            if(direta > 0) {
                this.kDireto = direta;
                this.kReverso = reversa;
            }
        }
        return this;
    }

    setTipo(tipo) {
        if(tipo == 'irreversivel' || tipo == 'reversivel') {
            this.tipo = tipo;
        }
    }

    setReagentes(listaReagentes, coeficientes, quantidadeInicial, ordens = []) {
        try {
            let a = listaReagentes.length;
            let b = coeficientes.length;
            let c = quantidadeInicial.length;
            let d = ordens.length;
        } catch(error) {
            console.error(error);
            return this;
        }
    }

}