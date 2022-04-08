import * as React from 'react';
import {
    Heading,
    Flex,
    View,
    Card,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Link } from 'react-router-dom';
import './HeaderComponent.css';

const HeaderComponent = (props) => {
    return (
        <Flex>
            <Heading className='header-wrapper' level={4}>{props.headerName}</Heading>
            <Card className='module-name'>16WPS(Viper)</Card>
            <View className='header-flex-end'><Link className='amplify-button amplify-field-group__control logout-button' to={'/'}>Logout</Link></View>
        </Flex>
    );
};

export default HeaderComponent;