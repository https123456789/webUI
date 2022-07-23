import GenericComponentElement from "../genericComponent/element";
import Button from "./button";

class ButtonElement extends GenericComponentElement {
    constructor(parent: Button) {
        super(parent, "button");
        this.dom.element.classList.add("button");
    }
    setText(text: string) {
        this.dom.element.innerHTML = text;
    }
}

export default ButtonElement;