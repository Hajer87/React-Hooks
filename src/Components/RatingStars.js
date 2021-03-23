import React from 'react'
import StarRatingComponent from 'react-star-rating-component';


function StarRating({rating}) {
    return (
        <div >
            <StarRatingComponent 
          name="rate2" 
          editing={false}
          renderStarIcon={() => <span style={{ fontSize: 'x-Large'}} >★</span>}
          starCount={5}
          value={rating}
          isHalf={true}
        />
            
        </div>
    )
}

export default StarRating;