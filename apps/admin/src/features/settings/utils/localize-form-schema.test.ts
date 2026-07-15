import { describe, expect, it } from 'vitest'

import type { ConfigFormSchema } from '~/api/options'

import { FORM_LABEL_ZH } from './form-labels-zh'
import { localizeFormLabel, localizeFormSchema } from './localize-form-schema'

const sampleSchema: ConfigFormSchema = {
  defaults: {},
  description:
    '* Sensitive fields are hidden; the backend does not return them by default, so they appear empty',
  groups: [
    {
      description: 'Site URL, SEO',
      icon: 'globe',
      key: 'site',
      sections: [
        {
          description: undefined,
          fields: [
            {
              description:
                'Required for Resend; optional for SMTP (defaults to the SMTP username if omitted)',
              key: 'from',
              title: 'Sender email address',
              ui: {
                component: 'input',
                options: [
                  { label: 'Binary', value: 'binary' },
                  { label: 'Score', value: 'score' },
                ],
              },
            },
          ],
          key: 'mailOptions',
          title: 'Email notifications',
        },
      ],
      title: 'Site',
    },
  ],
  title: 'Settings',
}

describe('localizeFormLabel', () => {
  it('translates known English labels for zh-CN', () => {
    expect(localizeFormLabel('Site', 'zh-CN')).toBe('网站')
    expect(localizeFormLabel('Email notifications', 'zh-CN')).toBe(
      '邮件通知设置',
    )
  })

  it('keeps English for en-US', () => {
    expect(localizeFormLabel('Site', 'en-US')).toBe('Site')
  })

  it('falls back to original text when unmapped', () => {
    expect(localizeFormLabel('Unmapped Label XYZ', 'zh-CN')).toBe(
      'Unmapped Label XYZ',
    )
  })
})

describe('localizeFormSchema', () => {
  it('localizes nested titles, descriptions, and select options for zh-CN', () => {
    const localized = localizeFormSchema(sampleSchema, 'zh-CN')
    expect(localized.title).toBe('设置')
    expect(localized.groups[0]?.title).toBe('网站')
    expect(localized.groups[0]?.description).toBe('站点地址、SEO')
    expect(localized.groups[0]?.sections[0]?.title).toBe('邮件通知设置')
    expect(localized.groups[0]?.sections[0]?.fields[0]?.title).toBe(
      '发件邮箱地址',
    )
    expect(localized.groups[0]?.sections[0]?.fields[0]?.description).toBe(
      FORM_LABEL_ZH[
        'Required for Resend; optional for SMTP (defaults to the SMTP username if omitted)'
      ],
    )
    expect(
      localized.groups[0]?.sections[0]?.fields[0]?.ui.options?.[0]?.label,
    ).toBe('是非')
  })

  it('returns the same schema for en-US', () => {
    expect(localizeFormSchema(sampleSchema, 'en-US')).toBe(sampleSchema)
  })
})
