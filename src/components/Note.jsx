import React from 'react';
import Card from './Card';

function Note() {
    return (
        <>
            <div className='note'>
                <Card name="Filistin" 
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/250px-Flag_of_Palestine.svg.png" 
                city="Kudüs" 
                position="Suriye ile Mısır ve Akdeniz ile Şeria nehri arasında kalan topraklardır" />
            </div>
            <div className='note'>
                <Card name="Doğu Türkistan" 
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Kokbayraq_flag.svg/125px-Kokbayraq_flag.svg.png" 
                city="Urumçi" 
                position="Doğuda Moğolistan, kuzeyde Rusya, kuzeybatıda Kazakistan ve batıda Kırgızistan, Tacikistan, Afganistan, Pakistan olan topraklar" />
            </div>
        </>
    )
}

export default Note;