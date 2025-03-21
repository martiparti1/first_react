import dog from './assets/HAHA DOG.jpeg'

export default function Card(){
    return(
        <div className="card">
            <img className="card-image" src={dog} alt="" />
            <h2 className='card-title'>Marti Parti</h2>
            <p className='card-text'>hell yeah simulator</p>
        </div>
    );
}