import Application from "../application/application";
import GenericComponentElement from "./element";

class GenericComponent {
    public application: Application;
    public element: any;
    constructor(application: Application, elementClass = GenericComponentElement) {
        this.application = application;
        this.element = new elementClass(this);
    }
}

export default GenericComponent;