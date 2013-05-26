function ApplicationWindow() {

	var context = this;
	this.self = Ti.UI.createWindow({
		backgroundColor : 'white'
	});

	var tabs = Titanium.UI.createView({
		backgroundColor : '#000',
		height : 50,
		width : Titanium.Platform.displayCaps.platformWidth,
		layout : 'horizontal',
		bottom : 0
	});

	var buttons = require('/ui/customTab');

	var number_of_tabs = 5;
	this.tabViews = [];
	var clr = ['green', 'white', 'gray', 'yellow', 'red'];

	for (var i = 0; i < number_of_tabs; i++) {
		var config = {
			view_bg_color : clr[i],
			view_bg_image : '',
			height : 50,
			iconSize : 40,
			width : ((Titanium.Platform.displayCaps.platformWidth - (number_of_tabs - 1) * 2) / number_of_tabs),
			icon : '/images/KS_nav_ui.png',
			backgroundColor : 'transparent',
			backgroundImage : 'none',
			buttonTitle : 'Tab ' + i,
			tabIndex : i,
			font : {
				fontFamily : "Helvetica Neue",
				fontSize : 10,
				fontWeight : 'Regular'
			}
		};
		var tab = new buttons(config);
		var tabBtn = tab.tabButton;
		var tabView = tab.view;
		if (i == 0) {
			//tabView.visible = true;
			this.self.add(tabView);
		}
		this.tabViews[i] = tabView;

		tabBtn.addEventListener('click', function(e) {
			context.self.add(context.tabViews[e.source.tabIndex]);
			for (var i = 0; i < context.tabViews.length; i++) {
				if (e.source.tabIndex != i)
					context.self.remove(context.tabViews[i]);
			};
		});

		tabs.add(tabBtn);
		if (i < 4) {
			var divider = Titanium.UI.createView({
				backgroundColor : '#fff',
				top : 5,
				bottom : 5,
				width : 2,
				borderColor : 5
			});
			tabs.add(divider);
		}
	};

	this.self.add(tabs);

	return this.self;
};

module.exports = ApplicationWindow;
