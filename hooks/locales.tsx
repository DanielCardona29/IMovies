import { useQuery, useRealm } from '@realm/react'
import React, { useCallback, useMemo } from 'react'
import { ParametriceText } from './models'
import { BSON } from 'realm'
interface localesType {
  t: (key: string) => string
}

// This contains the bdResponse parametrice simulator
const bdLoaces = [
  {
    _id: new BSON.ObjectId(),
    identy: 'home',
    value: 'Home',
    language: 'en'
  },
  {
    _id: new BSON.ObjectId(),
    identy: 'home',
    value: 'Inicio',
    language: 'es'
  }
]

const localesContext = React.createContext<localesType>({ t: (key: string) => key })

interface localesType {
  t: (key: string) => string
  setShowDone?: (showDone: boolean) => void
}

interface parametriceTextType {
  _id: BSON.ObjectId
  identy: string
  value: string
  language: string
}
const LocalesProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  const locales = useQuery(
    ParametriceText,
    collection => collection.sorted('language')
  )
  const realm = useRealm()

  const t = (key: string): string => {
    const locale = locales.find(({ identy }: any) => identy === key) ?? null
    return locale !== null ? locale.value : key
  }

  const handleAddText = useCallback(
    (identy: string, value: string, language: string): void => {
      if (identy === '') {
        return
      }
      realm.write(() => {
        return realm.create(ParametriceText, {
          value,
          identy,
          language
        })
      })
    },
    [realm]
  )

  const changeParametriceValue = useCallback(
    (text: ParametriceText & Realm.Object, newValue: string): void => {
      realm.write(() => {
        text.value = newValue
      })
    },
    [realm]
  )

  // Write or update the parametriceText
  const handleUpdateText = useCallback(
    ({ _id, identy, value, language }: parametriceTextType): void => {
      const text = realm.objectForPrimaryKey(ParametriceText, _id)
      if (text !== null) {
        changeParametriceValue(text, value)
      } else {
        handleAddText(identy, value, language)
      }
    },
    [realm, changeParametriceValue, handleAddText]
  )

  useMemo(() => {
    if (locales.length === 0) {
      bdLoaces.forEach(({ _id, identy, value, language }) => {
        handleUpdateText(({ _id, identy, value, language }))
      })
    }
  }, [locales])

  const values: localesType = {
    t
  }

  return (
        <localesContext.Provider value={values}>
            {children}
        </localesContext.Provider>
  )
}

export default LocalesProvider
