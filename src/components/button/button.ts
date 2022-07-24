import GenericComponent from "../genericComponent/genericComponent";
import ButtonElement from "./element";

class Button extends GenericComponent {
    public text: string = "";
    public clickAction: Function = () => {};
    constructor(parent: any, text: string = "", clickAction: Function = () => {}) {
        super(parent, ButtonElement);
        this.setClickAction(clickAction);
        this.setText(text);
        this.addEventListener("click", this.clickAction);
    }
    setText(text: string) {
        this.text = text;
        this.element.setText(this.text);
    }
    setClickAction(func: Function) {
        this.removeEventListener("click", this.clickAction);
        this.clickAction = func;
        this.addEventListener("click", this.clickAction);
    }
}

export default Button;