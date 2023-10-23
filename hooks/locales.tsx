import React, { useEffect, useState } from 'react'
import { ParametriceText, ParametriceUseQuery, ParametriceUseRealm } from './text_realm'

interface localesType {

}

const LoaclesContext = React.createContext<localesType>({})

const LoaclesProvider: React.FC<React.PropsWithChildren<unknown>> = ({ children }): JSX.Element => {
  const [allText, setText] = useState<Realm.Results<any>>()

  //   const realm = ParametriceUseRealm()

  const FindFilterComponent = (): void => {
    const texts = ParametriceUseQuery(ParametriceText)
    setText(texts)
  }

  useEffect(() => {
    FindFilterComponent()

    console.log('allText', allText)
  }, [])

  const values: localesType = {}
  return <LoaclesContext.Provider value={values}>{children}</LoaclesContext.Provider>
}

export default LoaclesProvider
