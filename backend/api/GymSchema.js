const GymSchema = new Schema({
  ownerId: { type: Schema.Types.ObjectId, ref: 'User' },
  name: String,
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String,
  },
  contact: {
    phone: String,
    email: String,
    website: String,
  },
  operatingHours: [
    {
      day: { type: String, enum: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] },
      open: String,
      close: String,
    },
  ],
  facilities: [String],
  timezone: String,
});