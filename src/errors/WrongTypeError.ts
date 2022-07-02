class WrongTypeError extends TypeError {
	constructor(fnn: any, act: any, rtp: any) {
		super();
		this.message = `${fnn} only accepts instances of type ${act}. Recived object  of class ${rtp.constructor.name}`;
	}
}

export default WrongTypeError