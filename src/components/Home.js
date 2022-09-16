export default function Home() {
    return(
        <div className='flex flex-row'>
            <div className='basis-8/12'>
                <h1 className='text-5xl'>Patrick Kozlowski</h1>
                <h2 className='text-4xl'>Builds cool stuff with code.</h2>
                <p>I'm a Full Stack Software Engineer based in Indianapolis, IN, who enjoys solving complex problems and bringing ideas to life through code. I appreciate you taking time to visit my profile and getting to know more about me. If you like my work, please reach out so we can connect!</p>
            </div>
            <div className='basis-4/12'>
                <img src='https://res.cloudinary.com/detcvmtip/image/upload/v1663161879/Photo_-_Patrick_Kozlowski_dzmztz.png' alt='Patrick Kozlowski' className='h-1/2'/>
            </div>
        </div>
    )
}