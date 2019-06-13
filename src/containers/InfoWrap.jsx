import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from "redux";
import { requestInfo } from "../actions";

class InfoWrap extends React.Component {
    handleGetInfo() {
        const { onRequestInfo } = this.props;
        onRequestInfo()
    }
    render(){
        return (
            <React.Fragment>
                <button onClick={() => this.handleGetInfo()}>GetInfo</button>
                <p>{this.props.data === null ? '널입니다' : this.props.data.body}</p>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('mapStateProps: ', state);
    return {
        data: state.Info.data
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestInfo: bindActionCreators(requestInfo, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InfoWrap);
