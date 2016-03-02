module.exports = React.createClass({
    displayName: "StoryBoxHeader",
    getInitialState: function () {
        return {
            title: this.props.text,
            link: this.props.link
        };
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            title: nextProps.text,
            link: nextProps.link
        });
    },
    render: function () {
        var link = "";
        if (this.state.link) {
            link = this.state.link;
            link = link.toString();
        }
        return <div className="boxHeader">
    <div id="storyTitle" title={this.state.title}><a href={link}>{this.state.title}</a></div>
    </div>;
    }
});
