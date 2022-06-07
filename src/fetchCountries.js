import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {infoHandler} from './index';
export { fetchCountries };

 function fetchCountries(name) {
   if(name !== "") {
    // fetch(`https://restcountries.com/v2/name/${name}`)
    // fetch(`https://restcountries.com/v2/{service}?fields=${field},${field},${field}`)
    fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags.svg,languages`)
        .then(response => {
            return response.json();
        })
        .then(object => {
            console.log(object);
            Notify.success('✅ Fulfilled');

            object.map(el => infoHandler(el))
           
        })
       .catch(error => console.log(error))
    }
//         // .then((parsedObject) => {
//         //     Notify.success(`✅ Fulfilled promise ${parsedObject} `);
//         //     infoHandler(name);
//         // })
//         .catch(() => {
//             console.log("Not found any");
//             Notify.failure(`❌ Rejected promise `);
//         })
//    }; 
        // }
    
};


