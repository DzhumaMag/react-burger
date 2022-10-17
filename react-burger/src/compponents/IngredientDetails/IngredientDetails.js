import IngredientDetailsStyles from './IngredientDetails.module.css';
import { ingredientsPropTypes } from '../../utils/prop-types';

function IngredientDetails({data}) {
    return(
        <section className={IngredientDetailsStyles.popup}>
            <h3 className={`${IngredientDetailsStyles.title} text text_type_main-large`}>Детали ингредиента</h3>
            <div className={IngredientDetailsStyles.info}>
                <img 
                className={IngredientDetailsStyles.image}
                src={data.image_large}
                alt={data.name}
                />
                <p className={`${IngredientDetailsStyles.text} text text_type_main-medium mb-8`}>{data.name}</p>
                <div className={`${IngredientDetailsStyles.container} text text_type_main-default text_color_inactive `}> 
                    <div className={IngredientDetailsStyles.group}>
                    <p className={IngredientDetailsStyles.name}>Калории,ккал</p>
                    <span className={`${IngredientDetailsStyles.calories} text text_type_digits-default`}>{data.calories}</span>
                    </div>
                    <div className={IngredientDetailsStyles.group}>
                    <p className={IngredientDetailsStyles.name}>Белки, г</p>
                    <span className={`${IngredientDetailsStyles.proteins} text text_type_digits-default`}>{data.proteins}</span>
                    </div>
                    <div className={IngredientDetailsStyles.group}>
                    <p className={IngredientDetailsStyles.name}>Жиры, г</p>
                    <span className={`${IngredientDetailsStyles.fat} text text_type_digits-default`}>{data.fat}</span>
                    </div>
                    <div className={IngredientDetailsStyles.group}>
                    <p className={IngredientDetailsStyles.name}>Углеводы, г</p>
                    <span className={`${IngredientDetailsStyles.carbohydrates} text text_type_digits-default`}>{data.carbohydrates}</span>
                    </div>
                </div>
            </div>

        </section>
    )
}

IngredientDetails.propTypes = {
    ingredients: ingredientsPropTypes.isRequired,
};

export default IngredientDetails;