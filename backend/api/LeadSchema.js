const LeadSchema = new Schema({
  gymId: { type: Schema.Types.ObjectId, ref: 'Gym' },
  name: String,
  email: String,
  phone: String,
  source: { type: String, enum: ['walk-in', 'web', 'referral'] },
  interestLevel: Number,
  assignedTo: { type: Schema.Types.ObjectId, ref: 'Staff' },
  status: { type: String, enum: ['new', 'contacted', 'trial', 'converted'] },
  notes: [
    {
      date: Date,
      content: String,
      staffId: Schema.Types.ObjectId,
    },
  ],
});