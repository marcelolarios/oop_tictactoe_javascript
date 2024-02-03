/*************************************************** 
  Project
  - tic tac toe oop
  - jogo da velha poo

  Written by Marcelo Larios 2024FEV
  
  AGLP-3.0 license, all text above must be included in any redistribution
****************************************************/ 
class Tabuleiro {
	constructor() {
		this.sto = new Storage();
		this.jh = new Humano('x');
		this.jc = new Computador('o');
		this.quem = this.sto.getVez() ? this.jh: this.jc;
		this.prox = this.quem;
	}

	rodada(index) {
	
		while(true) {
	
			if(this.partida(index) == false) {
		
				this.mostra(this.aviso(3)); //interrup
				break;
			} 
			this.mostra(this.aviso(4)); //Nova partida
			break;
		}
	}
	
	partida(index) {
				
		if (this.quem == this.jh && this.jh.joga(index) == 0) return false;

		for (let i = 0; i < 2; i++) { 
				
			if (this.lance(this.quem, index) == false) break; //humano casa ja existe
			//alert(index);
			if (this.compara() == true) break;
			this.sto.setVez();
			this.quem = this.sto.getVez() ? this.jh: this.jc;
			if(index == 0) break; //computador
		}
		return true;
	}
	
	lance(a, index){
		const jogo = this.sto.getJogo();
		while (true) {

			let casa = a.joga(index);
			if (jogo[casa] == null) {
				//alert(a.getTipo());
				this.sto.setJogo(casa, a.getTipo());
				break;
			} else {
				if(a == this.jh) return false; // humano jogou em casa existente
			}
		}
		return true;
	}
	
	compara() {
		const jogo = this.sto.getJogo();
		const possibs = [
		[1, 2, 3],[4, 5, 6],[7, 8, 9],
		[1, 4, 7],[2, 5, 8],[3, 6, 9],
		[1, 5, 9],[3, 5, 7]];

		for (let possib of possibs) {
			const [a, b, c] = possib;
			if (jogo[a] && jogo[a] === jogo[b] && jogo[a] === jogo[c]) {
				
				this.sto.setResultado(1); //há vencedor
				return true;
			}
		}
		if(this.countNullInArray() == 1) {
			this.sto.setResultado(2); // empatou
			return true; 
		} else {
			return false;
		} 
	}
	
	countNullInArray() { // se 1 = full 
		return this.sto.jogo.map((cell, index) => cell === null ? index : null).filter(cell => cell !== null).length;
	}
	
	mostra() { //
		const jogo = this.sto.getJogo();
const status = `
${'7|8|9   '}&nbsp;&nbsp;&nbsp;|${jogo[7] || ' '}|${jogo[8] || ' '}|${jogo[9] || ' '}| ${this.aviso(this.sto.getResultado()) || ''}<br /> 
${'4|5|6   '}&nbsp;&nbsp;&nbsp;|${jogo[4] || ' '}|${jogo[5] || ' '}|${jogo[6] || ' '}|<br />
${'1|2|3   '}&nbsp;&nbsp;&nbsp;|${jogo[1] || ' '}|${jogo[2] || ' '}|${jogo[3] || ' '}|
`;
	document.getElementById('gameStatus').innerHTML = status;
	}
	
	aviso(i){
		
		switch (i) {
			case 1: return "jogador \"" + this.quem.getTipo() + "\" venceu!";
			case 2: return "Empatou!";
			case 3: return "\n*** Jogo Interrompido ***\n";
			case 4: return "\n\n*** Nova partida ***";
			default:  return "jogador \"" + this.quem.getTipo() + "\", sua vez"; 
		}
	}

}