// Create app
let app = new WebUI.Application();

// Create the home view
let homeView = new WebUI.View(app);

// Set the home view to the default view
app.setInitView(homeView);

// Create the main container
let vs = new WebUI.VStack(homeView);
// add it the home view
homeView.setChild(vs);

// Create labels
let label = new WebUI.Label(vs, "Hello World!");
let label2 = new WebUI.Label(vs, "From WebUI!");
// Add them to the main container
vs.addChild(label);
vs.addChild(label2);

// Run the app
app.run();