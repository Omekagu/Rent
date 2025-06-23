import React from 'react'
import { ScrollView } from 'react-native'
import PropertySearchCard from '../components/PropertySearchCard'

export const propertyListWide = [
  {
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: 'Sports Proof',
    address: '59539 Crist Mount - Yogyakarta',
    beds: 4,
    garages: 1,
    baths: 2,
    price: '32',
    rating: '4.9'
  },
  {
    image:
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    title: 'Modern Villa',
    address: '2201 Palm St - Los Angeles',
    beds: 5,
    garages: 2,
    baths: 4,
    price: '45',
    rating: '4.8'
  },
  {
    image:
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
    title: 'Urban Flat',
    address: '11 Market Ave - New York',
    beds: 2,
    garages: 0,
    baths: 1,
    price: '21',
    rating: '4.7'
  },
  {
    image:
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80',
    title: 'Family Home',
    address: '85 Family Rd - Houston',
    beds: 3,
    garages: 1,
    baths: 2,
    price: '28',
    rating: '4.6'
  },
  {
    image:
      'https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=80',
    title: 'Lake House',
    address: '799 Lake View - Austin',
    beds: 4,
    garages: 1,
    baths: 2,
    price: '39',
    rating: '4.8'
  },
  {
    image:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: 'Studio Loft',
    address: '17 Loft St - Chicago',
    beds: 1,
    garages: 0,
    baths: 1,
    price: '19',
    rating: '4.5'
  },
  {
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80',
    title: 'Eco Home',
    address: '52 Green Way - Portland',
    beds: 3,
    garages: 1,
    baths: 2,
    price: '31',
    rating: '4.9'
  },
  {
    image:
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    title: 'Penthouse',
    address: '1100 Sky Ave - Miami',
    beds: 6,
    garages: 3,
    baths: 5,
    price: '89',
    rating: '5.0'
  },
  {
    image:
      'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=400&q=80',
    title: 'Cottage',
    address: '2 Old Mill - Boston',
    beds: 2,
    garages: 1,
    baths: 1,
    price: '23',
    rating: '4.4'
  },
  {
    image:
      'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=80',
    title: 'Garden House',
    address: '4 Garden Lane - San Diego',
    beds: 3,
    garages: 1,
    baths: 2,
    price: '34',
    rating: '4.7'
  }
]

const PropertySearchScreen = () => {
  return (
    <ScrollView
      style={{ padding: 16, marginTop: 30 }}
      contentContainerStyle={{ gap: 16 }}
    >
      {propertyListWide.map((property, idx) => (
        <PropertySearchCard key={idx} {...property} />
      ))}
    </ScrollView>
  )
}
export default PropertySearchScreen

// const styles = StyleSheet.create({
