'use client'
import type { FC } from 'react'
import React from 'react'
import type { StructuredOutput } from '../../../../../llm/types'
import Field from './field'
import { useTranslation } from 'react-i18next'

type Props = {
  payload: StructuredOutput
}

const ShowPanel: FC<Props> = ({
  payload,
}) => {
  const { t } = useTranslation()
  const schema = {
    ...payload,
    schema: {
      ...payload.schema,
      description: t('app.structOutput.LLMResponse'),
    },
  }
  return (
    <div>
      <Field
        name={'response'}
        payload={schema.schema}
        required
      />
    </div>
  )
}
export default React.memo(ShowPanel)
