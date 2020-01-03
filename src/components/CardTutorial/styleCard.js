import styled, { css } from 'styled-components'
import Layout from '../../constants/Layout'

const Container = styled.View`
width:80%;
height:75%;
`
const Content = styled.View`
align-items:center;
`
const MyText = styled.Text`
color:#FFF;
font-size:20px;
text-align:center;
line-height: 22px;
font-weight:700;
margin-bottom:4;
${props=> props.button && css`
font-size:15px;
color:#E5E5E5;
margin-bottom:0;
`}
`
const Img = styled.ImageBackground`
height: ${Layout.window.height / 3.5};
width:340;
justify-content:center;
align-items:center; 
`

export { Container, Content, MyText, Img}