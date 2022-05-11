export default (index, limit) => `
        query request{ 
            pastOrders(index: ${index}, limit: ${limit}) {
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
                fullName
                geoEnabled
                id
                lat
                lon
                postalCode
                tips
                title
                userAddressId
            }
            deliveryDriver {
                avgScore
                email
                firstName
                lastName
                location {
                createdAt
                lat
                lon
                }
                mobileNumber
                uid
            }
            deliveryFee
            deliveryTime
            deliveryType
            earnedPoints
            items {
                amount
                description
                id
                name
                note
                oldAmount
                options {
                id
                multipleSelection
                name
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
                quantity
                totalAmount
                types {
                id
                name
                }
            }
            orderCheckDeadline
            orderCompletedRewardPoints
            orderDate
            orderDeclineReason
            orderDeliveryDeadline
            orderEarliestDeliveryDeadline
            orderEarliestPreparingDeadline
            orderLatestDeliveryDeadline
            orderLatestPreparingDeadline
            orderPreparingDeadline
            orderPreparingDelay
            preOrder
            preparationTime
            promoCode {
                afterGainAmount
                beforeGainAmount
                code
                createdAt
                description
                expiryAt
                gainAmount
                gainStage
                gainType
                id
                minOrderAmount
                restaurantName
                restaurantUID
                restaurants {
                name
                uid
                }
                shops {
                name
                uid
                }
                title
                type
                useAble
                useAbleForRestaurant
                usedAt
            }
            refund {
                amount
            }
            restaurant {
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
                contactMobileNumber
                deliveryType
                name
                uid
            }
            restaurantDeliveryType
            review {
                createdAt
                id
                pointsEarned
            }
            smallAmountFee
            status
            subTotal
            tip {
                amount
                createdAt
            }
            total
            totalPromoCodeAmount
            uid
            usedPoints
            userCanCall
            userCanRate
            userCanReOrder
            userCanTip
            } 
        }
    `;
