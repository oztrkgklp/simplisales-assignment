export default () => `
query request {
    user {
      addresses {
        addressIconId
        addressLine1
        addressLine2
        adminWard
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
        default
        flatNumber
        fullName
        geoEnabled
        id
        lat
        lon
        postalCode
        slugAdminWard
        tips
        title
      }
      createdAt
      email
      emailVerified
      firebaseUserUid
      firstName
      lastName
      mobileNumber
      points
      profilePicture {
        alt
        bundle
        height
        id
        title
        url
        width
      }
      smsVerified
      uid
    } 
  }
`;
