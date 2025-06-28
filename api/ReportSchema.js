const ReportSchema = new Schema({
  gymId: { type: Schema.Types.ObjectId, ref: 'Gym' },
  type: { type: String, enum: ['financial', 'attendance', 'retention'] },
  period: { type: String, enum: ['daily', 'weekly', 'monthly'] },
  data: Schema.Types.Mixed,
  generatedAt: Date,
});