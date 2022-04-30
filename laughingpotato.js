/*
After a hard quarter in the office you decide to get some rest on vacation. So you book a flight for yourself and a friend in an attempt to leave the external mess behind. At your destination airport, you go to Schmertz Rental to find a car for your getaway. The manager at Schmertz makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write code that gives the total cost of the rental given d days.
*/

function rentalCarCost(d) {
    const DAYS = d
    const DAILY_RATE = 40
    return baseCost(DAYS, DAILY_RATE) - discount(DAYS)
  }
  
const baseCost = (days, rate) => days * rate
  
const discount = (days) => (days >= 7) ? 50 : (days >= 3) ? 20 : 0