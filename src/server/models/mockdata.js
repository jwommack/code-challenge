module.exports = (sequelize, DataTypes) => {
    const MockData = sequelize.define("MockData", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        email: DataTypes.TEXT,
        message: DataTypes.TEXT,
        foo: DataTypes.TEXT,
        bar: DataTypes.TEXT
    });
    return MockData;
};

