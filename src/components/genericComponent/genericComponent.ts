import GenericComponentElement from "./element";

class GenericComponent {
    public parent: any;
    public element: any;
    constructor(parent: any = null, elementClass = GenericComponentElement) {
        this.parent = parent;
        this.element = new elementClass(this);
    }
    addEventListener(eventType: string, callback: Function) {
        this.element.dom.element.addEventListener(eventType, callback);
    }
    removeEventListener(eventType: string, callback: Function) {
        this.element.dom.element.removeEventListener(eventType, callback);
    }
}

export default GenericComponent;