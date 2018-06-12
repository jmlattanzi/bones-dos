import React, {Component} from 'react';
import Typist from 'react-typist';
import Albums from './Albums';
import '../App.css';
import { Screen } from '../styles/style'

class Container extends Component {
    state = {
        albums: [
            {
                title: 'EthelWulf & Bones - Lame',
                released: '1-1-1992'
            },
            {
                title: 'CREEP',
                released: '1-1-1992'
            },
            {
                title: 'SCUMBAG',
                released: '1-1-1992'
            },
            {
                title: 'CRACKER',
                released: '1-1-1992'
            },
            {
                title: 'PaidProgramming',
                released: '1-1-1992'
            },
            {
                title: 'Xavier Wulf & Bones - Caves',
                released: '1-1-1992'
            },
            {
                title: 'DeadBoy',
                released: '1-1-1992'
            },
            {
                title: 'Chris Travis & Bones - SeaBeds',
                released: '1-1-1992'
            },
            {
                title: 'TeenWitch',
                released: '1-1-1992'
            },
            {
                title: 'Garbage',
                released: '1-1-1992'
            },
            {
                title: 'Skinny',
                released: '1-1-1992'
            },
            {
                title: 'Rotten',
                released: '1-1-1992'
            },
            {
                title: 'SoThereWeStood',
                released: '1-1-1992'
            },
            {
                title: 'Bones & Dylan Ross - SongsTahtRemindYouOfHome',
                released: '1-1-1992'
            },
            {
                title: 'Powder',
                released: '1-1-1992'
            },
            {
                title: 'YouShouldHaveSeenYourFace',
                released: '1-1-1992'
            },
            {
                title: 'Bones & Drip-133 - HateToBreakItToYou',
                released: '1-1-1992'
            },
            {
                title: 'Banshee',
                released: '1-1-1992'
            },
            {
                title: 'Frayed',
                released: '1-1-1992'
            },
            {
                title: 'HermitOfEastGrandRiver',
                released: '1-1-1992'
            },
            {
                title: 'drew the architect, Bones & Cat Soup - Slan',
                released: '1-1-1992'
            },
            {
                title: 'USELESS',
                released: '1-1-1992'
            },
            {
                title: 'PaidProgramming2',
                released: '1-1-1992'
            },
            {
                title: 'SoftwareUpdate1.0',
                released: '1-1-1992'
            },
            {
                title: 'DISGRACE',
                released: '1-1-1992'
            },
            {
                title: 'UNRENDERED',
                released: '1-1-1992'
            },
            {
                title: 'NoRedeemingQualities',
                released: '1-1-1992'
            },
            {
                title: 'FAILURE',
                released: '1-1-1992'
            },
            {
                title: 'NetworkUnknown',
                released: '1-1-1992'
            },
            {
                title: 'CARCASS',
                released: '1-1-1992'
            }
        ],
        showAlbums: false,
        showIntro: 'visible'
    };

    typingDone = () => {
        this.setState({
            ...this.state,
            showIntro: 'hidden'
        })
    }

    displayWelcome = () => {
        this.setState({
            ...this.state,
            showAlbums: true,
        })
    }

    render() {
        return(
            <Screen>
                <div className={this.state.showIntro}>
                    <Typist className="" avgTypingDelay={10} cursor={{show: false}} onTypingDone={this.typingDone}>
                        <div>
                            <div>INITIALIZING CHECK.............[SUCCESS]</div>
                            <div>DISPLAY DRIVERS................[OK]</div>
                            <div>INPUT DEVICE...................[OK]</div>
                            <div>LOADING SESH OS v5.6...........[SUCCESS]</div>
                            <div>INITIALIZE X SERVER..................[FAIL]</div>
                            <div>LOADING GRAVES................[SUCCESS]</div>
                            <div>DATABSE CHECK..................[CONNECTED]</div>
                            <div>LOGIN..........</div>
                            <div>USER: DOROTHY</div>
                            <div>PASS: *************</div>
                            <div>######################################################</div>
                        </div>
                    </Typist>
                </div>
                {this.state.showIntro === 'hidden' ? 
                    (
                        <div>
                            <Typist onTypingDone={this.displayWelcome} cursor={{show: false}} avgTypingDelay={25}>
                                <div style={{textAlign: 'center'}}>
                                    <h3>WELCOME BACK, BONES</h3>
                                </div>
                            </Typist>
                            {this.state.showAlbums ? <Albums albums={this.state.albums}/> : '' }
                        </div>
                    ) : ''}
            </Screen>
        );
    }   
}

export default Container;