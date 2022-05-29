import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Products in DB --> */

let productsInDB = {
    title: 'Total de productos',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-boxes'
}

/* <!-- Total users --> */

let totalUsers = {
    title:' Total de usuarios', 
    color:'success', 
    cuantity: '79',
    icon:'fa-user-check'
}

/* <!-- Total Categories --> */

let totalCategories = {
    title:'Total de categorías' ,
    color:'warning',
    cuantity:'49',
    
    icon:'fa-award'
}

let cartProps = [productsInDB, totalUsers, totalCategories];

function ContentRowInfo(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowInfo;