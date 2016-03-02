var StoriesListItem = require('./StoriesListItem.jsx');

module.exports = React.createClass({
    displayName: "StoriesList",
    getInitialState: function () {
        return {
            data: this.props.items,
            selectedListItemId: null
        };
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            data: nextProps.items,
            selectedListItemId: nextProps.selectedStoryId
        });
    },
    handleListItemClick: function (clickedListItemId, isSelected) {
        if (isSelected === true) {
            this.props.onStorySelect(clickedListItemId);
        } else {
            this.props.onStorySelect(null);
        }
    },
    render: function () {
        var listItems = [];
        for (var i = 0; i < this.props.items.length; i++) {
            var isSelectedProp = false;
            if (this.state.selectedListItemId == i) {
                isSelectedProp = true;
            }
            listItems.push(<StoriesListItem isSelected={isSelectedProp} key={i} text={this.props.items[i].title} id={i} onListItemClick={this.handleListItemClick}/>);
        }
        return <div className="list">{listItems}</div>;
    }
});
