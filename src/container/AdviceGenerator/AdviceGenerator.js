import "./AdviceGenerator.css";
import diviserImgDesktop from "../../images/pattern-divider-desktop.svg";
import diviserImgMobile from "../../images/pattern-divider-mobile.svg";
import dice from "../../images/icon-dice.svg";
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
                <img src={dice} alt="dice"/>
            </div>
        </section>
    )
}


export default AdviceGenerator
