export interface PostProps {
  thumbnail: string
  images: string[]
  groomName: string
  groomParentsName: ParentsName
  grideName: string
  grideParentsName: ParentsName
  address: string
  location: string
  trafficInfo: {
    car: string
    metro: string
    bus: string
  }
  groomAccount: Account[]
  grideAccount: Account[]
  weddingDate: string
  message: string
  groomPhoneNumber: PhoneNumber[]
  gridePhoneNumber: PhoneNumber[]
  calendarImage: string
}

export interface ParentsName {
  farther: string
  mother: string
}

export interface Account {
  bankName: string
  accountNumber: string
  name: string
}

export interface PhoneNumber {
  phoneNumber: string
  name: string
}
