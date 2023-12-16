import UserModel from "../model/userModel.js";

const registerController = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      address1,
      address2,
      city,
      state,
      country,
      pin,
      description,
    } = req.body;
    if (!name) {
      return res.send({ message: "name is require" });
    }
    if (!email) {
      return res.send({ message: "email is require" });
    }
    if (!company) {
      return res.send({ message: "company is require" });
    }
    if (!city) {
      return res.send({ message: "city is require" });
    }
    if (!state) {
      return res.send({ message: "state is require" });
    }
    if (!country) {
      return res.send({ message: "country is require" });
    }
    if (!pin) {
      return res.send({ message: "pin is require" });
    }
    if (!description) {
      return res.send({ message: "description is require" });
    }
    if (!address1) {
      return res.send({ message: "address1 is require" });
    }

    if (!phone) {
      return res.send({ message: "phone is require" });
    }

    const user = await new UserModel({
      name,
      email,
      address1,
      address2,
      phone,
      company,
      city,
      state,
      country,
      pin,
      description,
    }).save();
    res.status(200).send({
      success: true,
      message: "query send successfully",
      user: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in sending",
      error,
    });
  }
};

export default registerController;
