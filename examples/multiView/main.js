// Create app
let app = new WebUI.Application();

// Create views
let firstView = new WebUI.View(app);
let secondView = new WebUI.View(app);

// Create first view Content
let vs1 = new WebUI.VStack(firstView);
firstView.setChild(vs1);
let l1 = new WebUI.Label(vs1, "First View");
vs1.addChild(l1);

// Create second view content
let vs2 = new WebUI.VStack(secondView);
secondView.setChild(vs2);
let l2 = new WebUI.Label(vs2, "Second View");
vs2.addChild(l2);

// Add views to app
app.addView(firstView);
app.addView(secondView);

// Run app
app.run();