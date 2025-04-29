import "../style/PanelBar.css"


const PanelBar = ({children}) => {
    return(
        <div className="PanelBar">
            {children}
        </div>
    );
}

export default PanelBar;