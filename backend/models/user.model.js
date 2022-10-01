const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },

    email: {
      type: String,
      require: true,
      unique: true,
    },
    photo: {
      type: String,
      require: true,
      default:
        "https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/344/external-user-user-tanah-basah-glyph-tanah-basah-7.png",
    },
    role: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
