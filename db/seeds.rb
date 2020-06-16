# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Cleaning database (messages, users and then channels)'
Message.destroy_all
User.destroy_all
Channel.destroy_all

puts 'Creating channels...'

channels_attributes = [
  { name: 'new' },
]
Channel.create!(channels_attributes)

puts 'Creating users...'

users_attributes = [
  {
    email:         'test#1@email.com',
    password:      '123456',
    password_confirmation: '123456',
    nickname: 'test#1',
    id: '1'
  },
  {
    email:         'test#2@email.com',
    password:      '123456',
    password_confirmation: '123456',
    nickname: 'test#2',
    id: '2'
  }
]
User.create!(users_attributes)
