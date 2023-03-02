import Messages from '../database/models/Message.model';
import { IMessage } from '../interfaces';

export default class MessagesService {
  private _model = Messages;

  async getAll(): Promise<IMessage[]> {
    const messages = await this._model.findAll();
      
    return messages;
  }

  async postMessage(messageData: IMessage): Promise<IMessage> {   
    const newMessage = await this._model.create({ ...messageData });

    return newMessage.dataValues;
  }
}
