// https://vike.dev/onPageTransitionStart
export { onPageTransitionStart }

import type { OnPageTransitionStartAsync } from 'vike/types'

const onPageTransitionStart: OnPageTransitionStartAsync = async (): ReturnType<OnPageTransitionStartAsync> => {
  console.log('Page transition start')
  const pageContainer = document.querySelector('#page-container')!
  pageContainer.classList.add('page-is-transitioning')
  // Wait briefly for the transition effect to begin before starting the transition
  await new Promise(resolve => setTimeout(resolve, 1000))
}
