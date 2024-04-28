import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db'; 

class FileModel extends Model {}

FileModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filePath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'File',
    tableName: 'files',
    timestamps: false,
  }
);

export default FileModel;
