import { useState } from "react";
import './transform.css';


function MyButton(){
    const char ={
        name: "Vegeta",
        form: "Ultra Ego",
        race: "Saiyan"
    }

    const[form, setForm] = useState(false);
    const[talkText, setChat] = useState(`Hello, my name is ${char.name}`);

    const transform = () => {
        setForm(!form);
        
        setChat(form ? `I ${char.name} have went back to base` : `I HAVE GONE TO ${char.form}`)
    }
    return(
        <>
            <div className="transform_body">

                <button className={form ? 'ultra_ego' : 'base'}onClick={transform}>i am buiton</button>
                <p className="talk">{talkText}</p>
                <p>click buiton to transform {char.name} into {char.form} form</p>
            </div>
        </>
    );
}

export default MyButton