import React from 'react'
import '../style/App.css'
import '../style/header.css'
import '../style/gift.css'
import Header from './header'
import SnowParticles from './snow'
import Gift from './gift'
import $ from 'jquery';

function App() {
    const [display, setDisplay] = React.useState(false);
    const [reward, setReward] = React.useState("");

    const handleApp = (event) => {
        if (event.data.type === 'christmasbox') {
            setDisplay(true)
            setReward(event.data.reward)
        }
    }

    React.useEffect(() => {
        window.addEventListener('message', handleApp)

        return () => {
            window.removeEventListener('message', handleApp)
        }
    }, [])

    const onGiftOpen = () => {
        setDisplay(false)

        $.post(`https://${GetParentResourceName()}/claim`)
    }

    return (
        <>
            <div className='container' style={{ display: display ? "flex" : "none" }}>
                <div className='background'></div>
                <main className='box'>
                    <div className="box-background"></div>

                    <SnowParticles />
                    <Header />
                    <Gift reward={reward} onGiftOpen={onGiftOpen}/>
               
                </main>

            </div>
        </>
    )
}

export default App
