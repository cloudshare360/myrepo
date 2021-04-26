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
                <h2>{aboutData.counsulting1[0].heading}</h2>
                <p>{aboutData.counsulting1[0].Data1}</p>
                <p>{aboutData.counsulting1[0].Data2}</p>
                <h2>{aboutData.counsulting1[1].heading}</h2>
                <ul>
                    <li>{aboutData.counsulting1[1].Data1}</li>
                    <li>{aboutData.counsulting1[1].Data2}</li>
                    <li>{aboutData.counsulting1[1].Data3}</li>
                    <li>{aboutData.counsulting1[1].Data4}</li>
                </ul>
                <h2>{aboutData.counsulting1[2].heading}</h2>
                <ul>
                    <li>{aboutData.counsulting1[2].Data1}</li>
                    <li>{aboutData.counsulting1[2].Data2}</li>
                    <li>{aboutData.counsulting1[2].Data3}</li>
                    <li>{aboutData.counsulting1[2].Data4}</li>
                </ul>
                <h2>{aboutData.counsulting1[3].heading}</h2>
                <p>{aboutData.counsulting1[3].Data1}</p>
                <ul>
                    <li>{aboutData.counsulting1[3].Data2}</li>
                    <li>{aboutData.counsulting1[3].Data3}</li>
                    <li>{aboutData.counsulting1[3].Data4}</li>
                </ul>
            </nav>
        )
    }
}