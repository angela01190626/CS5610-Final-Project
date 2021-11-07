import "./Label.css";
const Label = ({text, customClass}) => {
    return(
        <span className={`standard-label ${customClass}`}>
            {text}
        </span>
    )
};
export default Label;