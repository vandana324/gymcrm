const ClassScheduleSchema = new Schema({
  classId: { type: Schema.Types.ObjectId, ref: 'FitnessClass' },
  startTime: Date,
  endTime: Date,
  location: String,
  attendees: [
    {
      memberId: { type: Schema.Types.ObjectId, ref: 'Member' },
      status: { type: String, enum: ['booked', 'attended', 'cancelled'] },
    },
  ],
  waitlist: [{ type: Schema.Types.ObjectId, ref: 'Member' }],
});