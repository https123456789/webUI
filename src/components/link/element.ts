import { StringLiteral } from "../../../node_modules/typescript/lib/typescript";
import GenericComponentElement from "../genericComponent/element";
import Link from "./link";

class LinkElement extends GenericComponentElement {
    public href: string;
    constructor(parent: Link, href: string = "") {
        super(parent, "a");
        this.href = href;
    }
}

export default LinkElement;