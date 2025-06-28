const AutomationRuleSchema = new Schema({
  gymId: { type: Schema.Types.ObjectId, ref: 'Gym' },
  trigger: { type: String, enum: ['membership_expiry', 'class_reminder', 'payment_failed'] },
  action: { type: String, enum: ['email', 'sms', 'notification'] },
  templateId: { type: Schema.Types.ObjectId, ref: 'Template' },
  delay: Number,
  isActive: Boolean,
});