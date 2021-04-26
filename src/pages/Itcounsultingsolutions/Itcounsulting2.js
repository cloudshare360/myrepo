import React, { Component } from 'react';
import aboutData from "./ItcounsultingData.json";
import '../../global.css';
import styled from 'styled-components';

const nav = styled.div`
background: #101522;
margin-left: 1%;
`
export default class counsulting extends Component {
    render() {
        return (
            <nav>
                <h2>{aboutData.counsulting2[0].heading}</h2>
                <p>{aboutData.counsulting2[0].Data1}</p>
                <p>{aboutData.counsulting2[0].Data2}</p>
                <p>{aboutData.counsulting2[0].Data3}</p>
                <ul>
                    <li>{aboutData.counsulting2[0].Data4}</li>
                    <li>{aboutData.counsulting2[0].Data5}</li>
                    <li>{aboutData.counsulting2[0].Data6}</li>
                </ul>
                <h2>{aboutData.counsulting2[0].Data7}</h2>
                <p>{aboutData.counsulting2[0].Data8}</p>
                <p>{aboutData.counsulting2[0].Data9}</p>
                <ul>
                    <li>{aboutData.counsulting2[0].Data10}</li>
                    <li>{aboutData.counsulting2[0].Data11}</li>
                    <li>{aboutData.counsulting2[0].Data12}</li>
                    <li>{aboutData.counsulting2[0].Data13}</li>
                </ul>
                <h2>{aboutData.counsulting2[1].heading}</h2>
                <p>{aboutData.counsulting2[1].Data1}</p>
                <h2>{aboutData.counsulting2[2].heading}</h2>
                <p>{aboutData.counsulting2[2].Data1}</p>
                <p>{aboutData.counsulting2[2].Data2}</p>
            </nav>
        )
    }
}