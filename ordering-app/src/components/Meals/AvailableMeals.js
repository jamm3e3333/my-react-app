import { useEffect, useState } from 'react';

import classes from './AvailableMeals.module.css';
import MealsItem from './MealsItem';
import Card from '../UI/Card';

const AvailableMeals = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [meals, setMeals] = useState([]);


  useEffect(() => {
    const fetchMeal = async() => {
      try{
        setIsError(false);
        setIsLoading(true);
        const response = await fetch('https://next-js-734e8-default-rtdb.firebaseio.com/meals.json');
        if(response.status !== 200) {
          throw new Error();
        }
        const data = await response.json();
        if(!data) {
          throw new Error();
        }
        const loadedData = [];
        for(const key in data) {
          loadedData.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price
          })
        }
        setMeals(loadedData);
        setIsLoading(false);
      }
      catch(e) {
        console.log(e);
        setIsError(true);
      }
    }
    fetchMeal();
  }, [])

  if(isError) {
    return (
      <section>
        <p className={classes['meals__error']}>Loading...</p>
      </section>
    )
  }

  if(isLoading) {
    return (
      <section>
        <p className={classes['meals__loading']}>Error while fetching the data.</p>
      </section>
    )
  }
    const mealsList = meals.map(meal => {
        return (
          <MealsItem 
              id={meal.id}
              key={meal.id} 
              name={meal.name}
              description={meal.description}
              price={meal.price}    
          />
        )
    });

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;