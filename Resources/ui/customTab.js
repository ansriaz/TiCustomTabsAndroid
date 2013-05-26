var dp = 1;

function customTab(config) {
	this.tabIndex = config.tabIndex;
	this.tabButton = Titanium.UI.createView({
		height : config.height * dp,
		width : config.width * dp,
		backgroundColor : config.backgroundColor,
		backgroundImage : config.backgroundImage
	});
	var invisibleView = Titanium.UI.createView({
		height : config.height * dp,
		tabIndex : config.tabIndex,
		width : config.width * dp,
		zIndex : 3
	});
	this.tabButton.add(invisibleView);

	var temp_view = Titanium.UI.createView({
		width : Ti.UI.SIZE,
		height : config.iconSize * dp,
		touchEnabled : false
	});

	this.buttonTitle = Titanium.UI.createLabel({
		text : config.buttonTitle,
		color : "#fff",
		font : config.font,
		bottom : 0,
		touchEnabled : false
	});

	var iconView = Titanium.UI.createView({
		height : (config.iconSize - 13) * dp,
		top : 0,
		touchEnabled : false
	});

	if (config.icon) {
		this.icon = Ti.UI.createImageView({
			image : config.icon,
			//top : 5*dp,
			height : 'auto',
			width : 'auto',
			touchEnabled : false
		});

		this.tabButton.icon = this.icon;

		iconView.add(this.icon);

		temp_view.add(iconView);
	}

	this.tabButton.addEventListener('touchend', function(e) {
		e.source.opacity = 1;
	});
	this.tabButton.addEventListener('touchstart', function(e) {
		e.source.opacity = .4;
	});

	temp_view.add(this.buttonTitle);
	this.tabButton.add(temp_view);

	this.view = Titanium.UI.createView({
		backgroundColor : config.view_bg_color,
		backgroundImage : config.view_bg_image,
		bottom : 50 * dp
	});

	return this;
}

module.exports = customTab;
