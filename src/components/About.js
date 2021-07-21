function About ({ 
    img = "https://via.placeholder.com/215" ,
    alt = "blog logo" ,
    text 
}) {
    return(

        <aside>

            <img src = {img} alt = {alt}/>

            <p>{text}</p>

        </aside>

    )
}

export default About;