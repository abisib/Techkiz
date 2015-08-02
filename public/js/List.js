function List (items) {
    this.items = items;
}

List.prototype.getUIElement = function () {
    var itemTitle, itemURL, itemIcon, item, list;
    list = jQuery('<nav class="demo-navigation mdl-navigation mdl-color--blue-grey-800">');

    for (var i = 0; i < this.items.length; i++) {
        itemTitle = this.items[i].title;
        itemURL = this.items[i].url;
        itemIcon = this.items[i].icon;

        item = new ListItem(itemURL, itemTitle, itemIcon);
        list.append(item.getUIElement());
    }

    return list;
};

