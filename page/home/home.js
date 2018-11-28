import {Component} from "react";
import React from "react";
import {View, StyleSheet, Text} from "react-native";

class Home extends Component {
    render() {
        return (
            <View>
                <Text>首页</Text>
            </View>)
    }
}

const style=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#f00',
    },
})
module.exports=Home;

