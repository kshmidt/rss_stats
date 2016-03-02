var ChannelsListItem = require("./ChannelsListItem.jsx");

module.exports = React.createClass({
    displayName: "ChannelsList",
    getInitialState: function () {
        return {
            data: this.props.data,
            selectedListItemId: null
        };
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            data: nextProps.data,
            selectedListItemId: nextProps.selectedListItemId
        });
    },
    handleListItemClick: function (clickedListItemId, isSelected) {
        if (isSelected === true) {
            this.props.onChannelSelect(clickedListItemId);
        } else {
            this.props.onChannelSelect(null);
        }
    },
    handleListItemRemove: function (clickedListItemId) {
        this.props.onChannelRemove(clickedListItemId);
    },
    render: function () {
        var listItems = [];
        var i = 0;
        for (i in this.props.data) {
            var isSelectedProp = false;
            if (this.state.selectedListItemId == i) {
                isSelectedProp = true;
            }
            listItems.push(<ChannelsListItem isSelected={isSelectedProp} key={i} text={this.props.data[i].title} id={i} onListItemClick={this.handleListItemClick} onListItemRemove={this.handleListItemRemove} />);
        }
        return <div className="list">{listItems}</div>;
    }
});
