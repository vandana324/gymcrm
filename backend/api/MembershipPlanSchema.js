const MembershipPlanSchema = new Schema({
  gymId: { type: Schema.Types.ObjectId, ref: 'Gym' },
  name: String,
  description: String,
  price: Number,
  billingCycle: { type: String, enum: ['monthly', 'quarterly', 'annual'] },
  features: [String],
  minContractMonths: Number,
  maxMembers: Number,
  trialDays: Number,
  isActive: Boolean,
});
