import React, { useState, useEffect } from "react";
import {
    Table,
    TableCell,
    TableBody,
    TableHead,
    TableRow,
    Flex,
    Button,
    Text,
    Card,
    Grid,
    View,
    CheckboxField,
    Divider,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Link } from 'react-router-dom';
import { DASHBOARD_CONST } from './constants';
import Header from '../../containers/Header';
import Input from '../Input/CustomInput';
import './style.css';

const AddRequestComponent = (props) => {

    const [connectionRows, updateConnectionRows] = React.useState(1);
    const [value, setValue] = React.useState('');
    const [ipError, validateIpAddress] = React.useState(false);
    const [usernameError, validateUsername] = React.useState(false);
    const [passwordError, validatePassword] = React.useState(false);
    const typeOptions = ["Proxy", "OpenVPN"];
    const costPerReqOptions = ["$$$$$", "$$$$", "$$$", "$$", "$"];


    return (
        <>
            <Flex direction="column" className='dashboard-wrapper'>
                <Header headerName='Add Request' />
                <Divider orientation="horizontal" />
                <Flex direction="row">
                    <Card variation="elevated">
                        <Text><b>Date Of Request :</b> 03/17/2022</Text>
                    </Card>
                    <Card variation="elevated">
                        <Text><b>Due Date :</b> 03/17/2022</Text>
                    </Card>
                    <Card variation="elevated">
                        <Text><b>POC :</b> ABC</Text>
                    </Card>
                    <Card variation="elevated">
                        <Text><b>POC Email :</b> abc@email.com</Text>
                    </Card>
                    <Card variation="elevated">
                        <Text><b>POC Voice :</b> 09-2124</Text>
                    </Card>
                </Flex>
                <Flex>
                    hello
                </Flex>
            </Flex>
            <Flex><Button className='footer-buttons' size="small">Add Request</Button></Flex>
        </>
    )
};

export default AddRequestComponent;