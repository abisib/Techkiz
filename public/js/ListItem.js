function ListItem(url, title, icon) {
    this.url = url;
    this.title = title;
    this.icon = icon;
}

ListItem.prototype.getUIElement = function () {
    var link = jQuery('<a class="mdl-navigation__link" href=' + this.url + '>' + this.title + '</a>');
    var icon = jQuery('<i class="mdl-color-text--blue-grey-400 material-icons">' + this.icon + '</i>');
    link.prepend(icon);

    return link;
};
