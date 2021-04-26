import React, { Component } from 'react';
import aboutData from "./careerData.json";
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
                <h2>{aboutData.career1[0].heading}</h2>
                <p>{aboutData.career1[0].Data1}</p>
                <h2>{aboutData.career1[1].heading}</h2>
                <p>{aboutData.career1[1].Data1}</p>
                <h2>{aboutData.career1[2].heading}</h2>
                <p>{aboutData.career1[2].Data1}</p>
                <h2>{aboutData.career1[3].heading}</h2>
                <p>{aboutData.career1[3].Data1}</p>
            </nav>
        )
    }
}