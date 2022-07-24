// Create app
let app = new WebUI.Application();

// Create views
let firstView = new WebUI.View(app);
let secondView = new WebUI.View(app);

// Create first view Content
let vs1 = new WebUI.VStack(firstView);
firstView.setChild(vs1);
let l1 = new WebUI.Label(vs1, "First View - Click the button to go to the next view");
vs1.addChild(l1);
let b1 = new WebUI.Button(vs1, "Go To Second View", (e) => {
    app.setView(1);
});
vs1.addChild(b1);

// Create second view content
let vs2 = new WebUI.VStack(secondView);
secondView.setChild(vs2);
let l2 = new WebUI.Label(vs2, "Second View - Click the button to go back");
vs2.addChild(l2);
let b2 = new WebUI.Button(vs2, "Go To First View", (e) => {
    app.setView(0);
});
vs2.addChild(b2);

// Add views to app
app.addView(firstView);
app.addView(secondView);

// Set view to first view
app.setView(0);

// Run app
app.run();