module.exports = React.createClass({
    displayName: "StoriesBoxHeader",
    render: function () {
        return <div className="boxHeader">
    <div id="postCount">Posts: {this.props.postsCount}</div>
    <div id="authorsCount">Authors: {this.props.authorsCount}</div>
    </div>;
    }
});
