import {Component} from "react";
import React from "react";
import {View, StyleSheet, Text, FlatList, Image, TouchableOpacity} from "react-native";
import Toast, {DURATION} from "react-native-easy-toast"

// const User = [{name: '张三', age: 20, phone: 15026805122}, {name: '李四', age: 21, phone: 132564552356}, {
//     name: '王五',
//     age: 26,
//     phone: 15632658965
// }];


const City = ['北京', '上海', "广州", "香港", "澳门", "台湾", "西安", "香港", "澳门", "台湾", "西安"];


class Home extends Component {


    renderItem(data) {
        return (
            <TouchableOpacity onPress={() => {
                this.toast.show('点击了第' + data.index + '条数据')
            }}>
                <View key={data.index}>
                    <View>
                        <View>
                            <Text>姓名：{data.item.item.name}</Text>
                        </View>

                        <View>
                            <Text>年龄：{data.item.item.age}</Text>
                        </View>
                    </View>

                    <View>
                        <Text>电话：{data.item.item.phone}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    itemLine = () => {
        return (<View style={styles.itemLine}/>);
    }

    footer = () => {
        return (
            <Image style={styles.footer} source={require('../../img/2.jpeg')}></Image>
        )
    }

    header = () => {
        return (
            <Image style={styles.header} source={require('../../img/1.jpeg')}/>

        )
    }

    refreshData() {
        setTimeout(() => {
            this.setState({
                refreshing: false
            })
        }, 200);
        fetch('')
            .then(response => response.json())
            .then(result => {
                    this.setState({
                        result: result
                    })
                }
            ).catch(error=>{
                this.setState({
                    result:JSON.stringify(error)
                })
        })
    }

    constructor(props) {
        super(props)
        this.state = {
            refreshing: true,
            result: ''
        }

        this.refreshData();
    }

    render() {
        const User = [];
        for (let i = 0; i < 50; i++) {
            User.push({key: i, item: {name: '姓名' + i, age: '年龄' + i, phone: '电话' + i}})
        }

        return (
            <View style={styles.container}>
                <FlatList
                    data={User}
                    ItemSeparatorComponent={this.itemLine}
                    ListFooterComponent={this.footer}
                    ListHeaderComponent={this.header}
                    onRefresh={() => this.refreshData()}
                    refreshing={this.state.refreshing}
                    renderItem={(data) => this.renderItem(data)}/>
                <Toast ref={toast => {
                    this.toast = toast
                }}></Toast>
            </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,

    },
    itemLine: {
        height: 1,
        backgroundColor: '#afafaf',
    },

    footer: {
        height: 60,
    },
    header: {
        height: 60,
    },
})
module.exports = Home;

