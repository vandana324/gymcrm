const CheckinSchema = new Schema({
  memberId: { type: Schema.Types.ObjectId, ref: 'Member' },
  gymId: { type: Schema.Types.ObjectId, ref: 'Gym' },
  timestamp: Date,
  method: { type: String, enum: ['qr', 'nfc', 'manual'] },
  location: String,
  duration: Number,
});
