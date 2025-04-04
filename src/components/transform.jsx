import { useState, useEffect } from "react";

function MyButton({selectedName}){
    const [char, setChar] = useState({
        name: selectedName === 'Character' ? 'Vegeta' : selectedName,
        form: "Ultra Ego",
        race: "Saiyan"
    });

    const[form, setForm] = useState(false);
    const[talkText, setChat] = useState(`Hello, my name is ${char.name}`);

    useEffect(() => {
        setChar(prev => ({
            ...prev,
            name: selectedName || "Vegeta"
        }));
        setChat(`Hello, my name is ${selectedName || "Vegeta"}`);
    }, [selectedName]);

    const transform = () => {
        setForm(!form);
        
        setChat(form ? `I ${char.name} have went back to base` : `I HAVE GONE TO ${char.form}`)
    }

    return(
        <>
            <div className="flex-col items-center justify-center text-center w-sm">
                <button className={`${form ? 'bg-[rgb(61,19,61)] text-[rgb(198,108,198)] border-2 border-[rgb(198,108,198)]' : 'bg-[rgb(78,78,229)] text-white border-2 border-yellow-200'} rounded-full p-1`}onClick={transform}>i am buiton</button>
                <p className="text-white ">{talkText}</p>
                <p className="text-white">click buiton to transform {char.name} into {char.form} form</p>
            </div>
        </>
    );
}

export default MyButton