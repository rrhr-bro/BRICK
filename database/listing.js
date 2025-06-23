const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Listing = sequelize.define('Listing',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
                unique: true,
            },
            type: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            city: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            status: {
                type: DataTypes.ENUM('active', 'inactive'),
                allowNull: false,
                defaultValue: 'active',
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            publishedAt: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                defaultValue: DataTypes.NOW, 
            },
            userEmail: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        { 
            timestamps: false,
        }
    );

    Listing.associate = function(models) {
        Listing.belongsTo(models.User, {
            foreignKey: 'userEmail',
            targetKey: 'email',});
    };

    return Listing;
    

};