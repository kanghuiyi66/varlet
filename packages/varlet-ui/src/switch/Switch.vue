<template>
  <div :class="n()">
    <div
      :class="classes(n('block'), [disabled || formDisabled, n('--disable')])"
      @click="switchActive"
      :style="styleComputed.switch"
    >
      <div
        :style="styleComputed.track"
        :class="classes(n('track'), [modelValue === activeValue, n('track-active')], [errorMessage, n('track-error')])"
      ></div>
      <div
        :class="n('ripple')"
        :style="styleComputed.ripple"
        v-ripple="{
          disabled: !ripple || disabled || loading || formDisabled,
        }"
      >
        <div
          :style="styleComputed.handle"
          :class="
            classes(
              n('handle'),
              'var-elevation--2',
              [modelValue === activeValue, n('handle-active')],
              [errorMessage, n('handle-error')]
            )
          "
        >
          <var-loading v-if="loading" :radius="toNumber(size) / 2 - 2" />
        </div>
      </div>
    </div>
    <var-form-details :error-message="errorMessage" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, nextTick } from 'vue'
import { useValidation, createNamespace, call } from '../utils/components'
import { toNumber } from '../utils/shared'
import { useForm } from '../form/provide'
import { props } from './props'
import VarFormDetails from '../form-details'
import VarLoading from '../loading'
import Ripple from '../ripple'
import type { ComputedRef } from 'vue'
import type { SwitchProvider } from './provide'

const { n, classes } = createNamespace('switch')

type StyleProps = {
  width: string
  height: string
  left: string
  borderRadius: string
  backgroundColor: string
  color: string
}

export default defineComponent({
  name: 'VarSwitch',
  components: {
    VarLoading,
    VarFormDetails,
  },
  directives: { Ripple },
  props,
  setup(props) {
    const { bindForm, form } = useForm()
    const { errorMessage, validateWithTrigger: vt, validate: v, resetValidation } = useValidation()

    const validate = () => v(props.rules, props.modelValue)

    const validateWithTrigger = () => nextTick(() => vt(['onChange'], 'onChange', props.rules, props.modelValue))

    const styleComputed: ComputedRef<Record<string, Partial<StyleProps>>> = computed(() => {
      const { size, modelValue, color, closeColor, loadingColor, activeValue } = props

      const sizeNum = toNumber(size)
      const switchWidth = sizeNum * 2
      const switchHeight = sizeNum * 1.2

      return {
        handle: {
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: modelValue === activeValue ? color || '' : closeColor || '',
          color: loadingColor && loadingColor,
        },
        ripple: {
          left: modelValue === activeValue ? `${sizeNum / 2}px` : `-${sizeNum / 2}px`,
          color: modelValue === activeValue ? color || '' : closeColor || '#999',
          width: `${sizeNum * 2}px`,
          height: `${sizeNum * 2}px`,
        },
        track: {
          height: `${switchHeight * 0.6}px`,
          width: `${switchWidth - 2}px`,
          borderRadius: `${switchWidth / 3}px`,
          filter: modelValue === activeValue || errorMessage?.value ? 'opacity(.6)' : 'brightness(.6)',
          backgroundColor: modelValue === activeValue ? color || '' : closeColor || '',
        },
        switch: {
          height: `${switchHeight}px`,
          width: `${switchWidth}px`,
        },
      }
    })

    const switchActive = (event: MouseEvent) => {
      const {
        onClick,
        onChange,
        disabled,
        loading,
        readonly,
        modelValue,
        activeValue,
        inactiveValue,
        'onUpdate:modelValue': updateModelValue,
      } = props

      call(onClick, event)
      if (disabled || loading || readonly || form?.disabled.value || form?.readonly.value) return
      const newValue = modelValue === activeValue ? inactiveValue : activeValue
      call(onChange, newValue)
      call(updateModelValue, newValue)
      validateWithTrigger()
    }

    const reset = () => {
      call(props['onUpdate:modelValue'], props.inactiveValue)
      resetValidation()
    }

    const switchProvider: SwitchProvider = {
      reset,
      validate,
      resetValidation,
    }
    call(bindForm, switchProvider)

    return {
      n,
      classes,
      switchActive,
      toNumber,
      styleComputed,
      errorMessage,
      formDisabled: form?.disabled,
      formReadonly: form?.readonly,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../ripple/ripple';
@import '../loading/loading';
@import '../form-details/formDetails';
@import './switch';
</style>
