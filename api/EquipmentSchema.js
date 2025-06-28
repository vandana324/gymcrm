const EquipmentSchema = new Schema({
  gymId: { type: Schema.Types.ObjectId, ref: 'Gym' },
  name: String,
  serialNumber: String,
  purchaseDate: Date,
  lastMaintenance: Date,
  maintenanceInterval: Number,
  status: { type: String, enum: ['active', 'repair', 'retired'] },
});