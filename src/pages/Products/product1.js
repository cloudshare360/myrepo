import React, { Component } from 'react';
import aboutData from "./productsdata.json";
import '../../global.css';
import styled from 'styled-components';

const nav = styled.div`
background: #101522;
margin-left: 1%;
`
export default class product extends Component {
    render() {
        return (
            <nav>
                <h2>{aboutData.product2[0].heading}</h2>
                <p>{aboutData.product2[0].Data1}</p>
            </nav>
        )
    }
}