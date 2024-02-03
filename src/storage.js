class Storage {
	constructor() {
		this.jogo = Array(10).fill(null);
		this.vez = Math.floor(Math.random() * 2) == 1 ? true: false;
		this.resultado = 0;
	}
	zera() {
		this.jogo = Array(10).fill(null);
		this.resultado = 0;
	}
	getJogo() {
		return this.jogo;
	}
	setJogo(casa, tipo) {
		this.jogo[casa] = tipo;
	}
	setVez() {
		this.vez = !this.vez;
	}
	getVez() {
		return this.vez;
	}
	setResultado(r) {
		this.resultado = r;
	}
	getResultado() {
		return this.resultado;
	}
}
