import Image from "next/Image"

import styles from "../styles/Article.module.css"
import heartImg from '../public/Heart-empty.png'

interface ButtonProp{
    buttonProp ?: any
}

const ArticleButton = (props: ButtonProp) => {
    //console.log(props.ButtonProp)
    return (<button className = {styles["likes-button"]} type = "button"><Image src = {heartImg} alt = "heart-icon-not-filled"/></button>)
}

export default ArticleButton;