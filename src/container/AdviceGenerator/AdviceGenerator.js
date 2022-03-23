import "./AdviceGenerator.css";
import diviserImgDesktop from "../../images/pattern-divider-desktop.svg";
import diviserImgMobile from "../../images/pattern-divider-mobile.svg";
import axios from "axios";
import {useEffect, useState} from "react";

function AdviceGenerator(){


    const [advice, setAdvice] = useState("");
    const [numberAdvice, setNumberAdvice] = useState("")

    const adviceAPI = async () => {
        let arrayAdvice = [];

            const data = await axios.get("https://api.adviceslip.com/advice")

            arrayAdvice = [data.data.slip]
            setAdvice(arrayAdvice[0].advice)
            setNumberAdvice(arrayAdvice[0].id)
    }

    useEffect(() => {
        adviceAPI();
    }, [])


    return(
        <section className="container">
            <span className="advice-number">ADVICE # {numberAdvice}</span>
            <h1 className="quote">"{advice}"</h1>
            <div className="diviser">
                <img className="img-desk" src={diviserImgDesktop} alt="diviser"/>
                <img className="img-mobile" src={diviserImgMobile} alt="mobile"/>
            </div>
            <div className="dice" onClick={adviceAPI}>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
            </div>
        </section>
    )
}


export default AdviceGenerator
