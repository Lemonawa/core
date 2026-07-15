import type {
  ConfigFormField,
  ConfigFormGroup,
  ConfigFormSchema,
  ConfigFormSection,
} from '~/api/options'
import type { Locale } from '~/i18n/types'

import { FORM_LABEL_ZH } from './form-labels-zh'

export function localizeFormLabel(
  text: string | undefined,
  locale: Locale,
): string | undefined {
  if (!text || locale !== 'zh-CN') return text
  return FORM_LABEL_ZH[text] ?? text
}

function localizeField(
  field: ConfigFormField,
  locale: Locale,
): ConfigFormField {
  return {
    ...field,
    description: localizeFormLabel(field.description, locale),
    fields: field.fields?.map((child) => localizeField(child, locale)),
    subsection: field.subsection
      ? {
          description: localizeFormLabel(field.subsection.description, locale),
          title:
            localizeFormLabel(field.subsection.title, locale) ??
            field.subsection.title,
        }
      : undefined,
    title: localizeFormLabel(field.title, locale) ?? field.title,
    ui: {
      ...field.ui,
      actionLabel: localizeFormLabel(field.ui.actionLabel, locale),
      options: field.ui.options?.map((option) => ({
        ...option,
        label: localizeFormLabel(option.label, locale) ?? option.label,
      })),
      placeholder: localizeFormLabel(field.ui.placeholder, locale),
    },
  }
}

function localizeSection(
  section: ConfigFormSection,
  locale: Locale,
): ConfigFormSection {
  return {
    ...section,
    description: localizeFormLabel(section.description, locale),
    fields: section.fields.map((field) => localizeField(field, locale)),
    title: localizeFormLabel(section.title, locale) ?? section.title,
  }
}

export function localizeFormGroup(
  group: ConfigFormGroup,
  locale: Locale,
): ConfigFormGroup {
  return {
    ...group,
    description:
      localizeFormLabel(group.description, locale) ?? group.description,
    sections: group.sections.map((section) => localizeSection(section, locale)),
    title: localizeFormLabel(group.title, locale) ?? group.title,
  }
}

export function localizeFormSchema(
  schema: ConfigFormSchema,
  locale: Locale,
): ConfigFormSchema {
  if (locale !== 'zh-CN') return schema
  return {
    ...schema,
    description: localizeFormLabel(schema.description, locale),
    groups: schema.groups.map((group) => localizeFormGroup(group, locale)),
    title: localizeFormLabel(schema.title, locale) ?? schema.title,
  }
}
