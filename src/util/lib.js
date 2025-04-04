export async function getRandomChars(char_count){
    try{
        let i = 1;
        // const char_count = 2;
        let chars_arr = [];

        while(i < char_count + 1){

            let valid_ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 42, 43, 44, 63, 64, 65, 66, 67, 68];

            let random_id = valid_ids[Math.floor(Math.random() * valid_ids.length)];

            valid_ids.splice(valid_ids.indexOf(random_id),1);

            const response = await fetch(`https://dragonball-api.com/api/characters/${random_id}`);
            let data = await response.json()

            let character = {
                id : random_id,
                name : data.name,
                ki: data.ki,
                image : data.image,
                forms: data.transformations?.length ? data.transformations.map(form => ({
                    form_name : form.name,
                    form_ki : form.ki,
                    form_image : form.image
                })) : "none"
            }

            chars_arr.push(character);

            i++;
        }

        console.log("character count is " + chars_arr.length);
        
        console.log(chars_arr);
        

    }

    catch(error) {
        console.error("Problem fetching char : " , error);
    }
}

getRandomChars(2)