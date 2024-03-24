import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from './settings';

const initI18next = async (lng, ns) => {
  // on server side we create a new instance for each render, because during compilation everything seems to be executed in parallel
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    // 根据语言和命名空间加载翻译文件
    .use(
      resourcesToBackend((language, namespace) =>
        import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lng, ns));
  return i18nInstance;
};
// 它将接受 i18next 的语言环境和命名空间以了解要加载的文件
export async function useTranslation(lng, ns, options = {}) {
  const i18nextInstance = await initI18next(lng, ns);
  return {
    // 这是我们将在组件中使用的翻译函数
    // e.g. t('greeting')
    t: i18nextInstance.getFixedT(
      lng,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix
    ),
    i18n: i18nextInstance,
  };
}
