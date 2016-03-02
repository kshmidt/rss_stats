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
        if (this.state.posts.length > 0) {
            return <div className="boxContent" onClick={this.handleClick}><StoriesList items={this.props.posts} onStorySelect={this.handleStorySelect} onClick={this.handleClick} selectedStoryId={this.props.selectedStoryId}/></div>;
        } else {
            return <div className="boxContent">
            <div className="nodata">No data</div>
            </div>;
        }
    }
});
