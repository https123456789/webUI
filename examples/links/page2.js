let app = new WebUI.Application();

let view = new WebUI.View(app);
app.setInitView(view);

let mainStack = new WebUI.VStack(view);
view.setChild(mainStack);

let title = new WebUI.Label(mainStack, "See, new page.");
mainStack.addChild(title);

let backLink = new WebUI.Link(mainStack, "index.html", "Go Back");
mainStack.addChild(backLink);

app.run();