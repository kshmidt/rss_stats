var ChannelsList = require("./ChannelsList.jsx");

module.exports = React.createClass({
    displayName: "ChannelsBoxContent",
    getInitialState: function () {
        return {
            data: this.props.data,
            selectedChannelId: null
        }
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            data: nextProps.data,
            selectedChannelId: nextProps.selectedChannelId
        });
    },
    handleChannelRemove: function (channelId) {
        this.props.onChannelRemove(channelId);
    },
    handleChannelSelect: function (channelId) {
        this.props.onChannelSelect(channelId);
    },
    handleClick: function () {
        this.setState({
            selectedChannelId: null
        }, function () {
            this.props.onChannelSelect(null);
        });
    },
    render: function () {
        return <div className="boxContent" onClick={this.handleClick}><ChannelsList onChannelSelect={this.handleChannelSelect} onChannelRemove={this.handleChannelRemove} data={this.props.data} selectedListItemId={this.props.selectedChannelId}/></div>;
    }
});
