import View from "../components/view/view";
import Application from "../components/application/application";

class DefaultView extends View {
    constructor(application: Application) {
        super(application);
        this.setBackground(255, 255, 255);
    }
}

export default DefaultView;