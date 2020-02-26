import React, {useState} from 'react';
import categories from "./../data/categories.json";

const CategoriesPage = ({ categories, selectedCategory, setSelectedCategory }) => {
    console.log("zerzer")
    return (
        <div className={"container"}>
            {!selectedCategory &&
                <>
                    <div className={"page-title"}>
                        Thèmes
                    </div>
                    <div className={"page-subtitle"}>Tes objectifs en cours</div>
                    <div className="categories-wrapper">
                        {categories.map((category, index) => (
                            <div onClick={() => setSelectedCategory(category)} className={"category-title"} key={index}>
                                <span>{category.title}</span><br/>
                                <span>{category.progression}</span>
                            </div>
                        ))}
                    </div>
                </>
            }
            {selectedCategory &&
            <>
                <div onClick={() => setSelectedCategory(null)}>picto retour</div>
                <div className={""}>
                    <div>image du thème</div>
                    <div>{selectedCategory.title}</div>
                </div>
                <hr/>
                <div>5 bonnes pratiques</div>
                {selectedCategory.goals.map((goal, index) => (
                    <div className={""} key={index}>
                        <span>photo du goal</span>
                        <span>{goal.title}</span>
                        <div>{goal.description}</div>
                        <div>
                            <span>2 amis l'ont fait</span>
                            <div>Voir plus</div>
                        </div>
                    </div>
                ))}
            </>
            }
        </div>
    )
};
export default CategoriesPage;