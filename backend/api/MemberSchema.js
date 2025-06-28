const MemberSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  gymId: { type: Schema.Types.ObjectId, ref: 'Gym' },
  membershipId: { type: Schema.Types.ObjectId, ref: 'MembershipPlan' },
  emergencyContact: {
    name: String,
    phone: String,
    relation: String,
  },
  healthInfo: {
    allergies: [String],
    conditions: [String],
    physician: String,
  },
  startDate: Date,
  endDate: Date,
  paymentStatus: { type: String, enum: ['current', 'delinquent'] },
  checkinCount: Number,
  lastCheckin: Date,
  tags: [String],
});