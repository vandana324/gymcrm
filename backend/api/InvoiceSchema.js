const InvoiceSchema = new Schema({
  gymId: { type: Schema.Types.ObjectId, ref: 'Gym' },
  memberId: { type: Schema.Types.ObjectId, ref: 'Member' },
  dueDate: Date,
  items: [{ description: String, amount: Number }],
  total: Number,
  tax: Number,
  status: { type: String, enum: ['paid', 'unpaid', 'overdue'] },
});
