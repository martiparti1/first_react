import { useState } from "react";

export default function CharacterCard({ character }) {

    const [currentForm, setCurrentForm] = useState({
        name : character?.name,
        ki: character?.ki,
        image: character?.image
    });

    const handleTransform = (e) => {
        let selectedForm = e.target.value;

        if(selectedForm ==="base") {
            setCurrentForm({
                name : character.name,
                ki: character.ki,
                image: character.image
            })
        }

        else{

            let indexOfForm = character.forms.findIndex(form => form.form_name == selectedForm);
            let form_arr_result = character.forms[indexOfForm]
            setCurrentForm({
                name: form_arr_result.form_name ,
                ki: form_arr_result.form_ki ,
                image: form_arr_result.form_image 
            })
        }
    }

    return (
        <div className="min-w-[45vw] max-w-[45vw] min-h-[50vh]  md:min-w-[20vw] md:max-w-[20vw] md:min-h-[70vh] bg-white rounded-[3%] flex flex-col justify-center">

            {currentForm.image && (
                <img src={currentForm.image} alt="char icon" className="w-[30vw] h-[40vh] max-h-[40vh] object-contain self-center" />
            )}

            <p className="ml-[1vw] font-bold text-orange-500 font-outline-gray-mid text-[40px] break-words">{currentForm.name}</p>

            <p className="break-words">{currentForm.ki}</p>
        

            {character?.forms != "none" && (
                <select onChange={handleTransform}>

                    <option value="base">
                        Base
                    </option>

                    {character?.forms.map((form) => (
                        <option key={form.form_name} value={form.form_name}> {form.form_name}</option>
                    ))}
                </select>
            )}

        </div>

    );
}