import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin, faMedium } from "@fortawesome/free-brands-svg-icons"

const styles = {
    root: {
        display: 'flex',
        position: 'fixed',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundColor: 'white',
    },
    text: {
        color: '#a9a9a9',
        float: 'left',
        marginRight: 15,
        fontSize: 22,
    },
    container: {
        width: 400,
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    },
    name: {
        color: '#000',
        fontSize: 60,
        fontWeight: 'bold',
    },
    bottomText: {
        fontSize: 16,
        color: '#4361ee',
    },
    hline: {
        backgroundColor: '#4361ee',
        height: 5,
        borderWidth:0,
    },
    iconStyle:{
        color: '#000',
        textAlign: 'center',
        fontSize: 30,
        marginRight: 20,  
        padding: 15,
        border: '1px solid #4361ee',
        borderRadius: '100%',
    }
};

function Home() {
    return (
        <div style={styles.root}>
            <div style={styles.container}>
                <div>
                    <div>
                        <tag style={styles.text}>HI  I'M</tag>
                    </div>
                    <div style={{marginLeft: 10}}>
                        <hr style={styles.hline}/>
                    </div>
                </div>
                <div style={{textAlign: 'right', marginTop: 10  }}>
                    <tag style={styles.name}>RITIK JAIN</tag><br/><br/>
                    <tag style={styles.bottomText}>I am glad you stumbled upon my world</tag>
                </div>
                <div style={{textAlign: 'center', marginTop: 40}}>
                <a href="https://github.com/rits1272"><FontAwesomeIcon  icon={faGithub} style={styles.iconStyle}/></a>
                <a href="https://twitter.com/Rits1272"><FontAwesomeIcon  icon={faTwitter} style={styles.iconStyle}/></a>
                <a href="https://www.linkedin.com/in/rits1272/"><FontAwesomeIcon  icon={faLinkedin} style={styles.iconStyle}/></a>
                <a href="https://medium.com/@ritikjain1272"><FontAwesomeIcon  icon={faMedium} style={styles.iconStyle}/></a>
                </div>
            </div>
        </div>
    );
}

export default Home;