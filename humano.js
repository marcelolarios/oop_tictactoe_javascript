class Humano extends Jogador {
	constructor(tp) {
		super(tp);
	}

	joga(p) {

		let posics = '123456789';
		if(p != '') {
				if(posics.lastIndexOf(p)>-1) {
				return p;
			}
		}
		return 0;

	}
}
