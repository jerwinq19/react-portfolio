import "../style/PanelBar.css"
import myPfp from '../img/me_pfp.jpeg'
const AboutMe = ({exit}) => {
    return (
        <div className="Cmd AboutMe rounded shadow-lg">
            <span className="bg-slate-600 p-2 text-white font-semibold flex justify-between">
                <h1>About me</h1>
                <button onClick={exit} className="text-white">[x]</button>
            </span>

            <div className="flex flex-col overflow-auto p-5 gap-8 h-full">
                {/* Header */}
                <div className="AboutMeHead">
                    <img src={myPfp ? myPfp : "https://placehold.co/100x100"} alt="sample picture of me" className="rounded-full max-w-40 h-auto" />
                    <span className="flex flex-col justify-center">
                        <h1 className="text-2xl font-bold text-blue-500">Jerwin Nico H. Quijano</h1>
                        <p>2nd year BSIT Student</p>
                    </span>
                </div>

                {/* About Section */}
                <div className="flex flex-col gap-5">
                    <h2 className="text-xl font-semibold">Hi! Ako si Jerwin</h2>
                    <ul className="list-disc list-inside">
                        <li>Gumagawa ng website</li>
                        <li>Mahilig maglaro</li>
                        <li>Mahilig mag-bike</li>
                        <li>Manira ng tao</li>
                    </ul>
                    <p>
                        Interested in working with me? Contact me at 
                        <a href="mailto:hi@samplegmail.com" className="text-blue-500 ml-1 underline">hi@samplegmail.com</a>
                    </p>
                </div>

                {/* Education Section */}
                <div className="flex flex-col gap-3">
                    <h2 className="text-xl font-semibold">EDUCATION</h2>
                    <div className="pl-3 border-l-4 border-gray-400">
                        <p>Bachelor of Science in Information Technology</p>
                        <small className="text-gray-600">Dalubhasaan ng Lungsod ng Lucena</small>
                    </div>
                </div>

                {/* Other interest */}
                <div className="flex flex-col gap-3">
                    <h2 className="text-xl font-semibold">OTHER INTEREST</h2>
                    <ul className="list-disc list-inside">
                        <li>Play League of Legends</li>
                        <li>Music!</li>
                        <li>Computers</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default AboutMe;
