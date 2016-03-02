module.exports = React.createClass({
    displayName: "ChannelsListItem",
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
    handleRemoveRssBtnClick: function (e) {
        e.stopPropagation();
        this.props.onListItemRemove(this.props.id);
    },
    render: function () {
        var className = "listItem noselect";
        if (this.state.isSelected === true) {
            className += " selected";
        }
        return <div className={className} onClick={this.handleClick}>
    {this.props.text}
    <span className="glyphicon glyphicon-remove myBtn removeRssBtn" title="Delete RSS channel" onClick={this.handleRemoveRssBtnClick} />
    </div>;
    }
});
