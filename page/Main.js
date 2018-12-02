import React, {Component} from "react";
import {View, Navigator, Text, Image, StyleSheet, Dimensions} from "react-native";
import TabNavigator from 'react-native-tab-navigator';

const Home = require('./home/home');
const Store = require('./store/store');
const Wel = require('./wel/wel');
const Mine = require('./mine/mine');

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectTab: 'home',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator tabBarStyle={styles.tab}>
                    <TabNavigator.Item
                        title='首页'
                        titleStyle={styles.tab_title_n}
                        selectedTitleStyle={styles.tab_title_p}
                        renderIcon={() => <Image style={styles.img} source={require('../img/icon_home_n.png')}/>}
                        renderSelectedIcon={() => <Image style={styles.img}
                                                         source={require('../img/icon_home_p.png')}/>}
                        onPress={() => this.setState({selectTab: 'home'})}
                        selected={this.state.selectTab === 'home'}>

                        <Home></Home>
                    </TabNavigator.Item>

                    {/*收藏*/}
                    <TabNavigator.Item
                        title={'收藏'}
                        titleStyle={styles.tab_title_n}
                        selectedTitleStyle={styles.tab_title_p}
                        renderIcon={() => <Image style={styles.img} source={require('../img/icon_store_n.png')}/>}
                        renderSelectedIcon={() => <Image style={styles.img}
                                                         source={require('../img/icon_store_p.png')}/>}
                        onPress={()=>this.setState({selectTab:'store'})}
                        selected={this.state.selectTab==='store'}
                    ><Store></Store>
                    </TabNavigator.Item>

                    {/*热点*/}
                    <TabNavigator.Item
                        title={'热点'}
                        titleStyle={styles.tab_title_n}
                        selectedTitleStyle={styles.tab_title_p}
                        renderIcon={() => <Image style={styles.img} source={require('../img/icon_wel_n.png')}/>}
                        renderSelectedIcon={() => <Image style={styles.img}
                                                         source={require('../img/icon_wel_p.png')}/>}
                        onPress={()=>this.setState({selectTab:'wel'})}
                        badgeText={1}
                        selected={this.state.selectTab==='wel'}
                    ><Wel></Wel>
                    </TabNavigator.Item>

                    {/*我的*/}
                    <TabNavigator.Item
                        title={'我的'}
                        titleStyle={styles.tab_title_n}
                        selectedTitleStyle={styles.tab_title_p}
                        renderIcon={() => <Image style={styles.img} source={require('../img/icon_mine_n.png')}/>}
                        renderSelectedIcon={() => <Image style={styles.img}
                                                         source={require('../img/icon_mine_p.png')}/>}
                        onPress={()=>this.setState({selectTab:'mine'})}
                        selected={this.state.selectTab==='mine'}
                    ><Mine></Mine>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )
    }
}

module.exports = Main;

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    img: {
        width: 25,
        height: 25,
    },
    tab:{

    },
    tab_title_n:{
        fontSize:12,
    },
    tab_title_p:{
        fontSize:12,
        color:'#f00',
    },

})