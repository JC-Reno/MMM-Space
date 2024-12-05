/* Magic Mirror
 * Module: Space
 * By Linus
 */

Module.register("MMM-Space",{
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
