var StoriesBoxHeader = require('./StoriesBoxHeader.jsx');
var StoriesBoxContent = require('./StoriesBoxContent.jsx');

Array.prototype.unique = function () {
    var n = [];
    for (var i = 0; i < this.length; i++) {
        if (n.indexOf(this[i]) === -1) {
            n.push(this[i]);
        }
    }
    return n;
}

module.exports = React.createClass({
    displayName: "StoriesBox",
    getInitialState: function () {
        return {
            channel: this.props.data,
            selectedStoryId: null
        };
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            channel: nextProps.data,
            selectedStoryId: nextProps.selectedStoryId
        });
    },
    handleStorySelect: function (storyId) {
        this.setState({
            selectedStoryId: storyId
        }, function () {
            this.props.onStorySelect(this.state.selectedStoryId);
        });
    },
    render: function () {
        var postsCount = 0;
        var authorsCount = 0;
        var posts = [];
        if (this.state.channel != null) {
            posts = this.state.channel.items;
            postsCount = Object.keys(posts).length;
            var authorsArray = [];

            for (var i = 0; i < postsCount; i++) {
                authorsArray.push(posts[i].author);
            }

            authorsCount = authorsArray.unique().length;
        }
        return <div className="box" id="storiesBox">
    <StoriesBoxHeader postsCount={postsCount} authorsCount={authorsCount}/>
    <StoriesBoxContent posts={posts} onStorySelect={this.handleStorySelect} selectedStoryId={this.state.selectedStoryId}/>
    </div>;
    }
});
