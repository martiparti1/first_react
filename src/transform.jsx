import { useState } from "react";

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

                <button className={`${form ? 'bg-[rgb(61,19,61)] text-[rgb(198,108,198)] border-2 border-[rgb(198,108,198)]' : 'bg-[rgb(78,78,229)] text-white border-2 border-yellow-200'} rounded-full p-1`}onClick={transform}>i am buiton</button>
                <p className="talk">{talkText}</p>
                <p>click buiton to transform {char.name} into {char.form} form</p>
            </div>
        </>
    );
}

export default MyButton