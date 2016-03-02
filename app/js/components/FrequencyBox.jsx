var FrequencyBoxContent = require('./FrequencyBoxContent.jsx');

module.exports = React.createClass({
    displayName: "FrequencyBox",
    getInitialState: function () {
        return {
            data: this.props.data
        };
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            data: nextProps.data
        });
    },
    render: function () {
        return <div className="box" id="frequencyBox">
        <div className="boxHeader">
          <div id="frequencyTitle">Frequency of letters</div>
        </div>
        <FrequencyBoxContent data={this.state.data}/>
        </div>;
    }
});
