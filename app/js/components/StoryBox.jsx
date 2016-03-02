var StoryBoxHeader = require('./StoryBoxHeader.jsx');
var StoryBoxContent = require('./StoryBoxContent.jsx');

module.exports = React.createClass({
    displayName: "StoryBox",
    getInitialState: function () {
        return {
            story: this.props.data
        };
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            story: nextProps.data
        });
    },
    render: function () {
        var title = "";
        var link = "";
        var description = "";
        if (this.state.story != null) {
            title = this.state.story.title;
            link = this.state.story.link;
            description = this.state.story.description;
        }
        return <div className="box" id="storyBox">
        <StoryBoxHeader text={title} link={link}/>
        <StoryBoxContent text={description}/>
        </div>;
    }
});
