module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("customer", {
    customerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    customerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerPhone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Customer.bulkCreate([
    {
      customerName: "Jarrett",
      customerEmail: "jarrett@gmail.com",
      customerPhone: "+1 202-918-2132",
    },
    {
      customerName: "Nathan",
      customerEmail: "nathan@gmail.com",
      customerPhone: "+1 414-401-8654",
    },
    {
      customerName: "Delores",
      customerEmail: "delores@gmail.com",
      customerPhone: "+1 505-646-9416",
    },
    {
      customerName: "Gerald",
      customerEmail: "gerald@gmail.com",
      customerPhone: "+1 239-263-5110",
    },
    {
      customerName: "Shelby",
      customerEmail: "shelby@gmail.com",
      customerPhone: "+1 208-912-9382",
    },
    {
      customerName: "Craig",
      customerEmail: "craig@gmail.com",
      customerPhone: "+1 223-539-8855",
    },
    {
      customerName: "William",
      customerEmail: "william@gmail.com",
      customerPhone: "+1 505-850-2895",
    },
    {
      customerName: "Leigh",
      customerEmail: "leigh@gmail.com",
      customerPhone: "+1 334-313-1797",
    },
    {
      customerName: "Francis",
      customerEmail: "francis@gmail.com",
      customerPhone: "+1 424-833-3894",
    },
    {
      customerName: "Issac",
      customerEmail: "isaac@gmail.com",
      customerPhone: "+1 505-646-2605",
    },
  ]).then(() => console.log("Users data have been saved"));
  return Customer;
};
