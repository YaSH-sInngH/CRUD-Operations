import mongoose from "mongoose";

const counterSchema = mongoose.Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 },
});

const Counter = mongoose.model("Counter", counterSchema);

const userSchema = new mongoose.Schema({
    userId: { type: Number, unique: true },
    name: String,
    username: String,
    email: String,
    phone: String,
});

userSchema.pre("save", function (next) {
    const doc = this;
    Counter.findByIdAndUpdate(
      { _id: "userId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    )
      .then(function (counter) {
        if (!counter) {
          console.error("Counter document not found! Check if 'counters' collection exists.");
          return next(new Error("Counter document not found"));
        }
        console.log("Counter document found:", counter);
        doc.userId = counter.seq;
        next();
      })
      .catch(function (error) {
        console.error("Error updating counter:", error);
        return next(error);
      });
  });


const User = mongoose.model("User", userSchema);
export default User;