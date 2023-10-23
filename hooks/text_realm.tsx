import Realm from "realm"

export class ParametriceText extends Realm.Object {
  static schema = {
    name: "ParametriceText",
    properties: {
      id: "int",
      value: "string",
      language: "string"
    },
    primaryKey: "id"
  }
}
