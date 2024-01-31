import '../App.css'

function Hero() {
    return (
        <>
            <video autoPlay loop muted id="heroVideo">
                <source src="../src/assets/hero.mp4" type="video/mp4" />
            </video>
            <div className="heroContent">
                <div>
                    <h1 >We are Comet Robotics,<br /> the premiere robotics club at <br />UT Dallas.</h1>
                    <a>scroll down to learn more 👇</a>
                </div>
            </div>
        </>
    )
}

export default Hero
