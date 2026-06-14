import EstimationProvider from "./templates/Base.js";

export default class dungeonworldEstimationProvider extends EstimationProvider {
	constructor() {
		super();
		this.breakOnZeroMaxHP = "zero";
	}

	fraction(token) {
		const hp = token.actor.system.attributes.hp;
		return Math.min(hp.value / hp.max, 1);
	}
}
