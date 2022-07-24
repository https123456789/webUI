import GenericComponent from "../genericComponent/genericComponent";
import LinkElement from "./element";

class Link extends GenericComponent {
    public href: string = "";
    public text: string = "";
    constructor(parent: any = null, href: string = "", text: string = "") {
        super(parent, LinkElement);
        this.setDestination(href);
        this.setText(text);
    }
    setDestination(href: string) {
        this.href = href;
        this.element.dom.element.href = this.href;
    }
    setText(text: string) {
        this.text = text;
        this.element.dom.element.innerHTML = this.text;
    }
}

export default Link;