function Panel (content, isVisible) {
    this.content = content;
    this.isVisible = isVisible;
    this.panel = null;
}

Panel.prototype.getUIElement = function () {
    if (!this.panel) {
        this.panel = jQuery('<div class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">');
        if (this.content) {
            this.panel.append(this.content);
        }
    }
    return this.panel;
};

Panel.prototype.setVisible = function (isVisible) {
    this.isVisible = !!isVisible;
    if (isVisible) {
        this.panel.css('transform', 'translateX(0)');
    } else {
        this.panel.css('transform', 'translateX(-250px)');
    }
};

Panel.prototype.setContent = function (content) {
    this.content = content;
    if (this.panel) {
        this.panel.append(content);
    }
};

