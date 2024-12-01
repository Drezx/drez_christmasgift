import Snowfall from 'react-snowfall'

function SnowParticles () {
    return (
        <div style={{ height: "80%", width: "100%", position: 'absolute', opacity: '0.6' }}>
            <Snowfall speed={[0.8, 1.8]} />
        </div>
    )
}
 
export default SnowParticles;