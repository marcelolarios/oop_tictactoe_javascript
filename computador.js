class Computador extends Jogador {
  constructor(tp) {
    super(tp);
  }
  joga(p) {
  	let r = Math.floor(Math.random() * 9) + 1;
    return r;
  }
}