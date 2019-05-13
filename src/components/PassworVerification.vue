<template>
  <div class="password-verification">
    <div class="card">
      <div class="card-content">
        <h3 class="subtitle is-4 has-text-grey-light">AVALIADOR DE SEGURANÇA DE SENHA</h3>
        <div class="notification">
          <div class="columns is-multiline">
            <div class="column is-4">
              <input
                class="input"
                v-model="payload.password"
                @input="onInput($event)"
                placeholder="Senha"
              >
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <span
                class="tag has-background-grey-light password-verification__percentage">
                {{ result.percentage }} %
              </span>
              <span class="tag is-danger">{{ result.complexity }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PassworVerificationService from './PassworVerificationService';

export default {
  name: 'PasswordVerification',
  data() {
    return {
      payload: {
        password: '',
      },
      result: {
        percentage: 0,
        complexity: 'Muito curta',
      },
      complexities: {
        TOO_SHORT: 'Muito curta',
        VERY_WEAK: 'Muito fraca',
        WEAK: 'Fraca',
        GOOD: 'Boa',
        STRONG: 'Forte',
        VERY_STRONG: 'Muito forte',
      },
    };
  },
  methods: {
    onInput() {
      if (!this.payload.password) return;
      PassworVerificationService.verify(this.payload)
        .then(({ data }) => {
          this.result = {
            ...data,
            complexity: this.complexities[data.complexity],
          };
        });
    },
  },
};
</script>

<style lang="sass" scoped>
  .password-verification
    margin-top: 50px
    &__percentage
      margin-right: 10px
</style>
