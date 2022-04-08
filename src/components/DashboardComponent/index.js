import * as React from 'react';
import {
    Table,
    TableCell,
    TableBody,
    TableHead,
    TableRow,
    Flex,
    Text,
    Card,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Link } from 'react-router-dom';
import { DASHBOARD_CONST } from './constants';
import Header from '../../containers/Header';
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
                <Header headerName='Dashboard'/>
                <Flex direction="row" className='dashboard-nav'>
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
                            {Object.values(DASHBOARD_CONST).map((theader, index) => {
                                return (<TableCell as="th" className='table-thead'>{theader}</TableCell>);
                            })}
                        </TableRow>
                    </TableHead>
                    {/* {[...Array(connectionRows)].map((e, i) => ( */}
                    <TableBody>
                        <TableRow>
                            <TableCell><Text variation="primary">03/17/2022</Text></TableCell>
                            <TableCell><Text variation="primary">03/18/2022</Text></TableCell>
                            <TableCell><Text variation="primary">0+45</Text></TableCell>
                            <TableCell><Text variation="primary">BFM</Text></TableCell>
                            <TableCell><Text variation="primary">Dry</Text></TableCell>
                            <TableCell><Text variation="primary">6p6</Text></TableCell>
                            <TableCell><Text variation="primary">8*6</Text></TableCell>
                            <TableCell><Text variation="primary">3+00</Text></TableCell>
                            <TableCell><Text variation="primary">PMA 75W 71N CYD</Text></TableCell>
                            <TableCell><Text variation="primary">CAA CAC ELG</Text></TableCell>
                            <TableCell><Text variation="primary">SAL ALA 61A</Text></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><Text variation="primary">03/17/2022</Text></TableCell>
                            <TableCell><Text variation="primary">03/18/2022</Text></TableCell>
                            <TableCell><Text variation="primary">0+45</Text></TableCell>
                            <TableCell><Text variation="primary">BFM</Text></TableCell>
                            <TableCell><Text variation="primary">Dry</Text></TableCell>
                            <TableCell><Text variation="primary">6p6</Text></TableCell>
                            <TableCell><Text variation="primary">8*6</Text></TableCell>
                            <TableCell><Text variation="primary">3+00</Text></TableCell>
                            <TableCell><Text variation="primary">PMA 75W 71N CYD</Text></TableCell>
                            <TableCell><Text variation="primary">CAA CAC ELG</Text></TableCell>
                            <TableCell><Text variation="primary">SAL ALA 61A</Text></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><Text variation="primary">03/17/2022</Text></TableCell>
                            <TableCell><Text variation="primary">03/18/2022</Text></TableCell>
                            <TableCell><Text variation="primary">0+45</Text></TableCell>
                            <TableCell><Text variation="primary">BFM</Text></TableCell>
                            <TableCell><Text variation="primary">Dry</Text></TableCell>
                            <TableCell><Text variation="primary">6p6</Text></TableCell>
                            <TableCell><Text variation="primary">8*6</Text></TableCell>
                            <TableCell><Text variation="primary">3+00</Text></TableCell>
                            <TableCell><Text variation="primary">PMA 75W 71N CYD</Text></TableCell>
                            <TableCell><Text variation="primary">CAA CAC ELG</Text></TableCell>
                            <TableCell><Text variation="primary">SAL ALA 61A</Text></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><Text variation="primary">03/17/2022</Text></TableCell>
                            <TableCell><Text variation="primary">03/18/2022</Text></TableCell>
                            <TableCell><Text variation="primary">0+45</Text></TableCell>
                            <TableCell><Text variation="primary">BFM</Text></TableCell>
                            <TableCell><Text variation="primary">Dry</Text></TableCell>
                            <TableCell><Text variation="primary">6p6</Text></TableCell>
                            <TableCell><Text variation="primary">8*6</Text></TableCell>
                            <TableCell><Text variation="primary">3+00</Text></TableCell>
                            <TableCell><Text variation="primary">PMA 75W 71N CYD</Text></TableCell>
                            <TableCell><Text variation="primary">CAA CAC ELG</Text></TableCell>
                            <TableCell><Text variation="primary">SAL ALA 61A</Text></TableCell>
                        </TableRow>
                        
                    </TableBody>
                    {/* ))} */}
                </Table>
                <Link className='amplify-button amplify-field-group__control footer-buttons' to={'/addrequest'}>Add Request</Link>
            </Flex>
            <Flex>
            
                </Flex>
        </>
    )
};

export default AddRequestComponent;