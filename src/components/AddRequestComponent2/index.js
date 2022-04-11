import React, { useState, useEffect } from "react";
import { get } from 'lodash';
import {
    Flex,
    Text,
    SelectField,
    Card,
    Grid,
    TextField,
    View,
    CheckboxField,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Link } from 'react-router-dom';
import { DASHBOARD_CONST, DASHBOARD_CONST_EAST, DASHBOARD_CONST_SOUTH, DASHBOARD_CONST_SUPPORT } from './constants';
import Header from '../../containers/Header';
import './style.css';

class AddRequestComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            formData: {
                ...DASHBOARD_CONST
            }
        };
    }

    onChangeInput = (e, unit, obj) => {
        var delta = { ...this.state.formData };
        switch (e.target.type) {
            case 'checkbox':
                if (unit) {
                    unit.checked = e.target.checked;
                    Object.keys(obj.children).every(function (k) { return obj.children[k].checked === true }) ? delta[obj.parent].checked = true : delta[obj.parent].checked = false;
                    break;
                }
                delta[e.target.name].checked = e.target.checked;
                delta[e.target.name].children.filter(x => x.checked = e.target.checked);
                break;
            default:
                delta[e.target.name] = e.target.value;
                break;
        }
        this.setState({ formData: Object.assign(this.state.formData, delta) });
    }

    render() {

        return (
            <>
                <Header headerName='Add Request' />
                <Flex fontSize={'smaller'} direction="column" className='addrequest-wrapper'>
                    <Grid
                        className="form-grid"
                        templateColumns="15% 15% 15% 15% 15% 15%"
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

                    </Grid>
                    <Grid
                        className="form-grid"
                        templateColumns="15% 15% 15% 15% 15% 15%"
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
                                label="Type Of Mission"
                                onChange={(e) => this.onChangeInput(e)}
                                fontSize={'smaller'}
                                size="small"
                                name="mindur"
                                placeholder={"Type Of Mission"}
                                autoComplete="mindur"
                            />
                        </View>
                        <View variation="elevated">
                            <SelectField onChange={(e) => this.onChangeInput(e)}
                                className="time-select"
                                label="ORD"
                                name="time" size="small">
                                <option value="afm"></option>
                            </SelectField>
                        </View>
                        <View variation="elevated">
                            <SelectField onChange={(e) => this.onChangeInput(e)}
                                className="time-select"
                                label="Split Air Spaces"
                                name="time" size="small">
                                <option value="afm"></option>
                            </SelectField>
                        </View>

                    </Grid>

                    <Grid
                        className="form-grid"
                        templateColumns="15% 15% 15% 15% 15%"
                        templateRows="0rem 0rem"
                        gap="var(--amplify-space-large)"
                    ><View variation="elevated">
                        <TextField
                            fontSize={'smaller'}
                            label="AC-Firstround"
                            name="fromdate"
                            size="small"
                            placeholder={"AC"}
                            autoComplete="ac"
                            onChange={(e) => this.onChangeInput(e)}
                        /></View>
                            <View variation="elevated"><TextField
                                fontSize={'smaller'}
                                name="fromdate"
                                // className='ac-text2'
                                label="AC-Secondround"
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
                        </View>
                    </Grid>

                    {Object.values(DASHBOARD_CONST).map((range, index) => {
                        return (<Flex direction="row" className="multi-select-list">
                            <View className='checklist-name'>
                                <Card className="multi-select-card" variation="elevated">
                                    <CheckboxField
                                        {...Object.fromEntries(Object.entries(DASHBOARD_CONST[range.label]).slice(1, 6))}
                                        onChange={(e) => this.onChangeInput(e)}
                                    />
                                </Card>
                            </View>
                            <View className='checklist'>{DASHBOARD_CONST[range.label].children.map((param, index) => {
                                return (
                                    <Card className="multi-select-card" variation="elevated">
                                        <CheckboxField
                                            {...param}
                                            onChange={(e) => this.onChangeInput(e, param, { children: DASHBOARD_CONST[range.label].children, parent: range.label })}
                                        />
                                    </Card>
                                );
                            })}</View>
                        </Flex>)
                    })}
                    <Flex className="form-grid" direction="row" ><TextField
                        fontSize={'small'}
                        className='remarks-textbox'
                        label="Remarks"
                        name="tur"
                        size="small"
                        placeholder={"Remarks"}
                        autoComplete="tur"
                        onChange={(e) => this.onChangeInput(e)}
                    /></Flex>
                    {/* <TextAreaField label="Remarks" size="small" className="remarks" /> */}
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