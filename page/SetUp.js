import React, {Component} from "react";
import {Guide} from "./Guide";
import {Navigator} from "react-native-deprecated-custom-components";

function setUp() {
    class Root extends Component {

        renderScene(router,navigator){
            let Component=router.component;
            return <Component {...router.params} navigator={navigator}/>
        }
        render() {
            return (
                <Navigator
                    initialRoute={{component:Guide}}
                    renderScene={(router,navigator)=>this.renderScene(router,navigator)}
                />
            )
        }
    }

    return <Root/>
}

module.exports=setUp;