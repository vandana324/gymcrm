const StaffSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  gymId: { type: Schema.Types.ObjectId, ref: 'Gym' },
  role: { type: String, enum: ['trainer', 'reception', 'manager'] },
  certifications: [String],
  hourlyRate: Number,
  shifts: [
    {
      start: Date,
      end: Date,
      location: String,
    },
  ],
  commissionRate: Number,
});