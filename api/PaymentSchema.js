const PaymentSchema = new Schema({
  memberId: { type: Schema.Types.ObjectId, ref: 'Member' },
  amount: Number,
  date: Date,
  method: { type: String, enum: ['credit', 'debit', 'cash', 'bank'] },
  transactionId: String,
  invoiceId: { type: Schema.Types.ObjectId, ref: 'Invoice' },
  status: { type: String, enum: ['success', 'pending', 'failed'] },
});
