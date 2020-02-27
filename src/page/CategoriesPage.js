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
                            <div onClick={() => setSelectedCategory(category)} key={index}>
                                <span className={"category-title"}>{category.title}</span><br/>
                                <div className={"goal-progression"}><span style={{ width: `${category.progression}%`}} className={"goal-progression-bar"}></span></div>
                            </div>
                        ))}
                    </div>
                </>
            }
            {selectedCategory &&
            <>
                <div onClick={() => setSelectedCategory(null)}>picto retour</div>
                <div className={"d-flex mt-3"}>
                    <div>image du thème</div>
                    <div>{selectedCategory.title}</div>
                </div>
                <hr/>
                <div className={"goals-title"}>5 bonnes pratiques</div>
                {selectedCategory.goals.map((goal, index) => (
                    <div className={"goal-card"} key={index}>
                        <div className={"d-flex"}>
                            <span>photo du goal</span>
                            <span>{goal.title}</span>
                        </div>
                        <div>{goal.description}</div>
                        <div className={"d-flex justify-content-between"}>
                            <div className={"d-flex"}>
                                <span>photo</span>
                                <span>2 amis l'ont fait</span>
                            </div>
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