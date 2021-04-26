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
                <h2>{aboutData.career2[0].heading}</h2>
                <h2>{aboutData.career2[0].Data1}</h2>
                <p>{aboutData.career2[0].Data2}</p>
            </nav>
        )
    }
}