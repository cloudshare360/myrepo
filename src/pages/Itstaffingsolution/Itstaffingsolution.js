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
                <h2>{aboutData.staffingdatainfo1[0].heading}</h2>
                <p>{aboutData.staffingdatainfo1[0].Data1}</p>
                <p>{aboutData.staffingdatainfo1[0].Data2}</p>
                <p>{aboutData.staffingdatainfo1[0].Data3}</p>
                <h2>{aboutData.staffingdatainfo1[1].heading}</h2>
                <ul>
                    <li>{aboutData.staffingdatainfo1[1].Data1}</li>
                    <li>{aboutData.staffingdatainfo1[1].Data2}</li>
                    <li>{aboutData.staffingdatainfo1[1].Data3}</li>
                    <li>{aboutData.staffingdatainfo1[1].Data4}</li>
                    <li>{aboutData.staffingdatainfo1[1].Data5}</li>
                    <li>{aboutData.staffingdatainfo1[1].Data6}</li>
                    <li>{aboutData.staffingdatainfo1[1].Data7}</li>
                </ul>
                <p>{aboutData.staffingdatainfo1[1].Data8}</p>
                <h2>{aboutData.staffingdatainfo1[2].heading}</h2>
                <p >{aboutData.staffingdatainfo1[2].Data}</p>
                <h2>{aboutData.staffingdatainfo1[3].heading}</h2>
                <ul>
                    <li> {aboutData.staffingdatainfo1[3].Data1}</li>
                    <li>{aboutData.staffingdatainfo1[3].Data2}</li>
                    <li>{aboutData.staffingdatainfo1[3].Data3}</li>
                    <li>{aboutData.staffingdatainfo1[3].Data4}</li>
                    <li>{aboutData.staffingdatainfo1[3].Data5}</li>
                    <li>{aboutData.staffingdatainfo1[3].Data6}</li>
                </ul>
                
            </nav>
        )
    }
}