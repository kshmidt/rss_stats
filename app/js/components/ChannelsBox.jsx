var ChannelsBoxHeader = require('./ChannelsBoxHeader.jsx');
var ChannelsBoxContent = require('./ChannelsBoxContent.jsx');

module.exports = React.createClass({
    displayName: "ChannelsBox",
    getInitialState: function () {
        return {
            data: this.props.data,
            selectedChannelId: null
        };
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            data: nextProps.data,
            selectedChannelId: nextProps.selectedChannelId
        });
    },
    handleChannelSelect: function (channelId) {
        this.setState({
            selectedChannelId: channelId
        }, function () {
            this.props.onChannelSelect(this.state.selectedChannelId);
        });
    },
    handleChannelRemove: function (channelId) {
        this.props.onChannelRemove(channelId);
    },
    render: function () {
        var cnannelsCount = Object.keys(this.props.data).length;
        return <div className="box" id="channelsBox">
    <ChannelsBoxHeader channelsCount={cnannelsCount} />
    <ChannelsBoxContent onChannelSelect={this.handleChannelSelect} onChannelRemove={this.handleChannelRemove} data={this.props.data} selectedChannelId={this.state.selectedChannelId}/>
    </div>;
    }
});
