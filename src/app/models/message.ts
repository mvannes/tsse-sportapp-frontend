export class Message {

  private _timestamp: number;
  private _statusId: number;
  private _messageId: number;
  private _typeId: number;
  private _sessionId: number;
  private _senderKey: number;
  private _receiverKey: number;
  private _message: string;
  private _timeSent: number;
  private _timeRead: number;


  constructor(timestamp: number, statusId: number, messageId: number, typeId: number, sessionId: number, senderKey: number, receiverKey: number, message: string, timeSent: number, timeRead: number) {
    this._timestamp = timestamp;
    this._statusId = statusId;
    this._messageId = messageId;
    this._typeId = typeId;
    this._sessionId = sessionId;
    this._senderKey = senderKey;
    this._receiverKey = receiverKey;
    this._message = message;
    this._timeSent = timeSent;
    this._timeRead = timeRead;
  }


  get timestamp(): number {
    return this._timestamp;
  }

  set timestamp(value: number) {
    this._timestamp = value;
  }

  get statusId(): number {
    return this._statusId;
  }

  set statusId(value: number) {
    this._statusId = value;
  }

  get messageId(): number {
    return this._messageId;
  }

  set messageId(value: number) {
    this._messageId = value;
  }

  get typeId(): number {
    return this._typeId;
  }

  set typeId(value: number) {
    this._typeId = value;
  }

  get sessionId(): number {
    return this._sessionId;
  }

  set sessionId(value: number) {
    this._sessionId = value;
  }

  get senderKey(): number {
    return this._senderKey;
  }

  set senderKey(value: number) {
    this._senderKey = value;
  }

  get receiverKey(): number {
    return this._receiverKey;
  }

  set receiverKey(value: number) {
    this._receiverKey = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  get timeSent(): number {
    return this._timeSent;
  }

  set timeSent(value: number) {
    this._timeSent = value;
  }

  get timeRead(): number {
    return this._timeRead;
  }

  set timeRead(value: number) {
    this._timeRead = value;
  }
}
