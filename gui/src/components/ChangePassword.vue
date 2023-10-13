<script setup>
import {ref, watch} from "vue";
import {useRouter} from "vue-router";
import {useLoginStore} from "stores/LoginStore";
import {useQuasar} from "quasar";
import {userApi} from "boot/axios";

const props = defineProps({
  isOpen: Boolean,
  close: Function,
})
const $q = useQuasar();
const loginStore = useLoginStore();
const router = useRouter();
const form = ref({
  old_password: '',
  new_password: '',
  confirm_password: '',
})
const sameError = ref(false);
const differentError = ref(false);
watch(form.value, () => {
  sameError.value = form.value.new_password === form.value.old_password;
  differentError.value = form.value.new_password !== form.value.confirm_password;
})
const submit = () => {
  userApi.post('/user/change_password/', form.value).then((res) => {
    console.log(res)
    if (res.data.hasOwnProperty('error')) {
      $q.notify({
        message: res.data.error,
        color: 'negative',
        icon: 'report_problem',
        position: 'top',
        timeout: 2000,
      })
      return;
    } else {
      $q.notify({
        message: res.data.message,
        color: 'positive',
        icon: 'check',
        position: 'top',
        timeout: 2000,
      })
      props.close();
    }
  }).catch((err) => {
    $q.notify({
      message: err.toString(),
      color: 'negative',
      icon: 'report_problem',
      position: 'top',
      timeout: 2000,
    })
  })
}
</script>
<template>
  <q-card class="q-ma-md" style="min-width: 400px">
    <q-card-section>
      <q-form>
        <q-input
          v-model="form.old_password"
          :error="sameError"
          :error-message="sameError?'新旧密码不能相同':''"
          filled
          label="旧密码"
          type="password"
        >
        </q-input>
        <q-input
          v-model="form.new_password"
          :error="sameError"
          :error-message="sameError?'新旧密码不能相同':''"
          filled
          label="新密码"
          type="password"
        >
        </q-input>
        <q-input
          v-model="form.confirm_password"
          :error="differentError"
          :error-message="differentError?'两次密码不一致':''"
          filled
          label="确认密码"
          type="password"
        >
        </q-input>

        <div class="justify-center flex-center flex">
          <q-btn class="q-ma-md" color="red" label="取消" type="submit" @click="props.close"/>
          <q-btn class="q-ma-md" color="primary" label="修改密码" type="submit" @click="submit"/>
        </div>

      </q-form>
    </q-card-section>
  </q-card>
</template>
