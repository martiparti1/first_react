export async function getRandomChars(char_count){
    try{
        let i = 1;
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

        console.log("FETCHED TWO CHARS")
        return chars_arr;
    }

    catch(error) {
        console.error("Problem fetching char : " , error);
    }
}



export function parseKi(ki_string){
    let number = parseInt(ki_string.split(" ")[0].split('.').join(''));
    let word = ki_string.split(" ")[1];

    if(typeof word == 'undefined') return number;

    const powerUnits = {
        'billion': 1e9,
        'trillion': 1e12,
        'quadrillion': 1e15,
        'quintillion': 1e18,
        'sextillion': 1e21,
        'septillion': 1e24,
        'octillion': 1e27,
        'nonillion': 1e30,
        'decillion': 1e33,
        'undecillion': 1e36,
        'duodecillion': 1e39,
        'tredecillion': 1e42,
        'quattuordecillion': 1e45,
        'quindecillion': 1e48,
        'sexdecillion': 1e51,
        'septendecillion': 1e54,
        'octodecillion': 1e57,
        'novemdecillion': 1e60,
        'vigintillion': 1e63,
        'googol': 1e100,
        'centillion': 1e303,
        'googolplex': Number.MAX_VALUE
    }

    return number * powerUnits[word];
    
}