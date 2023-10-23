import Realm, { BSON } from 'realm'

export class ParametriceText extends Realm.Object {
  _id: BSON.ObjectId = new BSON.ObjectId()
  identy!: string
  value!: string
  language: string = 'en'

  static primaryKey = '_id'
}
