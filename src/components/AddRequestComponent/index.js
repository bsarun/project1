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
import Input from '../../components/Input/CustomInput';
import './style.css';

const AddRequestComponent = (props) => {

    const [connectionRows, updateConnectionRows] = React.useState(1);
    const [value, setValue] = React.useState('');
    const [ipError, validateIpAddress] = React.useState(false);
    const [usernameError, validateUsername] = React.useState(false);
    const [passwordError, validatePassword] = React.useState(false);
    const typeOptions = ["Proxy", "OpenVPN"];
    const costPerReqOptions = ["$$$$$", "$$$$", "$$$", "$$", "$"];


    const [northCheckedAll, setNorthCheckedAll] = useState(false);
    const [northChecked, setNorthChecked] = useState({
        'tin': false,
        '74a': false,
        'pm9': false
    });

    const toggleCheck = (inputName) => {
        setNorthChecked((prevState) => {
            const newState = { ...prevState };
            newState[inputName] = !prevState[inputName];
            return newState;
        });
    };

    const selectAll = (value) => {
        setNorthCheckedAll(value);
        setNorthChecked((prevState) => {
            const newState = { ...prevState };
            for (const inputName in newState) {
                newState[inputName] = value;
            }
            return newState;
        });
    }

    useEffect(() => {
        let allChecked = true;
        for (const inputName in northChecked) {
            if (northChecked[inputName] === false) {
                allChecked = false;
            }
        }
        if (allChecked) {
            setNorthChecked(true);
        } else {
            setNorthChecked(false);
        }
    }, [northChecked]);

    // function setIndividualCheck() {
    //     debugger
    // }

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
                <Table className='table-row dashboard-table'>
                    <TableHead>
                        <TableRow>
                            <TableCell as="th">#AC</TableCell>
                            <TableCell as="th">ADV</TableCell>
                            <TableCell as="th">TUR</TableCell>
                            <TableCell as="th"><CheckboxField checked={northCheckedAll} onChange={(e) => selectAll(e.target.checked)} label="North" value="yes" /></TableCell>
                            <TableCell as="th"><CheckboxField label="East" /></TableCell>
                            <TableCell as="th"><CheckboxField label="Obh" /></TableCell>
                        </TableRow>
                    </TableHead>
                    {/* {[...Array(connectionRows)].map((e, i) => ( */}
                    <TableBody>
                        <TableRow>
                            <TableCell><Text variation="primary"></Text></TableCell>
                            <TableCell><Text variation="primary"></Text></TableCell>
                            <TableCell><Text variation="primary"></Text></TableCell>
                            <TableCell>
                                <Flex direction="row">
                                    <CheckboxField checked={northChecked['74A']} onChange={() => toggleCheck("74A")} label="74A" />
                                    <CheckboxField checked={northChecked['PM9']} onChange={() => toggleCheck("PM9")} label="PM9" />
                                </Flex>
                            </TableCell>
                            <TableCell>
                                <Flex
                                    direction="row">
                                    <CheckboxField label="CAA" />
                                </Flex>
                            </TableCell>
                            <TableCell>
                                <Flex
                                    direction="row">
                                    <CheckboxField label="74A" />
                                    <CheckboxField label="PM9" />
                                </Flex>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><Text variation="primary"></Text></TableCell>
                            <TableCell><Text variation="primary"></Text></TableCell>
                            <TableCell><Text variation="primary"></Text></TableCell>
                            <TableCell>
                                <Flex direction="row">
                                    <CheckboxField checked={northChecked['74A']} onChange={() => toggleCheck("74A")} label="74A" />
                                    <CheckboxField checked={northChecked['PM9']} onChange={() => toggleCheck("PM9")} label="PM9" />
                                </Flex>
                            </TableCell>
                            <TableCell>
                                <Flex
                                    direction="row">
                                    <CheckboxField label="CAA" />
                                </Flex>
                            </TableCell>
                            <TableCell>
                                <Flex
                                    direction="row">
                                    <CheckboxField label="74A" />
                                    <CheckboxField label="PM9" />
                                </Flex>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><Text variation="primary"></Text></TableCell>
                            <TableCell><Text variation="primary"></Text></TableCell>
                            <TableCell><Text variation="primary"></Text></TableCell>
                            <TableCell>
                                <Flex
                                    direction="row">
                                    <CheckboxField checked={northChecked} label="74A" />
                                    <CheckboxField checked={northChecked} label="PM9" />
                                </Flex>
                            </TableCell>
                            <TableCell>
                                <Flex
                                    direction="row">
                                    <CheckboxField label="CAA" />
                                </Flex>
                            </TableCell>
                            <TableCell>
                                <Flex
                                    direction="row">
                                    <CheckboxField label="74A" />
                                    <CheckboxField label="PM9" />
                                </Flex>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                    {/* ))} */}
                </Table>
            </Flex>
            <Flex><Button className='footer-buttons' size="small">Add Request</Button></Flex>
        </>
    )
};

export default AddRequestComponent;