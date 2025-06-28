const FitnessClassSchema = new Schema({
  gymId: { type: Schema.Types.ObjectId, ref: 'Gym' },
  title: String,
  description: String,
  instructorId: { type: Schema.Types.ObjectId, ref: 'User' },
  capacity: Number,
  duration: Number,
  category: { type: String, enum: ['yoga', 'hiit', 'strength'] },
  equipmentRequired: [String],
});