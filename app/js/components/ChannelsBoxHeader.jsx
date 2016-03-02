module.exports = React.createClass({
    displayName: "ChannelsBoxHeader",
    render: function () {
        return <div className="boxHeader">
    Channels: {this.props.channelsCount}
    </div>;
    }
});
