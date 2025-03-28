export default function Tag({input}){
    
    if(input != ''){
        return(
            <div className="max-w-[6rem] rounded-sm bg-red-200 border-2 border-red-500">
                <p className='opacity-100 text-red-500'>{input}</p>
            </div>
        );
    }
    else return null;
}