const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/tripplanner')

const Place = db.define('place', {
  address: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  phone: Sequelize.STRING,
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT)
  }
})

const Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars: {
    type: Sequelize.FLOAT(1),
    validate: {
      min: 1,
      max: 5
    }
  },
  amenities: {
    type: Sequelize.STRING
  }
})

const Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age_range: {
    type: Sequelize.ENUM(
      'All',
      '21+'
    )
  }
})

const Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cuisine: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 5
    }
  }
})

Hotel.belongsTo(Place)
Activity.belongsTo(Place)
Restaurant.belongsTo(Place)

module.exports = {
  db: db,
  Hotel: Hotel,
  Activity: Activity,
  Restaurant: Restaurant,
  Place: Place
}
