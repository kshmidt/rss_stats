module.exports = React.createClass({
    displayName: "StoriesListItem",
    getInitialState: function () {
        return {
            isSelected: this.props.isSelected
        };
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            isSelected: nextProps.isSelected
        });
    },
    handleClick: function (e) {
        e.stopPropagation();
        this.props.onListItemClick(this.props.id, !this.state.isSelected);
    },
    render: function () {
        var className = "listItem noselect";
        if (this.state.isSelected === true) {
            className += " selected";
        }
        return <div className={className} onClick={this.handleClick}>
    {this.props.text}
    </div>;
    }
});
