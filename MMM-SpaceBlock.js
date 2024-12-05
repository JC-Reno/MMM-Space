/* Magic Mirror
 * Module: SpaceBlock
 * forked from Linus
 */

Module.register("MMM-SpaceBlock",{
	defaults: {
		verticalSpace: "40px",
		horizontalSpace: "40px",
		backgroundColor: "transparent"
	},

	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.style.height = this.config.verticalSpace;
		wrapper.style.width = this.config.horizontalSpace;
		wrapper.style.background = this.config.backgroundColor;
		return wrapper;
	}
});
