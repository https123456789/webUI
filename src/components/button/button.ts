import GenericComponent from "../genericComponent/genericComponent";
import ButtonElement from "./element";

class Button extends GenericComponent {
    public text: string = "";
    constructor(parent: any, text: string = "") {
        super(parent, ButtonElement);
        this.setText(text);
    }
    setText(text: string) {
        this.text = text;
        this.element.setText(this.text);
    }
}

export default Button;