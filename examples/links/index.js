let app = new WebUI.Application();

let homeView = new WebUI.View(app);
app.setInitView(homeView);

let mainStack = new WebUI.VStack(homeView);
homeView.setChild(mainStack);

let title = new WebUI.Label(mainStack, "WebUI Links");
mainStack.addChild(title);

let about = new WebUI.Label(mainStack, `\
Links in WebUI allow the user to other URLs.

To create a link, make a new object from WebUI.Link.
\
`);
mainStack.addChild(about);

let page2Link = new WebUI.Link(mainStack, "page2.html", "Link to page 2");
mainStack.addChild(page2Link);

app.run();