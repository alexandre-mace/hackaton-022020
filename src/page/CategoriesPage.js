import React, {useState} from 'react';
import categories from "./../data/categories.json";

const CategoriesPage = () => {
    console.log("zerzer")
    return (
        <div className={"container"}>
            <div>
                Thèmes
            </div>
            <div className="categories-wrapper">
                {categories.map((category, index) => (
                    <div key={index}>
                        {category.title}
                    </div>
                ))}
            </div>
        </div>
    )
};
export default CategoriesPage;