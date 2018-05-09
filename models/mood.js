module.exports =  function(sequelize, DataTypes){
    var Mood = sequelize.define("Mood", {

        createdAt: {
            type: DataTypes.DATE(3),
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
          },
        anxiety: {
            type: DataTypes.INTEGER,
            allowNull: false,        
        },
        depression: {
            type: DataTypes.INTEGER,
            allowNull: false,        
        },
        concentration: {
            type: DataTypes.INTEGER,
            allowNull: false,        
        },
        energy: {
            type: DataTypes.INTEGER,
            allowNull: false,        
        },
        sleep: {
            type: DataTypes.INTEGER,
            allowNull: false,        
        },  
    }, {
        timestamps: false,
        createdAt: true,
        updatedAt: false,
    });

    // Mood.associate = function(models){
    //     Mood.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Mood;

};

