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
                <h2>{aboutData.staffingdatainfo3[0].heading}</h2>
                <p>{aboutData.staffingdatainfo3[0].Data1}</p>
                <ul>
                    <li>{aboutData.staffingdatainfo3[0].Data2}</li>
                    <li>{aboutData.staffingdatainfo3[0].Data3}</li>
                    <li>{aboutData.staffingdatainfo3[0].Data4}</li>
                    <li>{aboutData.staffingdatainfo3[0].Data5}</li>
                    <li>{aboutData.staffingdatainfo3[0].Data6}</li>
                </ul>
                <h2>{aboutData.staffingdatainfo3[1].heading}</h2>
                <p>{aboutData.staffingdatainfo3[1].Data1}</p>

            </nav>
        )
    }
}