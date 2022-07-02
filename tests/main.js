// Create app
var app = new WebUI.Application();

// Create the home view
var homeView = new WebUI.View(app);

// Set the home view to the default view
app.setInitView(homeView);

// Create the main container
var vs = new WebUI.VStack(homeView);
// add it the home view
homeView.setChild(vs);

// Create label
var label = new WebUI.Label(vs, "Hello World!");
// Add it to the main container
vs.addChild(label);

// Run the app
app.run();