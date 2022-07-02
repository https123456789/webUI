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

    class ViewElement {
        constructor(parent) {
            this.dom = new DomElementConnection("div");
            this.parent = parent;
            this.dom.createConnection();
        }
        setBackgroudColor(r, g, b) {
            /*
                Changes the view's background color
            */
            this.dom.element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
        setChild() {
            while (this.dom.element.firstChild) {
                this.dom.element.removeChild(this.dom.element.lastChild);
            }
            this.dom.element.appendChild(this.parent.child.element.dom.element);
        }
    }

    class View {
        constructor(application) {
            this.application = application;
            this.element = new ViewElement(this);
        }
        setBackground(r, g, b) {
            /*
                Sets the background of the view
            */
            this.element.setBackgroudColor(r, g, b);
        }
        setChild(child) {
            this.child = child;
            this.element.setChild();
        }
        hasBeenAddedToApplication(event) {
            /*
                Triggered when the view is added to an application
            */
            console.log("Added to app!");
        }
    }

    class WrongTypeError extends TypeError {
        constructor(fnn, act, rtp) {
            super();
            this.message = `${fnn} only accepts instances of type ${act}. Recived object  of class ${rtp.constructor.name}`;
        }
    }

    class Application {
        constructor() {
            this.views = [];
            this.element = new ApplicationElement(this);
        }
        run() {
            this.init();
        }
        init() {
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
            this.addView(view);
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
            this.views.push(view);
            this.element.addView(view);
            console.log("Added view " + view);
        }
    }

    class StackElement {
        constructor(parent) {
            this.parent = parent;
            this.dom = new DomElementConnection("div");
            this.dom.createConnection();
            this.dom.element.style.display = "flex";
            this.dom.element.style.flexDirection = "column";
            this.dom.element.style.flex = 1;
        }
        clearContents() {
            while (this.dom.element.firstChild) {
                this.dom.element.removeChild(this.dom.element.lastChild);
            }
        }
        addChild(child) {
            this.dom.element.appendChild(child.elemtn.dom.element);
        }
    }

    class Stack {
        constructor(parent) {
            this.parent = parent;
            this.element = new StackElement(this);
            this.children = [];
        }
        addChild(child) {
            this.children.push(child);
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

    class VStackElement extends StackElement {
        constructor(parent) {
            super(parent);
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
        HStack: HStack,
        Label: Label,
        View: View,
        VStack: VStack
    };

    return WebUI;

}));
