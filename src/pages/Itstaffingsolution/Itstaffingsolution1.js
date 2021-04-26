import React, { Component } from 'react';
import aboutData from "./ItstaffingData.json";
import '../../global.css';
import styled from 'styled-components';

const nav = styled.div`
background: #101522;
margin-left: 1%;
`
export default class About extends Component {
    render() {
        return (
            <nav>
                <h2>{aboutData.staffingdatainfo2[0].heading}</h2>
                <p>{aboutData.staffingdatainfo2[0].Data}</p>
                <p/>
                <p/>
            </nav>
        )
    }
}