import React, { useState, useEffect } from "react";
import { get } from 'lodash';
import {
    Table,
    TableCell,
    TableBody,
    TableHead,
    TableRow,
    Flex,
    Button,
    Text,
    SelectField,
    Card,
    Grid,
    TextField,
    View,
    CheckboxField,
    Divider,
    TextAreaField,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Link } from 'react-router-dom';
import { DASHBOARD_CONST_NORTH, DASHBOARD_CONST_EAST, DASHBOARD_CONST_SOUTH } from './constants';
import Header from '../../containers/Header';
import './style.css';

class AddRequestComponent extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            formData: {
               
            }
        };

    }

    onChangeInput = (e) => {
        var delta = {};
        switch(e.target.name){
            case 'North':
                delta[e.target.name] = e.target.checked;
                break;
            default:
                delta[e.target.name] = e.target.value;
                break;
        }
        this.setState({ formData: Object.assign(this.state.formData, delta) });
        this.forceUpdate();
    }

    render() {
        console.log("34", this.state.formData);

        // Object.values(DASHBOARD_CONST_NORTH.children).map((theader, index) => {
        //     // debugger
        //     console.log("43", get(this.state.formData, 'North.isChecked', false) || false );
            
        // });

        return (
            <>
                <Header headerName='Add Request' />
                <Flex fontSize={'smaller'} direction="column" className='addrequest-wrapper'>
                    <Grid
                        className="form-grid"
                        templateColumns="1fr 1fr 1fr 1fr 1fr"
                        templateRows="0rem 0rem"
                        gap="var(--amplify-space-large)"
                    >
                        <View variation="elevated" >
                            <TextField
                                fontSize={'smaller'}
                                label="Date Of Request"
                                name="dateofrequest"
                                size="small"
                                type='date'
                                min={new Date().toISOString().split("T")[0]}
                                placeholder={"date of request"}
                                autoComplete="dateofrequest"
                                onChange={(e) => this.onChangeInput(e)}
                            />
                        </View>
                        <View variation="elevated">
                            <TextField
                                label="Due Date"
                                fontSize={'smaller'}
                                size="small"
                                type='date'
                                min={new Date().toISOString().split("T")[0]}
                                name="duedate"
                                placeholder={"Due Date"}
                                autoComplete="duedate"
                                onChange={(e) => this.onChangeInput(e)}
                            />
                        </View>
                        <View variation="elevated">
                            <TextField
                                label="POC"
                                fontSize={'smaller'}
                                size="small"
                                name="poc"
                                placeholder={"POC"}
                                autoComplete="poc"
                                onChange={(e) => this.onChangeInput(e)}
                            />
                        </View>
                        <View variation="elevated">
                            <TextField
                                label="POC Voice"
                                fontSize={'smaller'}
                                size="small"
                                // hasError={true}
                                // errorMessage={`hello`}
                                name="pocvoice"
                                placeholder={"POC Voice"}
                                autoComplete="pocvoice"
                                onChange={(e) => this.onChangeInput(e)}
                            />
                        </View>
                        <View variation="elevated" >
                            <TextField
                                label="POC Email"
                                fontSize={'smaller'}
                                size="small"
                                name="pocemail"
                                placeholder={"POC Email"}
                                autoComplete="pocemail"
                                onChange={(e) => this.onChangeInput(e)}
                            />
                        </View>
                    </Grid>
                    <Grid
                        className="form-grid"
                        templateColumns="1fr 1fr 1fr 1fr 1fr"
                        templateRows="0rem 0rem"
                        gap="var(--amplify-space-large)"
                    > <View variation="elevated">
                            <TextField
                                fontSize={'smaller'}
                                label="From Date"
                                name="fromdate"
                                size="small"
                                type='date'
                                min={new Date().toISOString().split("T")[0]}
                                placeholder={"From Date"}
                                onChange={(e) => this.onChangeInput(e)}
                                autoComplete="fromdate"
                            />
                        </View>
                        <View variation="elevated">
                            <TextField
                                fontSize={'smaller'}
                                label="To Date"
                                name="todate"
                                size="small"
                                type='date'
                                min={new Date().toISOString().split("T")[0]}
                                onChange={(e) => this.onChangeInput(e)}
                                placeholder={"To Date"}
                                autoComplete="todate"
                            />
                        </View>
                        <View variation="elevated">
                            <SelectField onChange={(e) => this.onChangeInput(e)} 
                                className="time-select" label="Time" name="time" size="small">
                                <option value="day">Day</option>
                                <option value="night">Night</option>
                                <option value="daynight">Day/Night</option>
                            </SelectField>
                        </View>
                        <View variation="elevated">
                            <TextField
                                label="Min Dur"
                                onChange={(e) => this.onChangeInput(e)}
                                fontSize={'smaller'}
                                size="small"
                                name="mindur"
                                placeholder={"Min Dur"}
                                autoComplete="mindur"
                            />
                        </View>
                        <View variation="elevated">
                            <SelectField onChange={(e) => this.onChangeInput(e)} 
                                className="time-select" 
                                label="Type Of Mission" 
                                name="time" size="small">
                                <option value="afm">AFM</option>
                                <option value="dcm">DCM</option>
                                <option value="bfa">BFA</option>
                            </SelectField>
                        </View></Grid>

                    <Grid
                        className="form-grid"
                        templateColumns="1fr 1fr 1fr 1fr 1fr"
                        templateRows="0rem 0rem"
                        gap="var(--amplify-space-large)"
                    ><View variation="elevated">
                            <TextField
                                fontSize={'smaller'}
                                label="AC"
                                name="fromdate"
                                size="small"
                                placeholder={"AC"}
                                autoComplete="ac"
                                onChange={(e) => this.onChangeInput(e)}
                            />
                        </View>
                        <View variation="elevated">
                            <TextField
                                fontSize={'smaller'}
                                label="ADV"
                                name="todate"
                                size="small"
                                placeholder={"ADV"}
                                autoComplete="ac"
                                onChange={(e) => this.onChangeInput(e)}
                            />
                        </View>
                        <View variation="elevated">
                            <TextField
                                fontSize={'smaller'}
                                label="TUR"
                                name="tur"
                                size="small"
                                placeholder={"TUR"}
                                autoComplete="tur"
                                onChange={(e) => this.onChangeInput(e)}
                            />
                        </View> </Grid>

                    <Flex direction="row" className="multi-select-list">
                        <View className='checklist-name'><Card className="multi-select-card" variation="elevated">
                            <CheckboxField onChange={(e) => this.onChangeInput(e)} isChecked={DASHBOARD_CONST_NORTH.isChecked} label={DASHBOARD_CONST_NORTH.label} name={DASHBOARD_CONST_NORTH.name} /></Card></View>
                        <View className='checklist'>{Object.values(DASHBOARD_CONST_NORTH.children).map((params, index) => {
                            return (<Card className="multi-select-card" variation="elevated">
                                <Text ><CheckboxField onChange={(e) => this.onChangeInput(e)} {...params} /></Text>
                            </Card>);
                        })}</View>
                    </Flex>

                    <Flex direction="row" className="multi-select-list">
                        <View className='checklist-name'><Card className="multi-select-card" variation="elevated">
                            <CheckboxField size="small" label="East" name="east" /></Card></View>
                        <View className='checklist'>{Object.values(DASHBOARD_CONST_EAST).map((theader, index) => {
                            return (<Card className="multi-select-card" variation="elevated">
                                <Text ><CheckboxField size="small" label={theader} name="subscribe" value="yes" /></Text>
                            </Card>);
                        })}</View>
                    </Flex>

                    <Flex direction="row" className="multi-select-list">
                        <View className='checklist-name'><Card className="multi-select-card" variation="elevated">
                            <CheckboxField size="small" label="South" name="south" checked='checked' /></Card></View>
                        <View className='checklist'>{Object.values(DASHBOARD_CONST_SOUTH).map((theader, index) => {
                            return (<Card className="multi-select-card" variation="elevated">
                                <Text ><CheckboxField size="small" label={theader} name="subscribe" value="yes" /></Text>
                            </Card>);
                        })}</View>
                    </Flex>
                    <TextAreaField label="Remarks" size="small" className="remarks"/>
                    <Flex direction="row" className="addrequest-footer-buttons">
                        <Link className='amplify-button amplify-field-group__control footer-buttons' to={'/addrequest'}>Submit</Link>
                        <Link className='amplify-button amplify-field-group__control footer-buttons' to={'/addrequest'}>Clear</Link>
                        <Link className='amplify-button amplify-field-group__control footer-buttons' to={'/dashboard'}>Cancel</Link>
                    </Flex>
                    {/* </Grid> */}
                   
                </Flex>

            </>
        )
    }
};

export default AddRequestComponent;