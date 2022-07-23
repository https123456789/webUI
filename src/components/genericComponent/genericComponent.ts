import GenericComponentElement from "./element";

class GenericComponent {
    public parent: any;
    public element: any;
    constructor(parent: any, elementClass = GenericComponentElement) {
        this.parent = parent;
        this.element = new elementClass(this);
    }
}

export default GenericComponent;