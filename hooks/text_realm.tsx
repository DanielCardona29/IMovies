import { createRealmContext } from "@realm/react"
import Realm from "realm"

class ParametriceText extends Realm.Object {
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

const realmConfig = {
  schema: [ParametriceText],
  schemaVersion: 0
}

// create a contex
export const { RealmProvider: ParametriceProviders, useObject: ParametriceUseObject, useQuery: ParametriceUseQuery, useRealm: ParametriceUseRealm } = createRealmContext(realmConfig)
