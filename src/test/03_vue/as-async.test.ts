import { flushPromises, mount } from '@vue/test-utils'
import { it, expect,vi} from 'vitest'
import AsAsync from '@/components/AsAsync.vue'

it('加载异步组件', async () => {
  expect(AsAsync).toBeTruthy()

  const wrapper = mount(AsAsync)

  await wrapper.find('button').trigger('click')

  await flushPromises() // start loading, so vitest started loading
  await vi.dynamicImportSettled()

  expect(wrapper.html()).toContain('1 x 2 = 2')
})
