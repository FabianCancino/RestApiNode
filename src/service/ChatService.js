import { Op } from "sequelize";
import db from "../db/models";

export default class ChatService {
  async findAll() {
    const { chats } = db;
    return await chats.findAll();
  }

  async findOrCreate(contactId) {
    const { chats } = db;
    return await chats.findOrCreate({
      where: { contactId },
      default: {
        contactId,
        adminId,
      },
    });
  }
}
