const NotificationSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  type: { type: String, enum: ['system', 'promotion', 'reminder'] },
  title: String,
  body: String,
  sentAt: Date,
  read: Boolean,
});