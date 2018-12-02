import {Component} from "react";
import React from "react";
import {Text, View} from "react-native";

const Main =require('./Main')
export class Guide extends Component {
    componentDidMount(){
        this.timer=setTimeout(()=>{
            this.props.navigator.resetTo({
                component:Main
            })
        },3000)
    }
    render() {
        return (<View style={{justifyContent:'center',alignItems:'center',flex:1}}>
            <Text style={{fontSize:16,color:'#777'}}>欢迎界面</Text>
        </View>)
    }
}