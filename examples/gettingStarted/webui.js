(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.WebUI = factory());
})(this, (function () { 'use strict';

    var isA = (object, p) => {
        return object instanceof p;
    };

    class DomElementConnection {
        constructor(elementType) {
            this.element;
            this.elementType = elementType;
        }
        createConnection() {
            this.element = document.createElement(this.elementType);
        }
    }

    class ApplicationElement {
        constructor(parent) {
            this.dom = new DomElementConnection("div");
            this.parent = parent;
            this.dom.createConnection();
        }
        add() {
            //this.initStyles();
            document.body.prepend(this.dom.element);
        }
        initStyles() {
            /*
                Apply default style
            */
            this.element.style.backgroundColor = "rgb(0, 0, 0)";
            this.element.style.color = "rgb(255, 255, 255)";
            this.element.style.width = "100%";
            this.element.style.height = "100%";
            console.log("Styles initalized.");
        }
        addView(view) {
            this.dom.element.appendChild(view.element.dom.element);
            //this.dom.addChild();
        }
    }

    class GenericComponentElement {
        constructor(parent, htmlElementType = "div") {
            this.dom = new DomElementConnection(htmlElementType);
            this.parent = parent;
            this.dom.createConnection();
        }
        setBackgroudColor(r, g, b) {
            /*
                Changes the element's background color
            */
            this.dom.element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
    }

    class ViewElement extends GenericComponentElement {
        setChild() {
            while (this.dom.element.firstChild) {
                this.dom.element.removeChild(this.dom.element.lastChild);
            }
            this.dom.element.appendChild(this.parent.child.element.dom.element);
        }
        show() {
            this.dom.element.style.display = "block";
        }
        hide() {
            this.dom.element.style.display = "none";
        }
    }

    class View {
        constructor(application) {
            this.isVisible = false;
            this.application = application;
            this.element = new ViewElement(this);
            this.element.dom.element.classList.add("view");
        }
        setBackground(r, g, b) {
            this.element.setBackgroudColor(r, g, b);
        }
        setChild(child) {
            this.child = child;
            this.element.setChild();
        }
        show() {
            this.element.show();
            this.isVisible = true;
        }
        hide() {
            this.element.hide();
            this.isVisible = false;
        }
    }

    class WrongTypeError extends TypeError {
        constructor(fnn, act, rtp) {
            super();
            this.message = `${fnn} only accepts instances of type ${act}. Recived object  of class ${rtp.constructor.name}`;
        }
    }

    class DefaultView extends View {
        constructor(application) {
            super(application);
            this.setBackground(255, 255, 255);
        }
    }

    class Application {
        constructor() {
            this.initView = new DefaultView(this);
            this.views = [];
            this.activeView = this.initView;
            this.element = new ApplicationElement(this);
            this.element.dom.element.classList.add("application");
            this.initView.hide();
        }
        run() {
            this._init();
        }
        _init() {
            /**
             * Initializes the application
             *
             * This inlcludes adding the element to the DOM
             *
             * @throws {@link Error | An error if no views are present}
             */
            // Check if init view is set
            if (!this.initView) {
                var e = new Error();
                if (this.initView == undefined) {
                    e.message = "Cannot run instance of WebUI.Application because instance property initView has not been set.";
                }
                else {
                    e.message = `Cannot run instance of WebUI.Application because instance property initView is null.`;
                }
                throw e;
            }
            // Add element
            this.element.add();
        }
        setInitView(view) {
            /*
                Sets the first view that appears when the app finishes init.
            */
            if (!isA(view, View)) {
                var e = new WrongTypeError("WebUI.Application.setInitView", "WebUI.View", view);
                throw e;
            }
            this.initView = view;
            this.views.push(view);
            this.element.addView(view);
            console.log(`Application initView set to ${view}`);
        }
        addView(view) {
            /*
                Adds a view to the app
            */
            if (!isA(view, View)) {
                var e = new WrongTypeError("WebUI.Application.setInitView", "WebUI.View", view);
                throw e;
            }
            if (!isA(view.element, ViewElement)) {
                var e = new TypeError();
                e.message = `WebUI.Application.addView only accepts instances of type WebUI.View, with property 'element' that is an instance of WebUI.ViewElement. Recived object with 'element' property: ${view.element} of class ${view.element.constructor.name}`;
                throw e;
            }
            if (this.views.length < 1) {
                this.setInitView(view);
                return;
            }
            // Make sure view is not visible
            view.hide();
            // Add view
            this.views.push(view);
            this.element.addView(view);
            console.log("Added view " + view);
        }
        setView(id) {
            if (id > this.views.length) {
                let e = new ReferenceError("Id is greater than views in application");
                throw e;
            }
            // Hide current view
            this.activeView.hide();
            // Assign and show new view
            this.activeView = this.views[id];
            this.activeView.show();
        }
    }

    class GenericComponent {
        constructor(parent = null, elementClass = GenericComponentElement) {
            this.parent = parent;
            this.element = new elementClass(this);
        }
        addEventListener(eventType, callback) {
            this.element.dom.element.addEventListener(eventType, callback);
        }
        removeEventListener(eventType, callback) {
            this.element.dom.element.removeEventListener(eventType, callback);
        }
    }

    class ButtonElement extends GenericComponentElement {
        constructor(parent) {
            super(parent, "button");
            this.dom.element.classList.add("button");
        }
        setText(text) {
            this.dom.element.innerHTML = text;
        }
    }

    class Button extends GenericComponent {
        constructor(parent, text = "", clickAction = () => { }) {
            super(parent, ButtonElement);
            this.text = "";
            this.clickAction = () => { };
            this.setClickAction(clickAction);
            this.setText(text);
            this.addEventListener("click", this.clickAction);
        }
        setText(text) {
            this.text = text;
            this.element.setText(this.text);
        }
        setClickAction(func) {
            this.removeEventListener("click", this.clickAction);
            this.clickAction = func;
            this.addEventListener("click", this.clickAction);
        }
    }

    class StackElement {
        constructor(parent) {
            this.parent = parent;
            this.dom = new DomElementConnection("div");
            this.dom.createConnection();
            this.dom.element.style.display = "flex";
            this.dom.element.style.flexDirection = "column";
            //this.dom.element.style.flex = 1;
            this.dom.element.classList.add("stack");
        }
        clearContents() {
            while (this.dom.element.firstChild) {
                this.dom.element.removeChild(this.dom.element.lastChild);
            }
        }
        addChild(child) {
            this.dom.element.appendChild(child.element.dom.element);
        }
    }

    class Stack {
        constructor(parent) {
            this.parent = parent;
            this.element = new StackElement(this);
            this.children = [];
            this.updateDOM();
        }
        addChild(child) {
            this.children.push(child);
            this.updateDOM();
        }
        updateDOM() {
            this.element.clearContents();
            for (var i = 0; i < this.children.length; i++) {
                this.element.addChild(this.children[i]);
            }
        }
    }

    class HStack extends Stack {
        constructor(parent) {
            super(parent);
        }
    }

    class LabelElement {
        constructor(parent) {
            this.parent = parent;
            this.dom = new DomElementConnection("p");
            this.dom.createConnection();
        }
    }

    class Label {
        constructor(parent, text) {
            this.parent = parent;
            this.element = new LabelElement(this);
            this.text = text;
            this.element.dom.element.innerHTML = this.text;
        }
    }

    class LinkElement extends GenericComponentElement {
        constructor(parent, href = "") {
            super(parent, "a");
            this.href = href;
        }
    }

    class Link extends GenericComponent {
        constructor(parent = null, href = "", text = "") {
            super(parent, LinkElement);
            this.href = "";
            this.text = "";
            this.setDestination(href);
            this.setText(text);
        }
        setDestination(href) {
            this.href = href;
            this.element.dom.element.href = this.href;
        }
        setText(text) {
            this.text = text;
            this.element.dom.element.innerHTML = this.text;
        }
    }

    class VStackElement extends StackElement {
        constructor(parent) {
            super(parent);
            this.dom.element.classList.add("vstack");
        }
    }

    class VStack extends Stack {
        constructor(parent) {
            super(parent);
            this.element = new VStackElement(this);
        }
    }

    var WebUI = {
        Application: Application,
        Button: Button,
        HStack: HStack,
        Label: Label,
        Link: Link,
        View: View,
        VStack: VStack
    };

    return WebUI;

}));
