

const Application = ({image, name, onclick}) => {
    return(
        <button className="flex flex-col items-center text-center p-2 ml-3 rounded" onClick={onclick}>
            <img src={image} alt={name} className="w-12 h-12"/>
            <p className="text-sm font-medium text-white">{name}</p>
        </button>
    );
}

export default Application;