import React from 'react';
import {
    View,
    Text,
    StyleSheet, Image
} from 'react-native';

import { Header } from 'react-native-elements';

const styles = StyleSheet.create({
    imageLogo: {
        width: 200,
        height: 40,
        resizeMode: 'stretch'
    }, imageIcon: {
        width: 35,
        height: 35,
        top: 5
    }
});

function HeaderNetflix({ black }) {

    function renderLogo() {
        return (
            <Image
                style={styles.imageLogo}
                source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png',
                }} />
        )
    }

    function renderIcon() {
        return (
            <Image
                style={styles.imageIcon}
                source={{
                    uri: 'https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png',
                }} />
        )
    }

    return (
        <Header
            leftComponent={renderLogo()}
            rightComponent={renderIcon()}
            backgroundColor='#141414'
        />
    )
}

export default HeaderNetflix;