import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react';
// import { render } from 'react-dom';
import { StyleSheet, ImageBackground, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import Screen1 from './public/images/Screen1.png';
import Screen2 from './public/images/Screen2.png';

import Background from './public/images/ww.png';

// Testing
import Home from './Views/Pages/Test/Home';
import Product from './Views/Pages/Test/Product';
// End Testing

// import Login from './Views/Pages/LoginRegister/Login';

import RouteNavigation from './Views/Routes/Route';

import { NativeRouter, Switch, Route, Redirect } from 'react-router-native';

const slides = [
	{
	  key: 1,
	  title: 'Payment',
	  text: 'Bayar berbagai jenis tagihan mudah, cepat, aman, hanya dalam waktu beberapa menit saja.',
	  image: Screen1,
	//   backgroundColor: '#E5222A',
	},
	{
	  key: 2,
	  title: 'Digital Shopping Experience',
	  text: 'Duduk manis, santai. Tambahkan produk favoritmu ke keranjang. Cuma tinggal klik, semua beres!',
	  image: Screen2,
	//   backgroundColor: '#E5222A',
	},
];

const styles = StyleSheet.create({
	slide: {
		flex:1,
		width: '100%',
    	flexDirection:'column',
	  	justifyContent: 'center',
	},
	image: {
		height: '40%',
		resizeMode: 'contain',
	},
	text: {
	  color: 'rgba(255, 255, 255, 0.8)',
	  textAlign: 'center',
	},
	title: {
	  fontSize: 22,
	  color: 'white',
	  textAlign: 'center',
	},
});

export default class App extends React.Component {
	state = {
		showRealApp: false
	}

	_renderItem = ({ item }) => {
		return (
			<View style={{
				...styles.slide,
			}}>
				<View style={{
					width: (100% - 20 - 20),
					position: 'relative',
					flex: 1,
					flexDirection: 'column',
					alignItems: 'center',
					marginHorizontal: 20,
					marginVertical: 20,
				}}>
					<Image style={{
						...styles.image,
						marginTop: 80,
					}} source={item.image} />
					<Text style={{
						...styles.text,
						marginTop: 50,
						marginHorizontal: 20,
						fontSize: 25,
						fontWeight: 'bold'
					}}>
						{item.title}
					</Text>
					<Text style={{
						...styles.text,
						marginTop: 20,
						marginHorizontal: 20
					}}>
						{item.text}
					</Text>
				</View>
			</View>
		);
	}
	_onDone = () => {
		// User finished the introduction. Show real app through
		// navigation or simply by controlling state
		this.setState({ showRealApp: true });
	}

	render(){
		if(this.state.showRealApp){
			// Route Main Application
			return(
				<RouteNavigation />
				// <NativeRouter>
				// 	<View style={{
				// 		flex: 1,
				// 		backgroundColor: '#000',
				// 		alignItems: 'center' ,
				// 		justifyContent: 'center'
				// 	}}>
				// 		<Switch>
				// 			<Route exact path="/">
				// 				<Redirect to="/login" />
				// 			</Route>

				// 			<Route exact path="/login" component={Login} />

				// 			<Route exact path="/home" component={Home} />
				// 			<Route exact path="/product" component={Product} />

				// 		</Switch>
				// 	</View>
				// </NativeRouter>
			)
		}else{
			return (
				<View style={{
					width: '100%',
					height: '100%',
					backgroundColor: '#E5222A',
				}}>
					<ImageBackground
					resizeMode='cover'
					style={{
						width: '100%',
						height: '100%',
						flex: 1
					}}
					source={Background}
					>
					<AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone} />
					</ImageBackground>
				</View>
			)
		}
	}
}