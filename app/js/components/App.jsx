var ChannelsBox = require('./ChannelsBox.jsx');
var StoriesBox = require('./StoriesBox.jsx');
var StoryBox = require('./StoryBox.jsx');
var FrequencyBox = require('./FrequencyBox.jsx');

module.exports = React.createClass({
    displayName: "App",
    getInitialState: function () {
        return {
            data: this.props.data,
            selectedChannelId: null,
            selectedStoryId: null
        }
    },
    handleChannelSelect: function (channelId) {
        this.setState({
            selectedChannelId: channelId,
            selectedStoryId: null
        });
    },
    handleChannelRemove: function (channelId) {
        delete this.state.data[channelId];
        if (this.state.selectedChannelId == channelId) {
            this.setState({
                data: this.props.data,
                selectedChannelId: null,
                selectedStoryId: null
            });
        } else {
            this.setState({
                data: this.props.data
            });
        }
    },
    handleStorySelect: function (storyId) {
        this.setState({
            selectedStoryId: storyId
        });
    },
    render: function () {
        var channels = this.state.data;
        var selectedChannel;
        var selectedStory;
        var selectedStoryText;
        if (this.state.selectedChannelId) {
            selectedChannel = this.state.data[this.state.selectedChannelId];
            if (selectedChannel) {
                selectedStory = selectedChannel.items[this.state.selectedStoryId];
            }
            if (selectedStory) {
                selectedStoryText = selectedStory.description;
            }
        }
        return <div>
    <ChannelsBox data={channels} selectedChannelId={this.state.selectedChannelId} onChannelSelect={this.handleChannelSelect} onChannelRemove={this.handleChannelRemove}/>
    <StoriesBox data={selectedChannel} selectedStoryId={this.state.selectedStoryId} onStorySelect={this.handleStorySelect}/>
    <StoryBox data={selectedStory}/>
    <FrequencyBox data={selectedStoryText}/>
    </div>;
    }
});
