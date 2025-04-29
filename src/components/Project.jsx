import "../style/PanelBar.css";

const ButtonWrapper = ({name}) => {
    return (
        <div className="bg-green-500 text-white shadow-md rounded text-sm px-2 py-1">
            {name}
        </div>
    );
}

const DevelopmentCard = ({children}) => {
    return (
        <div className="flex gap-5 flex-col sm:flex-row">
            {children}
        </div>
    );
};

const Project = ({exit}) => {
    return (
        <div className="Cmd MyProject rounded">
            <span className="bg-slate-600 p-2 text-white font-semibold flex justify-between">
                <h1>Projects</h1>
                <button onClick={exit} className="text-white">[x]</button>
            </span>

            <div className="ApplicationCont p-4">
                {/* tools and development */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* tools */}
                    <div>
                        <h1 className="text-xl">Tools</h1>
                        <div className="flex flex-wrap gap-4">
                            <ButtonWrapper name={'Figma'} />
                            <ButtonWrapper name={'GitHub'} />
                            <ButtonWrapper name={'VS Code'} />
                            <ButtonWrapper name={'tailwindCSS'} />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl">Languages</h1>
                        <div className="flex flex-wrap gap-4">
                            <ButtonWrapper name={'HTML'} />
                            <ButtonWrapper name={'CSS'} />
                            <ButtonWrapper name={'JavaScript'} />
                            <ButtonWrapper name={'ReactJS'} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-10 mt-6">
                    <h1 className="text-2xl font-semibold">Development</h1>
                    <DevelopmentCard>
                        <img src="https://placehold.co/250x250" alt="place holder" className="max-w-full sm:max-w-[250px]" />
                        <div className="flex flex-col gap-5 items-center">
                            <h1 className="text-xl text-blue-500 font-semibold">Cafe Luistro Website</h1>
                            <span className="flex gap-4 flex-col">
                                <p>This is a static website built as part of our PELEC201 project, showcasing my early exploration into web development.</p>
                                <p>It holds a special place in my journey, as it was the first project where I truly fell in love with creating websites and bringing ideas to life through code.</p>
                            </span>
                            <a href="https://jerwinq19.github.io/PELEC-201-Lustrio/" className="bg-blue-500 text-white rounded-md px-2 py-1">Visit the website here!</a>
                        </div>
                    </DevelopmentCard>

                    <DevelopmentCard>
                        <img src="https://placehold.co/250x250" alt="place holder" className="max-w-full sm:max-w-[250px]" />
                        <div className="flex flex-col gap-5 items-center">
                            <h1 className="text-xl text-blue-500 font-semibold">To-do List</h1>
                            <span className="flex gap-4 flex-col">
                                <p>This is a simple React To-do list application I created for the web development team.</p>
                                <p>It features a clean UI for adding, editing, and removing tasks, offering an intuitive experience for team members to stay organized.</p>
                            </span>
                            <a href="https://jerwinq19.github.io/itp-react-todo-list/" className="bg-blue-500 text-white rounded-md px-2 py-1">Visit the website here!</a>
                        </div>
                    </DevelopmentCard>

                    <DevelopmentCard>
                        <img src="https://placehold.co/250x250" alt="place holder" className="max-w-full sm:max-w-[250px]" />
                        <div className="flex flex-col gap-5 items-center">
                            <h1 className="text-xl text-blue-500 font-semibold">Note App</h1>
                            <span className="flex gap-4 flex-col">
                                <p>This is a simple Notes app with local storage for data persistence.</p>
                            </span>
                            <a href="https://jerwinq19.github.io/itp-react-todo-list/" className="bg-blue-500 text-white rounded-md px-2 py-1">Visit the website here!</a>
                        </div>
                    </DevelopmentCard>
                </div>
            </div>
        </div>
    );
}

export default Project;
