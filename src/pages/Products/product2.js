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
                <h2>{aboutData.product1[0].heading}</h2>
                <p>{aboutData.product1[0].Data1}</p>
                <h2>{aboutData.product1[1].heading}</h2>
                <p>{aboutData.product1[1].Data1}</p>
                <ul>
                    <li>{aboutData.product1[1].Data2}</li>
                    <li>{aboutData.product1[1].Data3}</li>
                    <li>{aboutData.product1[1].Data4}</li>
                    <li>{aboutData.product1[1].Data5}</li>
                    <li>{aboutData.product1[1].Data6}</li>
                    <li>{aboutData.product1[1].Data7}</li>
                    <li>{aboutData.product1[1].Data8}</li>
                    <li>{aboutData.product1[1].Data9}</li>
                    <li>{aboutData.product1[1].Data10}</li>
                </ul>
                <h2>{aboutData.product1[2].heading}</h2>
                <p>{aboutData.product1[2].Data1}</p>
                <ul>
                    <li>{aboutData.product1[2].Data2}</li>
                    <li>{aboutData.product1[2].Data3}</li>
                    <li>{aboutData.product1[2].Data4}</li>
                </ul>
            </nav>
        )
    }
}