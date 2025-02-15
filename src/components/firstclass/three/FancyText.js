export default function FancyText({title, text}){
    let classN = (title)?'fancyTextTitle':'fancyTextQuote'

    return <><h2 className={classN}>{text}</h2></>
}