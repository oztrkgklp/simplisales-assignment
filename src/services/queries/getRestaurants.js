export default (delivery, index, limit) => `
  restaurants(delivery: ${delivery}, index: ${index}, limit: ${limit}) {
      avgScore
      deal {
        delivery
        id
        int
        min_spend_amount
        reward_percent
        time_frame_id
      }
      delivery
      deliveryFee {
        amount
        freeDeliveryMoreThanAmount
        freeDeliveryMoreThanEnabled
      }
      deliveryReOpenDate
      deliveryType
      distance
      freebie {
        id
        itemCount
        minSpendAmount
        tagName
      }
      inDistance
      isNew
      minOrderAmount
      minOrderEnabled
      name
      open
      picture {
        alt
        bundle
        height
        id
        title
        url
        width
      }
      reOpenDate
      restaurantAddressPostalCode
      restaurantAddressSlugAdminWard
      restaurantAddressSlugCityName
      restaurantCollectionWorkingTimeStatus
      restaurantDeliveryDriverStatus
      restaurantDeliveryStatus
      restaurantDeliveryWorkingTimeStatus
      restaurantItemId
      restaurantNextVacationEndDate
      restaurantNextVacationStartDate
      restaurantNextVacationStatus
      restaurantOpenStatus
      restaurantStatusCode
      restaurantStatusParams
      restaurantWorkingHourOpenTime
      slugName
      types {
        iconId
        id
        name
      }
      uid
    } 
  }
`;
