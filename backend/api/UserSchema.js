
const UserSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['owner', 'staff', 'member'] },
  gymId: { type: Schema.Types.ObjectId, ref: 'Gym' },
  profile: {
    firstName: String,
    lastName: String,
    phone: String,
    avatarUrl: String,
  },
  permissions: [String],
  lastLogin: Date,
  status: { type: String, enum: ['active', 'suspended'] },
});