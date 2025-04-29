import "../style/PanelBar.css"
import hamster from '../img/reading.gif'

const ContactMe = ({exit}) => {
    return (
        <div className="Cmd ContactMe rounded">
            <span className="bg-slate-600 p-2 text-white font-semibold flex justify-between">
                <h1>Contact</h1>
                <button onClick={exit} className="text-white">[x]</button>
            </span>

            <div className="ApplicationCont">
                <div className="Heading">
                    <h1 className="text-center text-xl font-semibold">may mail!</h1>
                    <p className="text-sm font-medium">this is the easiest way to contact me is by email!, so pag may inquires ka pls email me.</p>
                </div>
                
                <div>
                    <img src={hamster} alt="hamster reading" />
                </div>

                <div className="flex flex-col gap-2">
                    <p>
                        email me at: <a href="" className="text-blue-500">hi@samplegmail.com</a>
                    </p>
                    <span className="flex justify-around">
                        <a href="" className="bg-green-500 text-white px-2 py-1 rounded">Facebook</a>
                        <a href="" className="bg-green-500 text-white px-2 py-1 rounded">GitHub</a>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;
