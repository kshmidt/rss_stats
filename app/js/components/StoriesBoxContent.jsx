var StoriesList = require('./StoriesList.jsx');

module.exports = React.createClass({
    displayName: "StoriesBoxContent",
    getInitialState: function () {
        return {
            posts: this.props.posts,
            selectedStoryId: null
        }
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            posts: nextProps.posts,
            selectedStoryId: nextProps.selectedStoryId
        });
    },
    handleStorySelect: function (storyId) {
        this.props.onStorySelect(storyId);
    },
    handleClick: function () {
        this.setState({
            selectedStoryId: null
        }, function () {
            this.props.onStorySelect(null);
        });
    },
    render: function () {
        return <div className="boxContent" onClick={this.handleClick}><StoriesList items={this.props.posts} onStorySelect={this.handleStorySelect} onClick={this.handleClick} selectedStoryId={this.props.selectedStoryId}/></div>;
    }
});
