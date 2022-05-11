export default (delivery) => `
query request {
    restaurant(delivery: ${delivery}) {
      address {
        addressLine1
        addressLine2
        city {
          id
          name
          slugName
          timezone
        }
        country {
          id
          isoCode
          name
          slugName
        }
        flatNumber
        geoEnabled
        id
        lat
        lon
        postalCode
        slugAdminWard
      }
      avgScore
      contactMobileNumber
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
      info
      instagramUsername
      isClosingSoon
      isFavorite
      isNew
      items {
        description
        disabledUntil
        enabled
        freebie {
          id
          minSpendAmount
        }
        id
        menus {
          id
          index
          restaurantMenuId
        }
        name
        newAmount
        noteAble
        oldAmount
        options {
          enabled
          id
          minRequired
          multipleSelection
          name
          required
          values {
            amount
            amountEffectType
            description
            disabledUntil
            enabled
            id
            name
            quantityAble
            selected
          }
        }
        pictures {
          alt
          bundle
          height
          id
          title
          url
          width
        }
        preparationTime
        quantityAble
        types {
          id
          name
        }
      }
      menus {
        description
        id
        inRestaurantTimeFrameMap
        index
        name
      }
      minOrderAmount
      minOrderEnabled
      name
      nextOpeningDate
      open
      openingHours {
        fri {
          end_time
          open
          start_time
        }
        mon {
          end_time
          open
          start_time
        }
        sat {
          end_time
          open
          start_time
        }
        sun {
          end_time
          open
          start_time
        }
        thu {
          end_time
          open
          start_time
        }
        tue {
          end_time
          open
          start_time
        }
        wed {
          end_time
          open
          start_time
        }
      }
      pictures {
        alt
        bundle
        height
        id
        title
        url
        width
      }
      reOpenDate
      restaurantCollectionWorkingTimeStatus
      restaurantDeliveryDriverStatus
      restaurantDeliveryStatus
      restaurantDeliveryWorkingTimeStatus
      restaurantNextVacationEndDate
      restaurantNextVacationStartDate
      restaurantNextVacationStatus
      restaurantOpenStatus
      restaurantStatusCode
      restaurantStatusParams
      restaurantWorkingHourOpenTime
      reviewCount
      showWorkingHours
      slugName
      timeFrames {
        id
        name
      }
      types {
        iconId
        id
        name
      }
      uid
    }
  }
`;
