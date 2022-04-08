import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DashboardComponent from '../../components/DashboardComponent';
import * as dashboardActions from '../../actions/dashboardActions';

function mapStateToProps(state, ownProps) {
    return {
        dashboard: state.dashboard
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dashboardActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);